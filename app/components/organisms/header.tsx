import { Link } from "react-router";
import { Button } from "#app/components/atoms";

export const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyWebDevBlog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="outline">Subscribe</Button>
      </div>
    </header>
  );
};
