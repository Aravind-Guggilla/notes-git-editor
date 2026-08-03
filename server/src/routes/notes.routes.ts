import { Router } from "express";
import { getNotes, getNotesTreeController} from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", getNotes);
router.get("/notes/tree", getNotesTreeController);

export default router;