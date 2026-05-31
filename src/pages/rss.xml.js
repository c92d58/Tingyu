import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: 'WAHSUN Blog',
    description: 'WAHSUN 的個人部落格，記錄技術與生活',
    site: 'https://blog.wahsun.org',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>zh-tw</language>`,
  });
}
