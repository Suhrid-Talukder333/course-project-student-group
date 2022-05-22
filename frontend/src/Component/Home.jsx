import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../frontend/src/assets/logo.png";

const Title = styled.span`
  color: #1976d2;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  background: #6fb98f;
`

function Home() {
  return (
    <Container>
      <img alt="Nstu" src={Logo} width="500px" height={"500px"} />
      <div>
        <Title>
          <StyledTypography variant="h3" gutterBottom component="div">Computer Science And</StyledTypography>
          <StyledTypography variant="h3" gutterBottom component="div">Telecommunication</StyledTypography>
          <StyledTypography variant="h3" gutterBottom component="div">Engineering</StyledTypography>
        </Title>
      </div>

      <div className="log">
        <Link to="/signin">
        <StyledButton variant="contained" size="large">
          Sign In
        </StyledButton>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
