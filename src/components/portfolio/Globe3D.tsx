import { useEffect, useRef } from "react";

/**
 * Lightweight WebGL globe: dotted sphere, glowing atmosphere and animated
 * connection arcs between real cities. three.js is loaded on demand so the
 * page stays fast; rendering pauses when the globe is off-screen or the tab
 * is hidden, and stays still for users who prefer reduced motion.
 */

const CITIES: [number, number][] = [
  [49.63, 8.36], // Worms
  [50.11, 8.68], // Frankfurt
  [40.71, -74.0], // New York
  [34.05, -118.24], // Los Angeles
  [6.52, 3.38], // Lagos
  [3.87, 11.52], // Yaoundé
  [19.07, 72.88], // Mumbai
  [-23.55, -46.63], // São Paulo
  [51.5, -0.12], // London
  [35.68, 139.69], // Tokyo
  [-6.2, 106.85], // Jakarta
  [30.04, 31.24], // Cairo
  [19.43, -99.13], // Mexico City
  [-1.29, 36.82], // Nairobi
  [-33.87, 151.21], // Sydney
  [14.6, 120.98], // Manila
  [40.42, -3.7], // Madrid
  [25.2, 55.27], // Dubai
];

const ARCS: [number, number][] = [
  [0, 2], [1, 4], [0, 6], [1, 7], [8, 9], [0, 10], [5, 11], [2, 12],
  [1, 13], [9, 14], [6, 15], [16, 3], [17, 7], [4, 2], [11, 9], [0, 17],
];

