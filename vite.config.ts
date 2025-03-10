import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    codecovVitePlugin({
      enableBundleAnalysis: true,
      bundleName: "michalkolacz.com",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
});
