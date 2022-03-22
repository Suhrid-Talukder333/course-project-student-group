import React from 'react'
import { Link } from 'react-router-dom'

export default function Tcard(props) {
  return (
    <div className='box'>
        <div className="title">{props.title}</div>
        <div className="code">{props.code}</div>
        <div className="credit">Credit-{props.credit}</div>
        <div className="btn">
        <button>Add Resource</button>
        <Link to='/Tclasstime'>
        <button>Update time</button>
        </Link>
        
        <button>Update Announce</button>
        </div>
        

    </div>
  )
}
