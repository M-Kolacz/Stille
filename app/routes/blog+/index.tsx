import ArticleCard from "#app/components/article-card.tsx";
import { getArticles } from "#app/utils/data.ts";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille | Blog" },
    { name: "description", content: "Stille blog" },
  ];
};

export default function HomePage() {
  const articles = getArticles();
  return (
    <>
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Articles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
