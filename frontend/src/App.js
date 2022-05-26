import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import Login from "./Component/Login";
import AddStudent from "./Component/AddStudent";
import AddCourses from "./Component/AddCourses";
import StudentProfile from "./Component/StudentProfile";
import TeacherProfile from "./Component/TeacherProfile";
import AddTeacher from "./Component/AddTeacher";
import CourseDetails from "./Component/CourseDetail";
import Home from "./Component/Home";
import SidebarLayout from "./Component/SideBarLayout";
import Courses from "./Component/Courses";
import User from "./Component/Users";
import ThemeProvider from "./theme";
import ProfileInfo from "./Component/ProfileInfo";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<SidebarLayout />}>
              <Route
                path="/teacherProfile"
                element={<TeacherProfile />}
              ></Route>
              <Route
                path="/studentProfile"
                element={<StudentProfile />}
              ></Route>
              <Route path="/course/:id" element={<CourseDetails />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/user/:type/:id" element={<ProfileInfo />}></Route>
              <Route path="/profile" element={<ProfileInfo />}></Route>
            </Route>
            <Route path="/addStudent" element={<AddStudent />}></Route>
            <Route path="/addCourses" element={<AddCourses />}></Route>
            <Route path="/addTeacher" element={<AddTeacher />}></Route>
          </Routes>
        </Router>
        <NotificationContainer />
      </ThemeProvider>
    );
  }
}
export default App;
