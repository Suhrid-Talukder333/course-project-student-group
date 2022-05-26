import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { NotificationManager } from "react-notifications";

const AccountProfileDetails = ({ user, enable }) => {
  const [values, setValues] = useState({
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    phone: user.phone ? user.phone : "",
    address: user.address ? user.address : "",
    blood: user.blood ? user.blood : "",
  });

  const handleSave = () => {
    if (user.role === "teacher") {
      let updatedUser = {};
      fetch("http://localhost:8080/teacher/getAll")
        .then((res) => res.json())
        .then((result) => {
          result.forEach((item) => {
            if (item.id.toString() === user.id.toString()) {
              updatedUser = item;
            }
          });
          updatedUser.name = values.name;
          updatedUser.email = values.email;
          updatedUser.phone = values.phone;
          updatedUser.address = values.address;
          updatedUser.blood = values.blood;
          fetch(`http://localhost:8080/teacher/update/${user.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
          }).then(() => {
            let loggedUser = JSON.parse(
              window.localStorage.getItem("loggedUser")
            );
            loggedUser.name = values.name;
            loggedUser.email = values.email;
            loggedUser.phone = values.phone;
            loggedUser.address = values.address;
            loggedUser.blood = values.blood;
            window.localStorage.setItem(
              "loggedUser",
              JSON.stringify(loggedUser)
            );
            NotificationManager.success("Successfully Edited", "Profile");
          });
        });
    } else if (user.role === "student") {
      let updatedUser = {};
      fetch("http://localhost:8080/student/getAll")
        .then((res) => res.json())
        .then((result) => {
          result.forEach((item) => {
            if (item.id.toString() === user.id.toString()) {
              updatedUser = item;
            }
          });
          updatedUser.name = values.name;
          updatedUser.email = values.email;
          updatedUser.phone = values.phone;
          updatedUser.address = values.address;
          updatedUser.blood = values.blood;
          fetch(`http://localhost:8080/student/update/${user.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
          }).then(() => {
            let loggedUser = JSON.parse(
              window.localStorage.getItem("loggedUser")
            );
            loggedUser.name = values.name;
            loggedUser.email = values.email;
            loggedUser.phone = values.phone;
            loggedUser.address = values.address;
            loggedUser.blood = values.blood;
            window.localStorage.setItem(
              "loggedUser",
              JSON.stringify(loggedUser)
            );
            NotificationManager.success("Successfully Edited", "Profile");
          });
        });
    }
  };

  useEffect(() => {
    setValues({
      name: user.name ? user.name : "",
      email: user.email ? user.email : "",
      phone: user.phone ? user.phone : "",
      address: user.address ? user.address : "",
      blood: user.blood ? user.blood : "",
    });
  }, [user]);

  console.log(user, "sdasdasd");

  console.log(values, "values");

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader
          subheader="The information can only be edited by the user"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
                label="Name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
                disabled={!enable}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                disabled={!enable}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
                disabled={!enable}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
                label="Blood Group"
                name="blood"
                onChange={handleChange}
                value={values.blood}
                variant="outlined"
                disabled={!enable}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
                label="Address"
                name="address"
                onChange={handleChange}
                value={values.address}
                variant="outlined"
                disabled={!enable}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          {enable && (
            <Button color="primary" variant="contained" onClick={handleSave}>
              Save details
            </Button>
          )}
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
