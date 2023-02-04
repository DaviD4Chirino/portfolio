import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/**
 * @param match
 * Regular expression in string or Regexp type,
 *  or a match predicate  (this: vite transform context, code: string, id: file name string) => void
 * @returns transformed code
 */
import requireTransform from "vite-plugin-require-transform";

export default defineConfig({
  plugins: [
    // passing string type Regular expression
    react(),
    // requireTransform({}),
  ],
});
// export type VitePluginRequireTransformParamsType = {
// 	//filter files that should enter the plugin
// 	fileRegex?: RegExp = /.ts$|.tsx$/ ,
// 	//prefix that would plugin into the requireSpecifier
// 	importPrefix? = '_vite_plugin_require_transform_': string,
// 	//to deal with the requireSpecifier
// 	importPathHandler?: Function
// }
