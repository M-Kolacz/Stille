import { BlogList } from "#app/components/organisms";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille | Blog" },
    { name: "description", content: "Stille blog" },
  ];
};

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">All Articles</h1>
      <BlogList />
    </>
  );
}
