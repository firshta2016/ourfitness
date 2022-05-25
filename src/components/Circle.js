import * as React from "react";
import styled from "styled-components";

export const Circle = () => {
  return (
    <StyledWrapper>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 block">
              <div className="circle">
                <p>1</p>
              </div>
              <div>
                <p>Get Your Goals</p>
              </div>
            </div>
            <div className="col-md-4 block">
              <div className="circle">
                <p>2</p>
              </div>
              <div>
                <p>Get Moving</p>
              </div>
            </div>
            <div className="col-md-4 block">
              <div className="circle">
                <p>3</p>
              </div>
              <div>
                <p>Get Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .container-fluid {
    background-color: #eff5f7;
    padding: 0 0 5% 0;
  }
  .block {
    text-align: center;
    vertical-align: middle;
  }
  .circle {
    background-color: #1a273e;
    border-radius: 200px;
    color: white;
    height: 200px;
    font-weight: bold;
    width: 200px;
    display: table;
    margin: 20px auto;
  }
  .circle p {
    vertical-align: middle;
    display: table-cell;
    font-size: 40px;
  }
`;
