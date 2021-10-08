import React from "react";
import styled from "styled-components";
import HeaderImge from "../images/header.png";

export const HeroImage = () => {
  return (
    <StyledWrapper>
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <p>It's better to get fit Together.</p>
            <button>Invite a Friend</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .jumbotron {
    color: white;
    background-image: url(${HeaderImge});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
  }
  .container {
    background: tranparent;
    color: white;
    height: 50vh;
    width: 55vh;
    position: absolute;
    left: 75%;
    padding: 10px !important;
  }
  p {
    margin-left: 10%;
    margin-right: 55%;
    margin-bottom: 1rem;
    font-size: 50px;
    line-height: 90%;
  }
  button {
    margin-left: 13%;
    margin-right: 55%;
    margin-bottom: 1rem;
  }
`;
