// Imports:
import express from "express";
import path from "path";
import { ENV } from "./config/env.js";

// Create Express app:
const app = express();
const __dirname = path.resolve();

// Test route:
app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy." });
});

// Deployment:
if (ENV["NODE_ENV"] === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  // Serve admin panel for all other routes:
  app.get("/{*any}", (_req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}

// Server setup:
app.listen(ENV["PORT"], () => {
  console.log(
    `Server is running on http://localhost:${ENV["PORT"]}/api/health`
  );
});
