import { createFileRoute } from "@tanstack/react-router";
import { VOICE_SCRIPT, resolveLang } from "@/lib/content";

export const Route = createFileRoute("/api/public/intro-voice")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const lang = resolveLang(url.searchParams.get("lang") ?? "en");
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("Voice service not configured", { status: 503 });
        }

        const response = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini-tts",
            input: VOICE_SCRIPT[lang],
            voice: "ash",
            response_format: "mp3",
            speed: 1.05,
            instructions:
              "Speak as a warm, confident male tech founder in his early twenties. Professional, calm, welcoming, with a light African-French accent. Natural pacing, no rush.",
          }),
        });

        if (!response.ok) {
          const detail = await response.text().catch(() => "");
          return new Response(detail || "Voice generation failed", {
            status: response.status,
          });
        }

        const audio = await response.arrayBuffer();
        return new Response(audio, {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
