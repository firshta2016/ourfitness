import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Workouts = () => {
  const history = useHistory();
  return (
    <StyledWrapper>
      <section>
        <div className="container-fluid">
          <div className="row gender">
            <h2>Choose your Exercise</h2>
          </div>
          <div className="row buttons">
            <div className="col">
              <button
                type="button"
                onClick={() => history.push("./ExerciseTable")}
              >
                Fat Loss
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => history.push("./ExerciseTable")}
              >
                Strength
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => history.push("./ExerciseTable")}
              >
                Muscle Building
              </button>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container-fluid {
    background-color: #1a273e;
    height: 40vh;
  }
  .gender {
    color: white;
  }
  .buttons {
    padding-left: 25%;
    padding-top: 20px;
  }
  h2 {
    padding-top: 30px;
    text-align: center;
  }
`;
