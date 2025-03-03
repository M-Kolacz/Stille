import { Link } from "react-router";
import { ThemeToggle } from "#app/components/theme-toggle.tsx";

export const Header = () => {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-soft transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-800 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Minimal Blog
        </Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
