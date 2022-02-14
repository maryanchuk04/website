import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css'; 
// #1 import quill-image-uploader
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.core.css";

// #2 register module
Quill.register("modules/imageUploader", ImageUploader);
var htmltext = ""

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    

  }
  
  modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"],
            [{ font: [] }],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["image"],
            ["clean"],
            ["link"],
           
    ],
    // # 4 Add module and upload function
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=4b76823349508cfe6987b62ea7b72eb8",
            {
              method: "POST",
              body: formData
            }
          )
            .then(response => response.json())
            .then(result => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch(error => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    }
  };
  
  textfunc(i){
      htmltext = i
      console.log(htmltext)
  }
  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={this.state.text}
        onChange={(i)=>this.textfunc(i)}
      >
        <div className="my-editing-area" />
      </ReactQuill>

    );
  }
}

export default Editor;
