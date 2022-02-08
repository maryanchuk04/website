import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import '../Shared/Page.css'
import { Link } from 'react-router-dom';
//https://bsite.net/IvanovIvan/${name}/${id}
function Page() {
  const [pageinfo, setPageinfo] = useState({});
  const [link,setLink] = useState([]);
  const[image,setImage] = useState([])
  const [all,setAll] = useState({})
  const {id,name} = useParams()
  const [value,setValue] = useState(false);

  useEffect(()=>{
      axios.get(`http://localhost:5000/${name}/${id}`).then((result)=>{
          console.log(result.data);
          console.log(id, name)
          console.log(result.data.page);
          setPageinfo(result.data.page)
          setLink(result.data.page.titleWithLinks);
          setImage(result.data.page.imgWithTexts);
          setAll(result.data)
          console.log(result.data)
      })
  },[]);




  return (
      pageinfo.imgWithTexts==null ? (
        <div className = "page">
            
            <div className="title_page">
            <h1>{all.name}</h1>
        </div>
        <div className="container_all">
            <div className="pages_blocks">
                <img src={`data:image/gif;base64,${pageinfo.image}`} alt="" />
                        <div className="other_block_info">
                            <ul>
                            {link.map((l, index)=>(
                                <li> 
                                    <a href ={l.link} target ='_blank'>{l.title}</a>
                                </li>
                                ))
                            }
                            </ul> 
                        </div>  
            </div>   
        </div>
        </div>
      ) : (
          <div className = 'page'>
            <div className="title_page">
                <h1>{all.name}</h1>
            </div>
            <div className="container_all">
                <div className="pages_blocks">
                    <img src={`data:image/gif;base64,${pageinfo.image}`} alt="" />
                    <div className="images_with_text_info">
                        {image.map((i,index)=>(
                            <div>
                                <img src={`data:image/gif;base64,${i.image}`}/>
                                <div className="images_with_text_info">
                                    <p>{i.text}</p>
                                </div>
                                
                            </div>
                            
                            )
                        )}   
                    </div>
                </div>
            </div>
          </div>

      )
    
  );

}

export default Page;
