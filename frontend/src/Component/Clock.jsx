import { React, useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition .5s;
  h1 {
    font-size: 5em;
    cursor: pointer;
    transition: .2s;
  }
`;

const Clock = () => {
  const [id, setId] = useState(1);
  const [state, setState] = useState({
    time: moment().format("LT"),
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setState({
        time: moment().format("LT"),
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    let state = (id+1);
    if(state == 4) {
      state = 1;
    }
    setId(state);
    if (state == 1) {
      setTimeout(() => {
        setState({
          time: moment().format("l"),
        });
      }, 0);
    } else if (state == 2) {
      setTimeout(() => {
        setState({
          time: moment().format("MMMM Do YY"),
        });
      }, 0);
    } else if (state == 3) {
      setTimeout(() => {
        setState({
          time: moment().format("LT"),
        });
      }, 0);
    }
  };
  return (
    <StyledContainer onClick={handleClick}>
      <h1 >{state.time}</h1>
    </StyledContainer>
  );
};

export default Clock;
