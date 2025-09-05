import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace 'your-repo-name' with your actual GitHub repo name if deploying to GitHub Pages.
// For Vercel or Netlify, just use base: "/"
const BASE_URL = "/ClimateMentor/"; 

export default defineConfig(({ mode }) => ({
  base: BASE_URL, // <-- Add this line
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

