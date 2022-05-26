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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

const EditModal = ({ courses, course, onChange, handleToggle }) => {
  const [courseTime, setCourseTime] = React.useState(course.time);
  const [error, setError] = React.useState(false);
  const [helper, setHelper] = React.useState("");

  const handleChange = (e) => {
    setCourseTime(e.target.value);
  };

  const handleSave = () => {
    let updatedCourse = { ...course };
    updatedCourse.time = courseTime;
    console.log(courses);
    let time = handleTimeStamps(courseTime);
    let errorFound = false;
    courses.forEach((item) => {
      if (item.id.toString() !== course.id.toString()) {
        let courseTime = handleTimeStamps(item.time);
        if (Math.floor(Math.abs(courseTime - time)) < 1) {
          setError(true);
          setHelper(
            "Wrong time, other courses may have been scheduled in between the time"
          );
          errorFound = true;
        }
      }
    });
    if (!errorFound) {
      onChange(updatedCourse);
    }
  };

  return (
    <div>
      <Modal
        open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              CSTE{course.code}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {course.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Class Time:
            </Typography>
            <TextField
              error={error}
              style={{
                width: "100%",
                margin: 10,
              }}
              value={courseTime}
              onChange={(e) => handleChange(e)}
              helperText={helper}
            />
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "10px",
            }}
          >
            <Button size="small" variant="outlined" onClick={handleToggle}>
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleSave}
            >
              Save
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
