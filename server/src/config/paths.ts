import path from "node:path";

//Absolute path to the notes repository.

export const NOTES_REPOSITORY_PATH = path.resolve(
  process.cwd(),
  "..",
  "..",
  "notes-interview"
);

// Absolute path to the notes folder.
 
export const NOTES_DIRECTORY = path.join(
  NOTES_REPOSITORY_PATH,
  "notes"
);

// Absolute path to .noteindex.json
export const NOTE_INDEX_FILE = path.join(
  NOTES_REPOSITORY_PATH,
  ".noteindex.json"
);