export function Globe3D({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmall = window.innerWidth < 640;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        return; // no WebGL: the page still works without the globe
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 1.75));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 3.35);

      const globe = new THREE.Group();
      globe.rotation.x = 0.32;
      scene.add(globe);

      const toVec = (lat: number, lon: number, r = 1) => {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lon + 180) * Math.PI) / 180;
        return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
      };

      // Inner sphere with a soft rim light: hides far-side dots and gives depth
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.985, 64, 64),
        new THREE.ShaderMaterial({
          transparent: true,
          vertexShader: `varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
          fragmentShader: `varying vec3 vN; void main(){ float rim = 1.0 - max(dot(vN, vec3(0.0,0.0,1.0)), 0.0); vec3 base = vec3(0.05,0.08,0.16); vec3 lit = vec3(0.13,0.22,0.45); vec3 c = mix(base, lit, pow(rim, 2.2)) + vec3(0.04,0.06,0.12) * max(dot(vN, normalize(vec3(-0.5,0.6,0.6))), 0.0); gl_FragColor = vec4(c, 0.96); }`,
        }),
      );
      globe.add(core);

      // Dotted surface (fibonacci sphere)
      const count = isSmall ? 1800 : 3200;
      const dotPos = new Float32Array(count * 3);
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const t = golden * i;
        dotPos[i * 3] = Math.cos(t) * radius;
        dotPos[i * 3 + 1] = y;
        dotPos[i * 3 + 2] = Math.sin(t) * radius;
      }
      const dotsGeo = new THREE.BufferGeometry();
      dotsGeo.setAttribute("position", new THREE.BufferAttribute(dotPos, 3));
      const dots = new THREE.Points(
        dotsGeo,
        new THREE.PointsMaterial({ color: 0xb9cbef, size: 0.016, transparent: true, opacity: 0.9, sizeAttenuation: true }),
      );
      globe.add(dots);

      // City markers
      const cityPos = new Float32Array(CITIES.length * 3);
      CITIES.forEach(([lat, lon], i) => {
        const v = toVec(lat, lon, 1.005);
        cityPos.set([v.x, v.y, v.z], i * 3);
      });
      const cityGeo = new THREE.BufferGeometry();
      cityGeo.setAttribute("position", new THREE.BufferAttribute(cityPos, 3));
      const cities = new THREE.Points(
        cityGeo,
        new THREE.PointsMaterial({ color: 0xf2c46d, size: 0.06, transparent: true, opacity: 1, sizeAttenuation: true }),
      );
      globe.add(cities);

      // Atmosphere glow (fresnel)
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.16, 48, 48),
        new THREE.ShaderMaterial({
          transparent: true,
          side: THREE.BackSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexShader: `varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
          fragmentShader: `varying vec3 vN; void main(){ float i = pow(0.68 - dot(vN, vec3(0.0,0.0,1.0)), 3.2); gl_FragColor = vec4(0.36,0.55,0.95,1.0) * i; }`,
        }),
      );
      scene.add(atmosphere);

      // Animated arcs (comet trails travelling between cities)
      const SEG = 90;
      const TRAIL = 48;
      const arcs = ARCS.map(([a, b], i) => {
        const [la, lo] = CITIES[a] ?? [0, 0];
        const [lb, lob] = CITIES[b] ?? [0, 0];
        const va = toVec(la, lo, 1.005);
        const vb = toVec(lb, lob, 1.005);
        const lift = 1 + va.distanceTo(vb) * 0.42;
        const mid = va.clone().add(vb).multiplyScalar(0.5).normalize().multiplyScalar(lift);
        const curve = new THREE.QuadraticBezierCurve3(va, mid, vb);
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(SEG));
        const mat = new THREE.LineBasicMaterial({
          color: i % 3 === 0 ? 0x6fa8ff : 0xf2c46d,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
        });
        const line = new THREE.Line(geo, mat);
        geo.setDrawRange(0, 0);
        globe.add(line);
        // faint full path
        const ghost = new THREE.Line(
          geo.clone(),
          new THREE.LineBasicMaterial({ color: 0x8aa0c8, transparent: true, opacity: 0.18 }),
        );
        globe.add(ghost);
        return { geo, mat, ghost, curve, offset: Math.random(), speed: 0.12 + Math.random() * 0.1 };
      });

      // Bright heads travelling at the front of each arc
      const headPos = new Float32Array(arcs.length * 3);
      const headGeo = new THREE.BufferGeometry();
      headGeo.setAttribute("position", new THREE.BufferAttribute(headPos, 3));
      const heads = new THREE.Points(
        headGeo,
        new THREE.PointsMaterial({ color: 0xfff1c9, size: 0.055, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      globe.add(heads);
      const tmp = new THREE.Vector3();

      // Sizing
      const resize = () => {
        const w = host.clientWidth || 1;
        const h = host.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      // Pointer parallax
      let targetX = 0;
      let targetY = 0;
      const onPointer = (e: PointerEvent) => {
        targetX = (e.clientY / window.innerHeight - 0.5) * 0.25;
        targetY = (e.clientX / window.innerWidth - 0.5) * 0.45;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      // Visibility handling
      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry?.isIntersecting ?? true;
        if (visible) start();
      });
      io.observe(host);
      const onVis = () => {
        if (!document.hidden) start();
      };
      document.addEventListener("visibilitychange", onVis);

      let raf = 0;
      let last = performance.now();
      let spin = 0;
      const frame = (now: number) => {
        raf = 0;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        spin += dt * 0.09;
        globe.rotation.y = spin + targetY * 0.6;
        globe.rotation.x += (0.32 + targetX - globe.rotation.x) * 0.05;
        const time = now / 1000;
        arcs.forEach((arc, i) => {
          const p = (time * arc.speed + arc.offset) % 1.35;
          const head = Math.floor(p * SEG);
          const startIdx = Math.max(0, head - TRAIL);
          const end = Math.min(SEG + 1, head);
          arc.geo.setDrawRange(startIdx, Math.max(0, end - startIdx));
          if (p <= 1) arc.curve.getPoint(p, tmp);
          else tmp.set(0, 0, 0);
          headPos[i * 3] = tmp.x;
          headPos[i * 3 + 1] = tmp.y;
          headPos[i * 3 + 2] = tmp.z;
        });
        headGeo.attributes["position"]!.needsUpdate = true;
        renderer.render(scene, camera);
        if (visible && !document.hidden && !reduceMotion) raf = requestAnimationFrame(frame);
      };
      function start() {
        if (!raf && !disposed) {
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      }
      if (reduceMotion) {
        for (const arc of arcs) arc.geo.setDrawRange(0, SEG + 1);
        renderer.render(scene, camera);
      } else {
        start();
      }
      host.dataset["ready"] = "true";

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onPointer);
        document.removeEventListener("visibilitychange", onVis);
        scene.traverse((obj) => {
          const mesh = obj as unknown as { geometry?: { dispose: () => void }; material?: { dispose: () => void } };
          mesh.geometry?.dispose();
          mesh.material?.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} className={className} />;
}
