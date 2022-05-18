import React, { useEffect, useState } from "react";
import Tcard from "./T-card";
import "./Component/course.css";
import "./Component/card.css";
import course from "./courses.json";
import TC from "./TeacherProfile";

const Teacher = () => {
  console.log(TC);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/course/getAll")
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      });
  }, []);
  return (
    <div className="all1">
      <h1>Department of CSTE</h1>
      <h3>My Courses</h3>
      <div className="cardb">
        {courses.map((i) => (
          <Tcard
            key={i.id}
            title={i.name}
            code={i.code}
            credit={i.credit}
            teacher={i.teacher}
          />
        ))}
      </div>
    </div>
  );
};

export default Teacher;
