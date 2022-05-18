import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
// import "./Component/c1.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const TeacherLogin = () => {
  const history = useNavigate();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [teachers, setTeachers] = useState([]);
  const classes = useStyles();

  const handleClick = (e) => {
    let authenticated = false;
    teachers.map(teacher => {
      console.log(teacher)
      if(teacher.password === password && teacher.email === email) {
        setId(teacher.id);
        authenticated = true;
        if (authenticated) {
          history(`/teacherProfile/${teacher.id}`)
        }
      }
    })
  }

  useEffect(() => {
    fetch("http://localhost:8080/teacher/getAll")
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setTeachers(result);
      });
  }, []);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Login as a Teacher</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Teacher Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Teacher Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TeacherLogin;
