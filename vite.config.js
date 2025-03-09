import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactRouterPlugin from "vite-plugin-next-react-router";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactRouterPlugin()],
  baseUrl: "src",
});
