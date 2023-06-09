import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './AdminLogin.css';


function AdminLogin() {

    const nav=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    let obj={
        email:email,
        pass:password
        
    }

    function clicked(e){
      console.log(obj);
      console.log(axios); 
      e.preventDefault();

      try{

        axios.post("http://localhost:3000/register",obj).then((res)=>{

              nav('/Admin')
              console.log("true");
          })
          .catch(e=>{
              // alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }
 
  return (
    <div>
      <div className="login-box">
  <form>
  <div className="user-box">
      <input type="email" name="" required="" onChange={(e)=>{setMail(e.target.value)}} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={(e)=>{setPass(e.target.value)}} />
      <label>Password</label>
    </div>
    <center>
    <a className="send" onClick={clicked}>
        SEND
        <span />
      </a>
    </center>
  </form>
</div>
    </div>
  )
}

export default AdminLogin
