import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import Schedule from "./Schedule";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function StudentProfile() {
  const {roll} = useParams();
  const paperStyle = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems:"center", padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  useEffect(() => {
    students.map((student) => {
        console.log(student.roll, roll);
        if (student.roll === roll) {
            console.log("asdsad")
            setName(student.name);
            setBatch(student.batch);
            setEmail(student.email);
        }
      });

    console.log(students);
  }, [roll, students]);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span style={{padding: "10px"}}>
            Name: {name}
          </span>
          <span style={{padding: "10px"}}>
            Roll: {roll}
          </span>
          <span style={{padding: "10px"}}>
            Batch: {batch}
          </span>
          <span style={{padding: "10px"}}>
            Email: {email}
          </span>
        </div>
        <div style={{border: "2px solid black", padding: "10px"}}>
          <img src={"https://randomuser.me/api/portraits/lego/1.jpg"} width="200px" height="200px" />
        </div>
      </Paper>
      <Container>
        <h1>Class Time</h1>
        <Schedule />
      </Container>
      <Container></Container>
    </Container>
  );
}