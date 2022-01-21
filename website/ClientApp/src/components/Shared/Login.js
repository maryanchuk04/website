import React, { useState,useEffect, useDebugValue } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './Login.css'
import AdminPage from '../AdminPage/AdminPage.js';
function Login() {


   let truelogin = "admin"
   let truepassword = "admin"
   const [login,setlogin] = useState("")
   const [pass,setpass] = useState("")
   const [res, setres] = useState(localStorage.getItem("AdminValue") == 'true' ? true : false)
   useEffect (()=>{
        console.log(typeof res);
   },[res] )
   const handleLogin = (e) =>{
        e.preventDefault();
        if(truelogin ===  login.trim() && truepassword === pass.trim()){
            console.log("DONE");
            localStorage.setItem("AdminValue" ,true);    
            setres(true) 
        }
        else{
            console.log("ERROR");
            alert("Неправильний логін або пароль")
            
            setlogin("")
            setpass("")
            localStorage.setItem("AdminValue" ,false);    
            setres(false) 
        }
   }


  return( 
   res ?
      (
          <AdminPage/>
      ) : (
          <React.Fragment>
        <Header/>
        <div className="login">
        
        <div class='bold-line'></div>
              <div class='container'>
              <div class='window'>
                  <div class='overlay'></div>
                  <div class='content'>
                  <div class='welcome'>Увійдіть в Аккаунт Адміністратора</div>
                  <form onSubmit={(i)=>handleLogin(i)}>
                  <div class='input-fields'>
                      <input type='text' placeholder='Логін' class='input-line full-width' onChange={(i)=>setlogin(i.target.value)} value={login} required></input>
                      <input type='password' placeholder='Пароль' class='input-line full-width' onChange={(j)=>setpass(j.target.value)} value={pass} required></input>
                  </div>
                  <div><button type= "submit"  class='ghost-round full-width'>Увійти</button></div>
                  </form>
                  </div>
                  
              </div>
              </div>
        </div>
        </React.Fragment>
      )
  );
}

export default Login;
