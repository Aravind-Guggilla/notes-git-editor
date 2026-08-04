import { Request, Response } from "express";
import { readNoteIndex, getNotesTree, getNoteContent } from "../services/notes.service.js";

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
