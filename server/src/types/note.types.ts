
// Represents one entry from .noteindex.json

export interface NoteIndexEntry {
  path: string;
  title: string;
}


// Represents one node in the notes tree
 
export interface NoteTreeNode {
  name: string;
  path: string;
  type: "file" | "folder";
  title?: string;
  children?: NoteTreeNode[];
}

//Represents the contents of a note

export interface NoteContent {
  path: string;
  content: string;
}

// Request payload for saving a note.

export interface SaveNoteRequest {
  path: string;
  content: string;
}


// Request payload for creating a note.
 
export interface CreateNoteRequest {
  path: string;
  title: string;
  content: string;
}