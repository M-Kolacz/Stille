import { useParams } from "@remix-run/react";

export default function BlogPost() {
  const params = useParams();

  return <h1>{params.postTitle ?? "Blog Post Title"}</h1>;
}
