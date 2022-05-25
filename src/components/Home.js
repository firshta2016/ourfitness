import * as React from "react";

import styled from "styled-components";
import { Nav } from "./Nav";
import { HeroImage } from "./HeroImages";
import { Slogan } from "./Slogan";
import { Circle } from "./Circle";

import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <StyledWrapper>
      <HeroImage />
      <Slogan />
      <Circle />
      <Testimonials />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;
