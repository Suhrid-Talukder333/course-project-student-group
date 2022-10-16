import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import gif from "../../../frontend/src/assets/signIn.gif";
import styled from "styled-components";
import RoleCard from "./RoleCard";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/">CSTE</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = createTheme();

export default function Login() {
  const [role, setRole] = useState({ role: "student", title: "Student" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [resources, setResources] = useState([]);
  const [weekdays, setWeekdays] = useState([]);
  const [helper, setHelper] = useState("");

  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSelectRole = (type) => {
    setRole(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (role.role === "student") {
      let authenticated = false;
      students.forEach((item) => {
        if (item.email === email && item.password === password) {
          authenticated = true;
          setPasswordError(false);
          setEmailError(false);
          let user = { ...item };
          user.role = "student";
          let updatedCourses = [...courses];
          updatedCourses = updatedCourses.map(item => {
            item["announcements"] = [];
            item["resources"] = [];
            announcements.forEach(a => {
              if(a.courseId === item.id) {
                item["announcements"].push(a);
              }
            })
            resources.forEach(a => {
              if(a.courseId === item.id) {
                item["resources"].push(a);
              }
            })
            return item;
          })
          user.courses = updatedCourses;
          user.weekdays = weekdays;
          window.localStorage.setItem("loggedUser", JSON.stringify(user));
        } 
      });
      if (authenticated) {
        history(`/studentProfile/`);
      } else {
        setPasswordError(true);
        setEmailError(true);
        setHelper("Invalid entry");
      }
    } else {
      let authenticated = false;
      teachers.forEach((item) => {
        if (item.email === email && item.password === password) {
          setPasswordError(false);
          setEmailError(false);
          authenticated = true;
          let user = { ...item };
          user.role = "teacher";
          let updatedCourses = [...courses];
          updatedCourses = updatedCourses.map(item => {
            item["announcements"] = [];
            item["resources"] = [];
            announcements.forEach(a => {
              if(a.courseId === item.id) {
                item["announcements"].push(a);
              }
            })
            resources.forEach(a => {
              if(a.courseId === item.id) {
                item["resources"].push(a);
              }
            })
            return item;
          })
          user.courses = updatedCourses;
          user.weekdays = weekdays;
          window.localStorage.setItem("loggedUser", JSON.stringify(user));
        }
      });
      if (authenticated) {
        history(`/teacherProfile/`);
      } else {
        setPasswordError(true);
        setEmailError(true);
        setHelper("Invalid entry");
      }
    }
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
    fetch("http://localhost:8080/teacher/getAll")
      .then((res) => res.json())
      .then((result) => {
        setTeachers(result);
      });
    fetch("http://localhost:8080/course/getAll")
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      });
    fetch("http://localhost:8080/announcements/getAll")
      .then((res) => res.json())
      .then((result) => {
        setAnnouncements(result);
      });
    fetch("http://localhost:8080/resources/getAll")
      .then((res) => res.json())
      .then((result) => {
        setResources(result);
      });
    fetch("http://localhost:8080/weekdays/getAll")
      .then((res) => res.json())
      .then((result) => {
        setWeekdays(result);
      })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#c9cbcc",
          }}
        >
          <ImgContainer>
            <img src={gif} />
          </ImgContainer>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="div"
              sx={{
                width: "100%",
                margin: "20px",
                display: "flex",
                padding: 5,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <RoleCard
                type={{ role: "student", title: "Student" }}
                selected={role.role === "student"}
                onChange={handleSelectRole}
              />
              <RoleCard
                type={{ role: "teacher", title: "Teacher" }}
                selected={role.role === "teacher"}
                onChange={handleSelectRole}
              />
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                error={emailError}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                helperText={helper}
                onChange={handleEmailChange}
              />
              <TextField
                error={passwordError}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
                helperText={helper}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
