import { type MetaFunction } from "react-router";
import { Button } from "#app/components/ui/button";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille" },
    { name: "description", content: "Welcome to Stille!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="max-w-3xl mx-auto py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-300 mb-6">
          Welcome to Minimal Blog
        </h1>

        <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          A clean, thoughtful space for ideas that matter. Focused on
          simplicity, clarity, and the beauty of well-crafted words.
        </p>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-lg shadow-soft mb-12 transition-colors duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
            About This Blog
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            This minimalist blog explores ideas around intentional living,
            thoughtful design, and the pursuit of clarity in a complex world.
            Here, we celebrate the power of simplicity and the beauty that
            emerges when we focus on what truly matters.
          </p>
          <Link to="/articles">
            <Button size="lg" className="font-medium">
              Explore Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-100 dark:border-blue-900 transition-colors duration-300">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-400 mb-2">
              Minimalism
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Exploring the power of less and the freedom it brings to our
              lives.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-100 dark:border-blue-900 transition-colors duration-300">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-400 mb-2">
              Mindfulness
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Practicing presence and awareness in our daily experiences.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-100 dark:border-blue-900 transition-colors duration-300">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-400 mb-2">
              Design
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Appreciating the beauty of thoughtful, purposeful creation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
