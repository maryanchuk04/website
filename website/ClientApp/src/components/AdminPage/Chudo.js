import React from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor.js";
import "react-quill/dist/quill.core.css";


function Chudo() {
  return (
    <div className="App">
      <h1>Редактор</h1>
      
      <Editor />
    </div>
  );
}
export default Chudo