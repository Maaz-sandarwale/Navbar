import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaLifeRing, FaToggleOff, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [flag,setFlag]=useState(true)
  
  
  return(
    <>
    <div className='nav'>
    <h3>Coding Addict</h3>
    <div className='togg'><button onClick={()=>{setFlag(!flag)}} ><FaBars/></button></div>
  
    <div className={flag?'links':'toggle'} >
      {links.map((item)=>{
        return  <a href={item.url} key={item.id}>{item.text} </a>
      })}
    </div>
    <div className={flag?'icons':'toggle'} >
      {social.map((item)=>{
       return <a href={item.url}>{item.icon }</a>
      })}
      
    </div>

    
   
    
  </div>
    </>
  )
  
    
}

export default Navbar
