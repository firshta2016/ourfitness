import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
export const Dashboard = () => {
  return (
    <StyledWrapper>
      <div className="slogan">
        <h2>Select your Goal</h2>
        <p>
          We’ve created a fun, proven way to get better at just about anything.
          Whether you’re starting your journey or honing your skills – you’ll
          find a game, a goal, and a supportive group of fellow players that’s
          right for you.
        </p>
      </div>
      <Card />
      <Card />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-horizontal {
    display: flex;
    margin: 3% 15% 3% 15%;
  }
  .card {
    background-color: #eff5f7;
    border: none;
  }
  .card-body {
    border: 1px solid black;
  }
  .slogan {
    text-align: center;
    padding: 100px 550px 100px 550px;
    background-color: #eff5f7;
  }
  .slogan h3 {
    margin-bottom: revert;
  }
`;

//https://wger.de/en/software/api
