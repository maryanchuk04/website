import React from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor.js";
import "react-quill/dist/quill.core.css";


function Chudo({html,seterForHTML}) {
  
  return (
    <div className="App">
      <Editor html={html} seterForHTML = {seterForHTML} />
    </div>
  );
}
export default Chudo