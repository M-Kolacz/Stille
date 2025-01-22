import { type MetaFunction } from "react-router";
import { Link } from "react-router";
import { Button } from "#app/components/ui/button";
import { RecentPosts } from "#app/components/organisms";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille" },
    { name: "description", content: "Welcome to Stille!" },
  ];
};

export default function Index() {
  console.log(ENV.MODE);

  return (
    <>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Web Dev Blog</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Hi, I'm [Your Name]. I'm a software engineer passionate about web
          development. Here, I share my experiences, tips, and insights on
          modern web technologies.
        </p>
        <Button>Read More About Me</Button>
      </section>
      <RecentPosts />
    </>
  );
}
