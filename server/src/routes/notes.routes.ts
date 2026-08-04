import { Router } from "express";
import { getNotes, getNotesTreeController, getNoteController, updateNoteController} from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", getNotes);
router.get("/tree", getNotesTreeController);
router.get("/notes/content", getNoteController);
router.put("/content", updateNoteController)

export default router;