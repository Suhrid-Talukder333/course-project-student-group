import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import Course from "./Course";
import Login from "./Login";
import StudentLogin from "./StudentLogin";
import Varification from "./varification";
import TeacherLogin from "./Component/TeacherLogin";
import Teacher from "./Teacher";
import Classtime from "./Classtime";
import Tclasstime from "./Tclasstime";
import AddStudent from "./Component/AddStudent";
import AddCourses from "./Component/AddCourses";
import StudentProfile from "./Component/StudentProfile";
import TeacherProfile from "./TeacherProfile";
import AddTeacher from "./Component/AddTeacher";
import CourseDetails from "./Component/CourseDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/studentLogin" element={<StudentLogin />}></Route>
          <Route path="/varif" element={<Varification />}></Route>
          {/* <Route path="/course" element={<Course />}></Route> */}
          <Route path="/teacherLogin" element={<TeacherLogin />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/teacherProfile/:id" element={<TeacherProfile />}></Route>
          <Route path="/Classtime" element={<Classtime />}></Route>
          <Route path="/addStudent" element={<AddStudent />}></Route>
          <Route path="/Tclasstime" element={<Tclasstime />}></Route>
          <Route path="/addCourses" element={<AddCourses />}></Route>
          <Route path="/addTeacher" element={<AddTeacher />}></Route>
          <Route path="/studentProfile/:roll" element={<StudentProfile />}></Route>
          <Route path="/course/:id" element={<CourseDetails />}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
