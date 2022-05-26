import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileInfo = () => {
  const { type, id } = useParams();
  const [user, setUser] = useState({});
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (type === "teacher") {
      console.log("asdasdasdasdasd");
      fetch("http://localhost:8080/teacher/getAll")
        .then((res) => res.json())
        .then((result) => {
          result.forEach((item) => {
            if (item.id.toString() === id.toString()) {
              setUser({ ...item, role: "teacher" });
            }
          });
        });
    } else if (type === "student") {
      fetch("http://localhost:8080/student/getAll")
        .then((res) => res.json())
        .then((result) => {
          result.forEach((item) => {
            if (item.id.toString() === id.toString()) {
              setUser({ ...item, role: "student" });
            }
          });
        });
    } else if (!type && !id) {
      let loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
      setUser(loggedUser);
      setEnable(true)
    }
  }, [id, type]);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile user={user} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails user={user} enable={enable}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProfileInfo;
