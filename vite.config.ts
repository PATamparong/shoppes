import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //automatic imports
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
});
