import { Configuration } from "@rspack/cli";
import path from "node:path";

const config: Configuration = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
  },
};
export default config;
