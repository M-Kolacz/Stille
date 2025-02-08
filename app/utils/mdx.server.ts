// import { MdxPage } from "#app/types/types.ts";
// import { type Timings } from "./timing.server.ts";

// type CachifiedOptions = {
//   forceFresh?: boolean | string;
//   request?: Request;
//   ttl?: number;
//   timings?: Timings;
// };

// export const getMdxPage = async (
//   {
//     contentDir,
//     slug,
//   }: {
//     contentDir: string;
//     slug: string;
//   },
//   options: CachifiedOptions
// ): Promise<MdxPage | null> => {
//   const { forceFresh, ttl = defaultTTL, request, timings } = options;
//   const key = `mdx-page:${contentDir}:${slug}:compiled`;
//   const pagesFiles = await downloadMdxFiles(contentDir, slug, options);
// };

// const downloadMdxFiles = async (
//   contentDir: string,
//   slug: string,
//   options: CachifiedOptions
// ) => {};
