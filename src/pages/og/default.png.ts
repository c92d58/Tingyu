import type { APIContext } from "astro";
import { generateOgImage } from "../../lib/og";

export async function GET(_context: APIContext) {
  const png = await generateOgImage({
    title: "部落格",
    description: "一方靜謐閱讀之地——書寫系統、科技，以及我們周遭的世界。",
  });
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
