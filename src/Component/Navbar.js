import React from 'react'
import './Navbar.css'




const Navbar = () => {
  return (
    <div className='navbars'>
   
      <div className="logo"><a href="#" ><img  src='./images/logo.png' /></a></div> 
    <ul className= "links">

        <li className="nav-item"><a href="Naissance">Naissance</a></li>
        <li className="nav-item"><a href="Fille">Fille</a></li>
        <li className="nav-item"><a href="Garçon">Garçon</a></li>
        <li className="nav-item"><a href="Contact">Contact</a></li>

    </ul>
    <div className="buttons">
        <button className="button1" >se connecter </button>
        
        </div>
    
    </div>
  )
}

export default Navbar