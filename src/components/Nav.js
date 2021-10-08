import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledWrapper>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ourfitness
          </a>
          <ul>
            <li>Rules</li>
            <li>
              <NavLink to="/Login">Log In</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledWrapper>
  );
};

//https://www.muscleandstrength.com/workouts/muscle-and-strength-womens-workout
//https://www.youtube.com/watch?v=dYjdzpZv5yc
//https://menubar.io/reactjs-tables
//https://www.youtube.com/watch?v=uduTSA_bkVY - make navbar to the right

const StyledWrapper = styled.div`
  nav {
    background-color: #f8fdff;
    padding: 0;
  }
  .container-fluid {
    margin: 0 80px 0 80px;
  }
  ul {
    display: block;
    margin-top: 10px;
  }

  ul * {
    list-style: none;
    text-decoration: none;
    display: inline;
    margin: 0 20px;
  }
`;
