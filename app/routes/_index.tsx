import  { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "#app/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  console.log(ENV.MODE);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-heading text-7xl">Homepage</h1>
      <Button asChild>
        <Link to="/blog">Check blog</Link>
      </Button>
    </div>
  );
}
