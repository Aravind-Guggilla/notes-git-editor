export interface NoteNode {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: NoteNode[];
}