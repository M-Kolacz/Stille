import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "#app/components/molecules";

// This is a mock data array. In a real application, you'd fetch this data from an API or database.
const articles = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-06-01",
    excerpt:
      "Learn the basics of Next.js and start building awesome React applications.",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    date: "2023-06-15",
    excerpt:
      "Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs quickly.",
  },
  {
    slug: "react-hooks-explained",
    title: "React Hooks Explained",
    date: "2023-07-01",
    excerpt:
      "Understand the power of React Hooks and how they can simplify your React components.",
  },
  {
    slug: "building-rest-api-nodejs",
    title: "Building a REST API with Node.js",
    date: "2023-07-15",
    excerpt:
      "Step-by-step guide to creating a robust REST API using Node.js and Express.",
  },
  {
    slug: "introduction-to-typescript",
    title: "Introduction to TypeScript",
    date: "2023-08-01",
    excerpt:
      "Discover how TypeScript can enhance your JavaScript development experience.",
  },
];

export const BlogList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.slug}>
          <CardHeader>
            <CardTitle>
              <Link to={`/blog/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </CardTitle>
            <CardDescription>{article.date}</CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <p className="text-muted-foreground">{article.excerpt}</p>
            <Link
              to={`/blog/${article.slug}`}
              className="text-primary hover:underline mt-4 inline-block"
            >
              Read more →
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};
