import React from 'react';
import { Link } from 'react-router-dom';
import "./Component/c.css";

function Login(){
  return (
    <div className="All">

<div className='body'>
<div className='text'>
    Computer Science And <br /> Telecommunication <br /> Engineering.
</div>

<div className='log'>
    <Link className='button' to="/varif" >Sign in</Link>
</div>
</div>

</div>
  )
}

export default Login