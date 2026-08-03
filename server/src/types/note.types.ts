
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
  children?: NoteTreeNode[];
}