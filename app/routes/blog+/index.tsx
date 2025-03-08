import ArticleCard from "#app/components/article-card.tsx";
import { useLoaderData, type MetaFunction } from "react-router";
import { blogCache } from "#app/utils/cache.server.ts";
import { bundleMDX } from "mdx-bundler";
import { Octokit } from "@octokit/rest";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille | Blog" },
    { name: "description", content: "Stille blog" },
  ];
};

export const loader = async () => {
  if (blogCache.has("posts")) {
    return {
      articles: blogCache.get("posts"),
    };
  } else {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    const octokitResult = await octokit.repos.getContent({
      owner: "M-Kolacz",
      repo: "Stille",
      path: "posts",
    });

    if (!(octokitResult.data instanceof Array)) {
      throw new Response("No data returned from octokit", { status: 500 });
    }

    const postsNames = octokitResult.data.map((directory) => directory.name);

    const posts = [];

    for (const post of postsNames) {
      const postResponse = await octokit.repos.getContent({
        owner: "M-Kolacz",
        repo: "Stille",
        path: `posts/${post}/index.mdx`,
      });

      const postContent = Buffer.from(
        postResponse.data.content,
        "base64"
      ).toString("utf-8");

      const { frontmatter } = await bundleMDX<{
        title: string;
        date: string;
        excerpt: string;
      }>({
        source: postContent,
      });
      const convertedFrontmatter = {
        ...frontmatter,
        slug: frontmatter.title.toLowerCase().split(" ").join("-"),
      };

      posts.push(convertedFrontmatter);
    }

    blogCache.set("posts", posts);

    return {
      articles: posts,
    };
  }
};

export default function HomePage() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Articles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
