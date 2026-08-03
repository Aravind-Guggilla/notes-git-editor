import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {
  response.status(200).json({
    success: true,
    message: "Notes API Server is running 🚀"
  });
});


export default app;