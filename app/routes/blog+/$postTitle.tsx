import { type MetaFunction, useParams } from "@remix-run/react";
import { GeneralErrorBoundary } from "#app/components/error-boundary";
import { MDXProvider } from "@mdx-js/react";
import MyMarkdown from "#app/components/MyMarkdown.mdx";

export const meta: MetaFunction = ({ params }) => {
  const postTitle = params.postTitle;

  return [
    { title: `${postTitle}` },
    { name: "description", content: `Stille blog post ${postTitle}` },
  ];
};

const components = {
  em: (props: any) => <i {...props} />,
};

export default function BlogPost() {
  const params = useParams();

  return (
    <div>
      <h1>{params.postTitle ?? "Blog Post Title"}</h1>
      <MDXProvider components={components}>
        <MyMarkdown />
      </MDXProvider>
    </div>
  );
}

export const ErrorBoundary = () => <GeneralErrorBoundary />;
