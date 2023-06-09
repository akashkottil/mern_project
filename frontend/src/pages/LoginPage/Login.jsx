import "./Login.css"
import React, { useState } from 'react';





const Login = () => {const [justifyActive, setJustifyActive] = useState('tab1');;

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
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <center>
      <a href="#" className="send">
        SEND
        <span />
      </a>
    </center>
  </form>
  <p style={{color:"#bdb8b8", fontSize:"16px"}} >not a user? <a href="/register" >signup</a> </p>
</div>

    </div>
  )
}

export default Login
