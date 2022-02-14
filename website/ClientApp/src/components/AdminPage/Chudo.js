import React from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor.js";
import "react-quill/dist/quill.core.css";


function Chudo({seterForHTML}) {
  
  return (
    <div className="App">
      <Editor seterForHTML = {seterForHTML} />
    </div>
  );
}
export default Chudo