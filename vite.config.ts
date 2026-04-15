import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repositoryName;

export default defineConfig(() => ({
  base: isGitHubPagesBuild ? `/${repositoryName}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react") || id.includes("scheduler")) {
            return "react-vendor";
          }

          if (id.includes("react-router") || id.includes("@radix-ui") || id.includes("lucide-react")) {
            return "ui-vendor";
          }

          if (id.includes("html2canvas")) {
            return "certificate-tools";
          }
        },
      },
    },
  },
}));
