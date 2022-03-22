import React, { Component } from 'react'

export default class Tclasstime extends Component {
  render() {
    return (
      <div className='box'>
      <h1>Next Class</h1>
      <form action="">
           <p>
               <label htmlFor="">
                   Date
               </label> <br />
               <input type="Date" id='user'/>
           </p>
           <p>
               <label htmlFor="">
                   Time
               </label> <br />
               <input type="Time" id='pass' />
           </p>
           <p>
               <label htmlFor="">
                   Topic
               </label> <br />
               <input type="Text" id='pass'  />
           </p>
           <p>
            <input className='Button' type="Submit" />
              
           </p>
       </form>
      
      </div>
    )
  }
}
