import { Request, Response } from "express";
import { readNoteIndex, getNotesTree, getNoteContent, saveNote, createNote } from "../services/notes.service.js";
import type { SaveNoteRequest, CreateNoteRequest } from "../types/note.types.js";
import {findLinkedNotes} from '../services/link.service.js'

export async function getNotes(request: Request, response: Response): Promise<void> {
  try {
    const notes = await readNoteIndex();

    response.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.error("Failed to read note index:", error);

    response.status(500).json({
      success: false,
      message: "Failed to read note index.",
    });
  }
}

export async function getNotesTreeController(request: Request, response: Response): Promise<void> {
  try {
    const notesTree = await getNotesTree();

    response.status(200).json({
      success: true,
      count: notesTree.length,
      data: notesTree,
    });
  } catch (error) {
    console.error("Failed to build notes tree:", error);

    response.status(500).json({
      success: false,
      message: "Failed to build notes tree.",
    });
  }
}

export async function getNoteController(request: Request, response: Response): Promise<void> {
  try {
    const notePath = request.query.path as string

    const note = await getNoteContent(notePath)

    response.status(200).json({
      success: true,
      data: note,
    })
  } catch (error) {
    console.error(error)

    response.status(500).json({
      success: false,
      message: 'Failed to read note.',
    })
  }
}

export async function updateNoteController(request: Request, response: Response): Promise<void> {
  try {
    const note = request.body as SaveNoteRequest

    await saveNote(note)

    response.status(200).json({
      success: true,
      message: 'Note saved successfully.',
    })
  } catch (error) {
    console.error(error)

    response.status(500).json({
      success: false,
      message: 'Failed to save note.',
    })
  }
}

export async function createNewNoteController(request: Request, response: Response,): Promise<void> {
  try {
    const note = request.body as CreateNoteRequest

    await createNote(note)

    response.status(201).json({success: true, message: 'Note created successfully.'})
  } catch (error) {
    console.error(error)

    response.status(500).json({success: false, message: 'Failed to create note.'})
  }
}



export async function getLinkedNotesController(request: Request, response: Response ): Promise<void> {
  try {
    const path = request.query.path as string

    const references = await findLinkedNotes(path)

    response.status(200).json({
      success: true,
      hasLinks: references.length > 0,
      count: references.length,
      references,
    })
  } catch (error) {
    console.error(error)

    response.status(500).json({ success: false, message: 'Failed to check links.'})
  }
}
