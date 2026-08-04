import { promises as fs } from "node:fs";

import path from "node:path";

import { NOTE_INDEX_FILE } from "../config/paths.js";

import { NoteIndexEntry, NoteTreeNode, NoteContent, SaveNoteRequest,} from "../types/note.types.js";

import { resolveNotePath } from "../utils/path.utils.js";

import { commitChanges } from "./git.service.js";

//Reads the .noteindex.json file and returns all note entries.
 
export async function readNoteIndex(): Promise<NoteIndexEntry[]> {
  const fileContent = await fs.readFile(
    NOTE_INDEX_FILE,
    "utf-8"
  );

  const notes = JSON.parse(fileContent) as NoteIndexEntry[];

  return notes;
}

// export async function readNoteIndex() {
//     // Read the JSON file as text
//     const fileContent = await fs.readFile(
//         NOTE_INDEX_FILE,
//         "utf-8"
//     );

//     // Convert JSON text into a JavaScript array
//     const notes = JSON.parse(fileContent);

//     // Return the array
//     return notes;
// }

export function buildFolderTree(notes: NoteIndexEntry[]): NoteTreeNode[] {
  const tree: NoteTreeNode[] = []

  for (const entry of notes) {
    const segments = entry.path.split('/').slice(1)

    let currentLevel = tree

    for (let index = 0; index < segments.length; index++) {
      const segment = segments[index]

      const isLastSegment = index === segments.length - 1

      if (isLastSegment) {
        const fileNode: NoteTreeNode = {
          name: segment,
          title: entry.title,
          path: entry.path,
          type: 'file',
        }

        currentLevel.push(fileNode)
      } else {
        const existingFolder = currentLevel.find(node => node.name === segment && node.type === 'folder')

        if (existingFolder) {
          currentLevel = existingFolder.children!
        } else {
          const newFolder: NoteTreeNode = {
            name: segment,
            path: segments.slice(0, index + 1).join('/'),
            type: 'folder',
            children: [],
          }

          currentLevel.push(newFolder)

          currentLevel = newFolder.children!
        }
      }
    }
  }

  return tree
}

export async function getNotesTree(): Promise<NoteTreeNode[]> {
  const notes = await readNoteIndex();

  const tree = buildFolderTree(notes);

  return tree;
}

// Reads a single note from the notes-interview repository

export async function getNoteContent(notePath: string): Promise<NoteContent> {
  const absolutePath = resolveNotePath(notePath) // Construct the absolute path to the note file

  const content = await fs.readFile(absolutePath, 'utf-8')

  return {
    path: notePath,
    content,
  }
}

// Saves a note and creates a Git commit.
 
export async function saveNote(note: SaveNoteRequest): Promise<void> {
  const absolutePath = resolveNotePath(note.path)

  await fs.writeFile(absolutePath, note.content, 'utf-8')

  await commitChanges([note.path], `Update ${note.path}`)
}
