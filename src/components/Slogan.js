import React from "react";
import styled from "styled-components";

export const Slogan = () => {
  return (
    <StyledWrapper>
      <div className="container-fluid ">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h3>Give Your Days More Energy</h3>
              <p>
                We sit still all day which doesn’t help our Stress levels and
                anxiety levels. Did you know Moving for 30min a day releases
                endorphins to Your brain that reduces stress and makes you Happy
                for up to 12 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container-fluid {
    background-color: #eff5f7;
  }
`;
