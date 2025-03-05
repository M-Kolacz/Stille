import ArticleCard from "#app/components/article-card.tsx";
import { useLoaderData, type MetaFunction } from "react-router";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { bundleMDX } from "mdx-bundler";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille | Blog" },
    { name: "description", content: "Stille blog" },
  ];
};

const getFolderNames = async (path: string) => {
  const entries = await readdir(path, { withFileTypes: true });
  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return folders;
};

export const loader = async () => {
  const cwd = process.cwd();

  const names = await getFolderNames(join(cwd, "posts"));

  const articles = [];

  for (const directoryName of names) {
    const articlePath = join(cwd, "posts", directoryName, "index.mdx");
    const articleContent = await readFile(articlePath, "utf-8");
    const { frontmatter } = await bundleMDX<{
      title: string;
      date: string;
      excerpt: string;
    }>({
      source: articleContent,
    });
    const convertedFrontmatter = {
      ...frontmatter,
      slug: frontmatter.title.toLowerCase().split(" ").join("-"),
    };

    articles.push(convertedFrontmatter);
  }

  return {
    articles,
  };
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
