import React from "react";
import styled from "styled-components";
export const Tablestyle = () => {
  return (
    <StyledWrapper>
      <div className="body">
        <div class="container">
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .body {
    height: 100%;
  }

  .body {
    margin: 0;
    background-color: linear-gradient(45deg, #49a09d, #5f2c82);
    font-family: sans-serif;
    font-weight: 100;
  }

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #55608f;
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(255, 255, 255, 0.2);
          z-index: -1;
        }
      }
    }
  }
`;
