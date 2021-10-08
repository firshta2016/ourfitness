import React from "react";
import styled from "styled-components";

export const Slogan = () => {
  return (
    <StyledWrapper>
      <div className="slogan">
        <h3>Give Your Days More Energy</h3>
        <p>
          We sit still all day which doesn’t help our Stress levels and anxiety
          levels. Did you know Moving for 30min a day releases endorphins to
          Your brain that reduces stress and makes you Happy for up to 12 hours.{" "}
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slogan {
    text-align: center;
    padding: 100px 550px 100px 550px;
    background-color: #f8fdff;
  }
  .slogan h3 {
    margin-bottom: revert;
  }
`;
