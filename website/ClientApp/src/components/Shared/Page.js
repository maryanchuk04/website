import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import '../Shared/Page.css'
import { Link } from 'react-router-dom';
import "react-quill/dist/quill.core.css";

function Page() {
  const [pageinfo, setPageinfo] = useState({});
  const [link,setLink] = useState([]);
  const[image,setImage] = useState([])
  const [all,setAll] = useState({})
  const {id,name} = useParams()
  const [value,setValue] = useState(false);

  useEffect(()=>{
      axios.get(`https://bsite.net/IvanovIvan/${name}/${id}`).then((result)=>{
          console.log(result.data);
          console.log(id, name)
          console.log(result.data.page);
          setPageinfo(result.data.page)
          
           setAll(result.data)
          console.log(result.data)
      })
  },[]);


  return (
        <div className = "page">
            <h1 style={{textAlign:"center" ,margin : "20px"}}>{all?.name}</h1>
            <div className="container_all">
            <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: pageinfo }} ></div>
            </div>
            
        </div> 
  )
}

export default Page;
