import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Box } from "@mui/material";
import Schedule from "./Schedule";


export default function Courses() {
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
          <Schedule noSort={true} courses={loggedUser.courses} onChange={handleSave} />
        </Container>
      </Box>
    </>
  );
}
