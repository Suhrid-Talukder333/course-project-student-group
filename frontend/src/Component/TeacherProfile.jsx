import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Button } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import Schedule from "./Schedule";
import Clock from "./Clock";


export default function TeacherProfile() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(window.localStorage.getItem("loggedUser"))
  );

  useEffect(() => {
    setLoggedUser(JSON.parse(window.localStorage.getItem("loggedUser")))
  },[])

  const handleSave = (key, items) => {
    let updatedData = { ...loggedUser };
    updatedData[key] = items;
    setLoggedUser(updatedData);
    window.localStorage.setItem("loggedUser", JSON.stringify(updatedData));
  };

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi <span style={{ color: "blue" }}>{loggedUser.name} Sir</span>, Welcome
            back,
          </Typography>
        </Container>
        <Clock />
        <Container maxWidth="xl">
          <Typography variant="h5" sx={{ mb: 5 }}>
            Schedule
          </Typography>
          <Schedule courses={loggedUser.courses} onChange={handleSave} />
        </Container>
      </Box>
    </>
  );
}
