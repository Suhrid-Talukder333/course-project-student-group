import React from 'react'
import { Link } from 'react-router-dom'
import "./Component/c2.css";
import styled from "styled-components"

export default function Varification() {
  return (
    <div className='box'>
        <p className='title'>
            Log In As
        </p>
        <Link className='button1' to="/teacherLogin" >Teacher</Link>
        <Link className='button1' to="/studentLogin" >Student</Link>

    </div>
  )
}
