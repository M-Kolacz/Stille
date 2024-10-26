import type { MetaFunction } from "@remix-run/node";
import { Button } from "#app/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-heading text-7xl">Homepage</h1>
      <Button asChild>
        <Link to="/blog">Check blog</Link>
      </Button>
    </div>
  );
}
