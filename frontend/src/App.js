import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import Course from './Course';
import Login from './Login';
import Profile from './Profile';
import Varification from './varification';
import Tlogin from './Teachlogin';
import Teacher from './Teacher';
import Classtime from './Classtime';
import Tclasstime from './Tclasstime';


class App extends Component{

  render ()
  {
    return (
      <Router>
          <Routes>
              
          <Route path='/' element={<Login/>}>
        
          </Route>
          <Route path='/profile' element={<Profile/>}>

          </Route>
          <Route path='/varif' element={<Varification/>}>

          </Route>
          <Route path='/course' element={<Course/>}>

          </Route>
          <Route path='/Tlogin' element={<Tlogin/>}>

          </Route>
          <Route path='/Teacher' element={<Teacher/>}>

          </Route>
          <Route path='/Classtime' element={<Classtime/>}>

          </Route>
          <Route path='/Tclasstime' element={<Tclasstime/>}>

          </Route>

          </Routes>
       
       </Router>
 
      );
  }

}
export default App;