import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import "./Component/c1.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StudentLogin = () => {
  const history = useNavigate();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  const handleClick = (e) => {
    let authenticated = false;
    students.map(student => {
      if(student.roll === roll && student.password === password, student.email === email) {
        authenticated = true;
      }
    })
    if (authenticated) {
      history(`/studentProfile/${roll}`)
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Student Login</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Student Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Roll"
            variant="outlined"
            fullWidth
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Password"
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

export default StudentLogin;
