import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"



function Register() {

  let nav = useNavigate()
    let [name,setName] = useState("")
    let [userName,setUSerName] = useState("")
    let [mail,setMail] = useState("")
    let [pass,setPass] = useState("")
    let obj = {
        name:name,
        user:userName,
        email:mail,
        password:pass
    }

    

    function clicked(e){
      console.log(obj);
      console.log(axios); 
      e.preventDefault();

      try{

        axios.post("http://localhost:3000/register",obj).then((res)=>{

              nav('/shop')
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
    

  // let navigate = useNavigate()

  const [justifyActive, setJustifyActive] = useState('tab2');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
      <div className="login-box">
  <form>
    <div className="user-box">
      <input type="email" name="" required="" onChange={(e)=>{setMail(e.target.value)}} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" onChange={(e)=>{setUSerName(e.target.value)}} />
      <label>Username</label>
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
  <p style={{color:"#bdb8b8", fontSize:"16px"}} >already have account? <a href="/login" >login</a> </p>
</div>

    </div>
  );
}


export default Register
