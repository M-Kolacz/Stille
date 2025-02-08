import {
  LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
  useParams,
} from "react-router";
import { GeneralErrorBoundary } from "#app/components/error-boundary";
import { cwd } from "node:process";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { bundleMDX, getMDXComponent } from "mdx-bundler";

export const meta: MetaFunction = ({ params }) => {
  const postTitle = params.postTitle;

  return [
    { title: `${postTitle}` },
    { name: "description", content: `Stille blog post ${postTitle}` },
  ];
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const blogPostPath = join(cwd(), "content", "blog", "my-first-article.mdx");
  const blogPostContent = await readFile(blogPostPath, "utf-8");
  const page = await bundleMDX({
    source: blogPostContent,
  });

  return { page: page };
};

export default function BlogPost() {
  const params = useParams();
  const data = useLoaderData<typeof loader>();

  const Component = getMDXComponent(data.page.code);

  return (
    <div className="[&>*]:text-gray-500">
      <h1>{params.postTitle ?? "Blog Post Title"}</h1>
      <Component />
    </div>
  );
}

export const ErrorBoundary = () => <GeneralErrorBoundary />;
