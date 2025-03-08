import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"] as const),
  GITHUB_TOKEN: z.string(),
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

export const init = () => {
  const parsedEnv = schema.safeParse(process.env);

  if (!parsedEnv.success) {
    console.error(
      "🛑 Invalid environemnt variables:",
      parsedEnv.error.flatten().fieldErrors
    );

    throw new Error("Invalid environemnt variables");
  }
};

export const getEnv = () => ({
  MODE: process.env.NODE_ENV,
});

type ENV = ReturnType<typeof getEnv>;

declare global {
  // eslint-disable-next-line no-var
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
