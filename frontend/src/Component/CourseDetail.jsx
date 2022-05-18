import React, { useEffect, useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import CustomScroll from "react-custom-scroll"


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));


const CourseDetails = () => {
  const history = useNavigate();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [course, setcourse] = useState([]);
  const classes = useStyles();
  const ref = useRef(null);
  const [space, setSpace] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/course/getAll")
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setcourse(result);
      });
  }, []);

  useEffect(() => {
    setSpace(
      ref?.current?.innerHeight - ref?.current?.offsetTop + ref?.current?.offsetHeight - 80,
    )
    window.onresize = () => {
      setSpace(
        ref?.current?.innerHeight - ref?.current?.offsetTop + ref?.current?.offsetHeight - 80,
      )
    }
  }, [ref?.current?.offsetTop])

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        Course
        <div style={{display: "flex", flexDirection: "column"}}>
          <span style={{padding: "10px"}}>
            Name: {course.name}
          </span>
          <span style={{padding: "10px"}}>
            Teacher Name: {course.teacher}
          </span>
          <span style={{padding: "10px"}}>
            Time: {course.time}
          </span>
          <span style={{padding: "10px"}}>
            Year: {course.year}
          </span>
        </div>
      </Paper>
      <Container>
        <h1>Announcement</h1>
        <Paper elevation={3} style={paperStyle}>
          <div ref={ref} />
          <CustomScroll>
            <div style={{maxWidth: `${space} + px`}}>
              <li style= {{padding: "10px", listStyle: "none"}}>
                First Announmment
              </li>
              <li style= {{padding: "10px", listStyle: "none"}}>
                First Announmment
              </li>
              <li style= {{padding: "10px", listStyle: "none"}}>
                First Announmment
              </li>
              <li style= {{padding: "10px", listStyle: "none"}}>
                First Announmment
              </li>
              <li style= {{padding: "10px", listStyle: "none"}}>
                First Announmment
              </li>
            </div>
          </CustomScroll>
        </Paper>
      </Container>
    </Container>
  );
};

export default CourseDetails;
