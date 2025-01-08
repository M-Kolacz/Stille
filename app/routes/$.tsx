import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { LoaderFunction } from "react-router";

export const loader: LoaderFunction = () => {
  throw new Response("Page not found", { status: 404 });
};

export default function NotFound() {
  return <GeneralErrorBoundary />;
}

export const ErrorBoundary = () => <GeneralErrorBoundary />;
