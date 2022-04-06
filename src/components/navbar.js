import React from 'react'
import logo from '../images/Troll Face.png'
function navbar() {
  return (
   <nav className='nav-bar'>
       <img src={logo} className="logo-img"/>
        <h2 className='logo-txt'>Meme Generator </h2>
        <h2 className='logo-txt2'>React course project-2 </h2>
    </nav>
  )
}

export default navbar