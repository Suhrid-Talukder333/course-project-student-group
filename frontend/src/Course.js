import React from 'react'
import Card from './card';
import './Component/course.css'
import Data from './courses.json'






export default function Course() {

  return (
    <div className='all1'>
      <h1>Department of CSTE</h1>
      <h3>Session 2018-19</h3>
      <div className="cardb">
       {
         
         Data.map((i)=> 
            
         <Card  title={i.title} code={i.code} credit={i.credit} />
        )
            
         
           
       }
      

        </div>
    </div>
  )
}
