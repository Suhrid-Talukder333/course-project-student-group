import React from 'react'
import Tcard from './T-card';
import './Component/course.css'
import './Component/card.css'
import course from './courses.json';
import TC from './Teachlogin';

export default function Teacher() {
   console.log(TC);
    
  return (
    <div className='all1'>
      <h1>Department of CSTE</h1>
      <h3>My Courses</h3>
      <div className="cardb">
       {
        
         
         course.map((i)=> 
            
         <Tcard key={i.index} title={i.title} code={i.code} credit={i.credit} />
        )
            
         
           
       }

        </div>
    </div>
  )
}
