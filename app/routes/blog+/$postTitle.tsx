import { Link, useParams } from "react-router";
import { getArticleBySlug } from "#app/utils/data.ts";
import { Button } from "#app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type MetaFunction } from "react-router";
import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";

export const meta: MetaFunction = ({ params }) => {
  const postTitle = params.postTitle;

  return [
    { title: `Stille | ${postTitle}` },
    { name: "description", content: `Stille blog post ${postTitle}` },
  ];
};

// Convert markdown-like content to HTML (simple version)
const formatContent = (content: string) => {
  // Replace headers
  const formatted = content
    .replace(
      /^# (.*$)/gm,
      '<h1 class="text-3xl font-bold text-blue-900 dark:text-blue-300 my-4">$1</h1>'
    )
    .replace(
      /^## (.*$)/gm,
      '<h2 class="text-2xl font-semibold text-blue-800 dark:text-blue-400 my-3">$1</h2>'
    )
    .replace(
      /^### (.*$)/gm,
      '<h3 class="text-xl font-semibold text-blue-800 dark:text-blue-400 my-2">$1</h3>'
    )

    // Replace lists
    .replace(/^\d\. (.*$)/gm, '<li class="ml-6 list-decimal">$1</li>')
    .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')

    // Replace paragraphs
    .replace(/^(?!<h|<li|<ul|<ol)(.*$)/gm, (match) => {
      if (match.trim() === "") return "<br />";
      return (
        '<p class="my-4 text-slate-700 dark:text-slate-300 leading-relaxed">' +
        match +
        "</p>"
      );
    })

    // Wrap adjacent list items in ul/ol
    .replace(
      /(<li class="ml-6 list-disc">.*<\/li>\n)+/g,
      (match) => '<ul class="my-4">' + match + "</ul>"
    )
    .replace(
      /(<li class="ml-6 list-decimal">.*<\/li>\n)+/g,
      (match) => '<ol class="my-4">' + match + "</ol>"
    )

    // Replace bold and italic
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");

  return formatted;
};

export default function BlogPost() {
  const params = useParams();
  const article = getArticleBySlug(params.postTitle!);

  if (!article) return null;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link to="/blog">
        <Button
          variant="ghost"
          className="mb-6 pl-0 flex items-center gap-1 text-blue-700 dark:text-blue-400"
        >
          <ArrowLeft size={16} />
          Back to Blog Posts
        </Button>
      </Link>

      <article className="bg-white dark:bg-slate-900 rounded-lg shadow-soft p-8 md:p-12 transition-colors duration-300">
        <header className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-3">
            {article.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div
          className="prose max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
        />
      </article>
    </div>
  );
}

export const ErrorBoundary = () => <GeneralErrorBoundary />;
