import "./Editor.css";

type EditorProps = {
  content: string;
};

function Editor({ content }: EditorProps) {
  return (
    <div className="editor">
      <textarea
        className="editor-textarea"
        value={content}
        readOnly
      />
    </div>
  );
}

export default Editor;