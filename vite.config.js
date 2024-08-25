import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // lub '0.0.0.0' czy '192.168.0.100'
    port: 3001, // port, na którym chcesz uruchomić serwer
  },
});
