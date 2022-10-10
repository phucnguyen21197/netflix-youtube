import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';


function Nav() {
  const [show,handleShow] = useState(false);
  const history = useHistory();

const transitionNavBar = () => {
  if (window.scrollY >100) {
    handleShow(true);
  } else {
    handleShow(false);
  }
}

useEffect(() => {
  window.addEventListener("scroll",transitionNavBar);
  return () => window.removeEventListener("scroll",transitionNavBar);
},[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={()=> history.push("/")}
          className='nav__logo' 
          img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        /> 

        <img 
          onClick={()=> history.push("/profile")}
          className='nav__avatar'
          src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
          alt=""
        />
      </div>
    </div>
  )
}

export default Nav;