import React from 'react'
import { Link } from 'react-router-dom'
import './Component/card.css'

export default function Card(props) {
  return (
    <div className='box'>
        <div className="title">{props.title}</div>
        <div className="code">{props.code}</div>
        <div className="credit">Credit-{props.credit}</div>
        <div className="btn">
        <button>Resourse</button>
        <Link to="/Classtime"><button>Class time</button></Link>
        <Link to="/Sanunce"><button>Announce</button> </Link>
        
        </div>
        

    </div>
  )
}
