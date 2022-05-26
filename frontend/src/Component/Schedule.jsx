import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Button, Modal } from "@mui/material";
import Student from "../assets/student.png";
import Teacher from "../assets/teacher.png";
import styled from "styled-components";
import { Container, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #bcbabe;
  border-radius: 8px;
`;

const MediaCard = ({ course, onChange, courses, noSort }) => {
  const history = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(course?.status);
  const [userRole, setUserRole] = React.useState(
    JSON.parse(window.localStorage.getItem("loggedUser")).role
  );

  React.useEffect(() => {
    setStatus(course.status);
  }, [course, status]);

  const showCourse = (e, course) => {
    e.stopPropagation();
    history(`/course/${course.id}`);
  };

  const handleAttend = (e) => {
    e.stopPropagation();
    setStatus("attending");
    let updatedData = { ...course };
    updatedData.status = "attending";
    onChange(updatedData);
  };

  const handleAbsent = (e) => {
    e.stopPropagation();
    setStatus("dismissed");
    let updatedData = { ...course };
    updatedData.status = "dismissed";
    onChange(updatedData);
  };

  const handleToggle = (e) => {
    e && e.stopPropagation();
    setOpen(!open);
  };

  const handleSave = (course) => {
    onChange(course);
    handleToggle();
  };

  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 350,
          padding: 3,
          border: status && "1px solid #363237",
          margin: 3,
          cursor: "pointer",
          backgroundColor:
            status && status === "attending"
              ? "#d8fad1"
              : status === "dismissed"
              ? "#ff7671;"
              : "",
        }}
        onClick={(e) => showCourse(e, course)}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://images.unsplash.com/photo-1532975313331-cbaf920cf049?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWxsdXN0cmF0aW9uJTIwYm9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.name}
          </Typography>
          {!noSort && <Typography variant="h6" color="text.secondary">
            {course.time}
          </Typography>}
        </CardContent>
        {userRole === "teacher" && !noSort && (
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={(e) => handleToggle(e)}
            >
              Edit
            </Button>
            {!status && (
              <>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={(e) => handleAttend(e)}
                >
                  Attend
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={(e) => handleAbsent(e)}
                >
                  Absent
                </Button>
              </>
            )}
            {status && (
              <Typography variant="h6" color="text.secondary">
                {status.toUpperCase()}
              </Typography>
            )}
          </CardActions>
        )}
      </Card>
      {open && (
        <EditModal
          courses={courses}
          course={course}
          handleToggle={handleToggle}
          onChange={handleSave}
        />
      )}
    </>
  );
};

const handleTimeStamps = (time) => {
  let updatedTime = time.replace(" ", "").toLowerCase();
  if (updatedTime.includes("pm")) {
    updatedTime = updatedTime.replace("pm", "");
    updatedTime = parseFloat(updatedTime) + 12;
    return updatedTime;
  } else {
    updatedTime = updatedTime.replace("am", "");
    updatedTime = parseFloat(updatedTime);
    return updatedTime;
  }
};

const scheduleSort = (courses, noSort) => {
  let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  let updatedData = [...courses];
  if (loggedUser.role === "student") {
    updatedData = updatedData.filter((item) => {
      if (
        item.year.toString() === loggedUser.year.toString() &&
        item.term.toString() === loggedUser.term.toString()
      ) {
        return item;
      }
    });
  } else if (loggedUser.role === "teacher") {
    updatedData = updatedData.filter((item) => {
      if (
        item.teacher.toString().toLowerCase() ===
        loggedUser.name.toString().toLowerCase()
      ) {
        return item;
      }
    });
  }
  if (noSort) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var now = new Date();
    var day = now.getDay();

    updatedData = updatedData.filter((item) => {
      let include = false;
      loggedUser.weekdays.forEach((i) => {
        console.log(i);
        console.log(days[day].toLowerCase());
        if (i.courseName.toLowerCase() == item.name.toLowerCase()) {
          if (days[day].toLowerCase() == i.day.trim().toLowerCase()) {
            console.log(i);
            include = true;
          }
        }
      });
      if (include) {
        return item;
      }
    });
  }
  console.log(updatedData, "asdasd");
  updatedData.sort((a, b) => {
    let timeA = handleTimeStamps(a.time);
    let timeB = handleTimeStamps(b.time);
    return timeA - timeB;
  });
  return updatedData;
};

export default function Schedule({ courses, onChange, noSort = false }) {
  const [scheduledCourses, setScheduledCourses] = React.useState(
    scheduleSort(courses)
  );

  React.useEffect(() => {
    setScheduledCourses(scheduleSort(courses, noSort));
  }, [courses, noSort]);

  const postCourse = async (course) => {
    await fetch(`http://localhost:8080/course/update/${course.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    }).then(() => {
      console.log("New course added");
    });
  };

  const handleChange = (course) => {
    postCourse(course).then(() => {
      let updatedCourses = [...courses];
      updatedCourses = updatedCourses.map((item) => {
        if (course.code === item.code) {
          return course;
        }
        return item;
      });
      setScheduledCourses(scheduleSort(updatedCourses, noSort));
      onChange("courses", updatedCourses);
    });
  };

  return (
    <StyledContainer>
      {scheduledCourses &&
        scheduledCourses.map((course) => (
          <MediaCard
            courses={scheduledCourses}
            course={course}
            key={course.id}
            onChange={handleChange}
            noSort={noSort}
          />
        ))}
    </StyledContainer>
  );
}
