import dts from "vite-plugin-dts";

import config from "./vite.config";

config.build!.minify = true;
config.plugins!.push(
  dts({
    outDir: "./dist/types",
  })
);

export default config;
