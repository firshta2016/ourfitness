import React from "react";
import styled from "styled-components";
import HeaderImge from "../images/header.png";

export const HeroImage = () => {
  return (
    <StyledWrapper>
      <div className="jumbotron">
        <p className="lead">a structured week-by-week plan to get fit.</p>
        <p className="btn">
          <a className="btn btn-responsive btn-primary" href="#" role="button">
            Learn more
          </a>
        </p>
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
    opacity: 0.8;
  }
  .container {
    background: transparent;
    color: white;
    position: absolute;
  }
  p {
    margin-left: 10%;
    margin-right: 70%;
    line-height: 90%;
    padding-top: 3%;
  }

  @media (min-width: 544px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media (min-width) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    p {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1200px) {
    p {
      font-size: 3rem;
    }
  }
  button {
    margin-left: 13%;
  }
  .btn {
    padding-top: 0;
  }
`;
