import React from 'react'
import { Link } from 'react-router-dom'
import "./Component/c2.css";

export default function Varification() {
  return (
    <div className='box'>
        <p className='title'>
            Log In As
        </p>
        <Link className='button1' to="/Tlogin" >Teacher</Link>
        <Link className='button1' to="/profile" >Student</Link>

    </div>
  )
}
