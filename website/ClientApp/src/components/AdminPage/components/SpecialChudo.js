import React from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor.js";
import "react-quill/dist/quill.core.css";
import SpecialEditor from "./SpecialEditor.js";

function Chudo() {
  return (
    <div className="App">
      <SpecialEditor />
    </div>
  );
}
export default Chudo