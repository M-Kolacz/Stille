import { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta:MetaFunction = () => {
  return [
    { title: "Stille | Blog" },
    { name: "description", content: "Stille blog" },
  ];
}

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link to="/blog/blog-post-1">Blog post 1</Link>
      </li>
      <li>
        <Link to="/blog/blog-post-2">Blog post 2</Link>
      </li>
      <li>
        <Link to="/blog/blog-post-3">Blog post 3</Link>
      </li>
      <li>
        <Link to="/blog/blog-post-4">Blog post 4</Link>
      </li>
    </ul>
  );
}
