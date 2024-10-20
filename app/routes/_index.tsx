import type { MetaFunction } from "@remix-run/node";
import { Button } from "#app/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-heading text-7xl">Some header text</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem soluta
        voluptatem vel fugiat error aspernatur. Dicta recusandae exercitationem
        similique magni voluptate mollitia totam deserunt harum earum,
        reiciendis nulla nobis accusantium?
      </p>
      <Button>Hello there</Button>
    </div>
  );
}
