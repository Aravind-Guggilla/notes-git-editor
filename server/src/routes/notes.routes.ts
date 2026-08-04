import { Router } from "express";
import { getNotes, getNotesTreeController, getNoteController} from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", getNotes);
router.get("/tree", getNotesTreeController);
router.get("/notes/content", getNoteController);

export default router;