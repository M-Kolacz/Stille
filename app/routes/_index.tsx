import { Link, type MetaFunction } from "react-router";
import { Github, Linkedin, X } from "lucide-react";
import { Button } from "#app/components/ui/button.tsx";

import meSrc from "#app/assets/me.avif?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Stille" },
    { name: "description", content: "Welcome to Stille!" },
  ];
};

export default function Index() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={meSrc}
              alt="Profile"
              width={128}
              height={128}
              className="object-center object-cover w-32 h-32"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Michal Kolacz
            </h1>
            <h2 className="text-xl md:text-2xl text-[#0047AB] font-medium mb-6">
              Software Engineer
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/M-Kolacz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0047AB] transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/m-kolacz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0047AB] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/M_Kolacz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0047AB] transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            I&apos;m a passionate software engineer with over 5 years of
            experience building web applications. I specialize in both frontend
            and backend technologies, with a focus on creating performant,
            accessible, and user-friendly experiences.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            My expertise includes React, Next.js, Node.js, and TypeScript.
            I&apos;m passionate about clean code, thoughtful architecture, and
            creating solutions that solve real problems.
          </p>

          <p className="text-lg text-gray-700">
            Currently, I&apos;m working on improving web performance and
            accessibility standards while exploring new technologies that can
            enhance the developer and user experience.
          </p>
        </div>
        <Link to="/blog">
          <Button className="mt-8">Check blog</Button>
        </Link>
      </div>
    </section>
  );
}
