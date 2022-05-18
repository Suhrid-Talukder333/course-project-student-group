import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import Schedule from "./Component/Schedule";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function TeacherProfile() {
  const {id} = useParams();
  const paperStyle = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems:"center", padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([]);
  const [email, setEmail] = useState("");
  const [teachers, setTeachers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8080/teacher/getAll")
      .then((res) => res.json())
      .then((result) => {
        setTeachers(result);
      });
  }, []);

  useEffect(() => {
    teachers.map((teacher) => {
        console.log(teacher)
        if (teacher.id.toString() === id) {
          setName(teacher.name);
          setEmail(teacher.email);
        }
      });

  }, [id, teachers]);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ padding: "10px" }}>Name: {name}</span>
          <span style={{ padding: "10px" }}>Email: {email}</span>
        </div>
        <div style={{ border: "2px solid black", padding: "10px" }}>
          <img
            src={"https://randomuser.me/api/portraits/lego/1.jpg"}
            width="200px"
            height="200px"
          />
        </div>
      </Paper>
      <Schedule />
    </Container>
  );
}