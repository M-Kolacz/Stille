import { type MetaFunction, useParams } from "@remix-run/react";

export const meta: MetaFunction = ({params}) => {
  const postTitle=params.postTitle

  return [
    { title: `${postTitle}` },
    { name: "description", content: `Stille blog post ${postTitle}` },
  ];
}

export default function BlogPost() {
  const params = useParams();

  return <h1>{params.postTitle ?? "Blog Post Title"}</h1>;
}
