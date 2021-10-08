import * as React from "react";

import styled from "styled-components";
import { Nav } from "./Nav";
import { HeroImage } from "./HeroImages";
import { Slogan } from "./Slogan";
import { Circle } from "./Circle";
import { Workouts } from "./Workouts";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <StyledWrapper>
      <Nav />
      <HeroImage />
      <Slogan />
      <Circle />
      <Workouts />
      <Testimonials />
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    color: red;
  }
  .container {
    padding: 100px;
  }
`;
