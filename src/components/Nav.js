import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

export const Nav = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink to="/Rules">Rules</NavLink>
          </li>

          <li>
            <NavLink to="/ExerciseTable">table</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink to="/Rules">Rules</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/ExerciseTable">table</NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <StyledWrapper>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          getFit
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  nav {
    background-color: #f8fdff;
    padding: 0;
  }
  .navbar {
    font-size: 20px;
    padding: 0 90px 0 90px;
  }
  .navbar-brand {
    font-size: 40px;
    color: black;
    font-family: "Courgette";
  }
  ul {
    margin-top: 10px;
  }

  ul * {
    list-style: none;
    text-decoration: none;
    margin: 0 10px;
    color: black;
  }
`;

{
  /* <li className="nav-item active">
<NavLink to="/Rules">Rules</NavLink>
</li>
<li className="nav-item">
<NavLink to="/Login">Login</NavLink>
</li>
<li>
<NavLink to="/Tablestyle">table</NavLink>
</li>
<li>
<NavLink to="/logout">Logout</NavLink>
</li> */
}
