import { Router } from "express";
import { getNotes } from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", getNotes);

export default router;