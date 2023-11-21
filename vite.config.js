import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Router } from "react-router-dom";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Massive-Project/",
    plugins: [react(),],
});
