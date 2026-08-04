import { Router } from "express";
import {
  getNotes,
  getNotesTreeController,
  getNoteController,
  updateNoteController,
  createNewNoteController,
  getLinkedNotesController,
} from '../controllers/notes.controller.js'

const router = Router();

router.get("/notes", getNotes);
router.get("/tree", getNotesTreeController);
router.get("/notes/content", getNoteController);
router.put("/content", updateNoteController)
router.post("/create-new-note", createNewNoteController)
router.get('/notes/links', getLinkedNotesController)


export default router;