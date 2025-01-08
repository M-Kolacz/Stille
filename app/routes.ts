import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/_index.tsx"),
  route("blog", "./routes/blog+/index.tsx"),
  route("blog/:postTitle", "./routes/blog+/$postTitle.tsx"),
] satisfies RouteConfig;
