import  { type LinksFunction, type MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import faviconAppleTouchIcon from "./assets/apple-touch-icon.png?url";
import faviconPng from "./assets/favicon-48x48.png?url";
import faviconIco from "./assets/favicon.ico?url";
import faviconSvg from "./assets/favicon.svg?url";
import webManifest from "./assets/site.webmanifest?url";

import fontStylesheet from "./styles/font.css?url";
import tailwindStylesheet from "./styles/tailwind.css?url";

import { getEnv } from "./utils/env.server";

export const meta: MetaFunction = () => [
  { name: "apple-mobile-web-app-title", content: "Stille" },
];

export const links: LinksFunction = () => [
  // --- Icons
  {
    rel: "icon",
    type: "image/png",
    href: faviconPng,
    sizes: "48x48",
  },
  { rel: "icon", type: "image/svg+xml", href: faviconSvg },
  { rel: "shortcut icon", href: faviconIco },
  { rel: "apple-touch-icon", sizes: "180x180", href: faviconAppleTouchIcon },
  { rel: "manifest", href: webManifest },
  // ---
  { rel: "stylesheet", href: fontStylesheet },
  { rel: "stylesheet", href: tailwindStylesheet },
];

export const loader = () => {
  return {
    ENV: getEnv(),
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-[300dvh]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV=${JSON.stringify(ENV)}`,
          }}
        />
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
