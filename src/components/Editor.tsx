import React from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function Editor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MarkdownEditor value={value} onChange={setValue} />
    </div>
  );
}
