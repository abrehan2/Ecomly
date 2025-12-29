// Imports:
import express from "express";

// Create Express app:
const app = express();
const PORT = process.env.PORT || 3000;

// Test route:
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy." });
});

// Server setup:
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/health`);
});
