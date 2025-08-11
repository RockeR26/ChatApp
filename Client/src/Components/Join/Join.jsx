import React, { useState } from 'react'
import "./Join.css"
import { Link } from 'react-router'

const Join = () => {
const [name,setName]=useState("");
const [room,setRoom]=useState("");

const handleSubmit=(e)=>{
  if(!name || !room){
    e.preventDefault();
  }
}
  return (
    <div className='joinOuterContainer'>
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input type="text" placeholder='Name' className="joinInput" name="name" onChange={(e)=> setName(e.target.value)}/></div>
        <div><input type="text" placeholder='Room' className="joinInput" name="room" onChange={(e)=> setRoom(e.target.value)}/></div>
        <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className='button mt-20'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join