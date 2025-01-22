import { Link } from "react-router";

const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-06-01",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    date: "2023-06-15",
  },
  {
    slug: "react-hooks-explained",
    title: "React Hooks Explained",
    date: "2023-07-01",
  },
];

export const RecentPosts = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/blog" className="text-primary hover:underline">
          View all posts →
        </Link>
      </div>
    </section>
  );
};
