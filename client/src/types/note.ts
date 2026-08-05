export interface NoteTreeNode {
    name: string;
    path: string;
    type: "folder" | "file";
    title?: string;
    children?: NoteTreeNode[];
}