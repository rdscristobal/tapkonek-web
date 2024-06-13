import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/rdscristobal/tapkonek-web.git",
  plugins: [react()],
  build: {
    sourcemap: false,
    outDir: "dist",
  },
});
