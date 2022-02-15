import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../components/Uvaha.css'

function Uvaha() {
    const [uvaha,setUvaha] = useState([])
    const [title,setTitle] = useState("");
    const [short,setShort] = useState("");
    const [link,setLink] = useState("")
    const [ImageLink,setImageLink]= useState("");
   var bodyFormData = new FormData();
    useEffect(()=>{
        axios.get('https://bsite.net/IvanovIvan/advertisement').then((result)=>{
            console.log(result.data);
            setUvaha(result.data);
        })
    },[])

    const handleFileSelected = (e) => {
        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        bodyFormData.append('file',files);
        axios({
            method: 'POST',
            url : "http://localhost:5000/upload",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
          }
          ).then((res)=>{
            console.log();
            console.log(res.data);
            setImageLink(res.data)
          })
      } 


    const DeleteWarning = (i,id)=>{
        axios.delete(`http://localhost:5000/advertisement/delete/${id}`).then((result)=>{
            console.log(result.data);
            if(result.status == 200 )
                window.location.reload();
            else
                alert("Помилка!");
        })
    }

    const SubmitAdd = (i,title,short,link,image) =>{
        i.preventDefault()
        console.log(title);
        console.log(short);
        console.log(link);
        console.log(image);

        axios.post("http://localhost:5000/advertisement/add",{
            title : title,
            short_text : short,
            link : link,
            image:image
        }).then((result)=>{
            console.log(result.data);
            if(result.status == 200 )
            window.location.reload();
            else
               alert("Помилка!");
        })
       
    }

    const WarningChangeFile = (i) =>{

    } 
  return (
    <div>
        <div className="add_warning">
            <form onSubmit = {(i)=> SubmitAdd(i,title,short,link,ImageLink)}>
            <input className="input_uvaha elem_warn" type = "text" onChange ={(i)=>{setTitle(i.target.value)} } value={title} placeholder = "Заголовок" required />
            <input className="input_uvaha elem_warn"  type = "text" onChange ={(i)=>{setLink(i.target.value)} } value={link}  placeholder = "Посилання"/>
            <textarea  className="elem_warn"onChange={(i)=>setShort(i.target.value)} value = {short}  placeholder = "Текст"  required ></textarea>
            <input className="elem_warn" type="file" onChange = {(i)=>handleFileSelected(i)}/>
            <button className="butn_warn" type = "submit">Додати</button>
            </form>
        </div>
        {
            uvaha.map((u,index)=>(
                <div className ="one_uvaha">
                    <div className="warning_block">
                    <div className="text_warning">
                    <h3><a href = {u.link} target ="_blank">{u.title} </a></h3>
                    <p>
                        {u.short_text}
                   </p>
                 </div>
                 <div className="image_warning">
                    {u.image == null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOE1GLo_CmChhIjgJqAh-9fPcxJIQBnxQeQ&usqp=CAU"alt="" />
                     : <img src={u.image} alt={u.title} />}
                 </div>

                 </div>
                    <button onClick={(i)=>DeleteWarning(i,u.id)}>Видалити</button>
                </div>
            ))
               
           

        }
    </div>
  )
}

export default Uvaha