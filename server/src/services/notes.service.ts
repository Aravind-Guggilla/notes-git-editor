import { promises as fs } from "node:fs";

import { NOTE_INDEX_FILE } from "../config/paths.js";

import { NoteIndexEntry } from "../types/note.types.js";

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