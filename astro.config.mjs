import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/mika-beauty-salon/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },

  integrations: [react()],
});
