import express from "express";
import cors from "cors";

import notesRouter from "./routes/notes.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", notesRouter);

app.get("/", (request, response) => {
  response.status(200).json({
    success: true,
    message: "Notes API Server is running."
  });
});


export default app;