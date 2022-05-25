// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink, useHistory } from "react-router-dom";
// import { Alert } from "react-bootstrap";
// // import { useAuth } from "../contexts/AuthContext";
// import { Footer } from "./Footer";
// import { Card } from "./Card";

// export const Dashboard = () => {
//   const [error, setError] = useState("");
//   const { currentUser, logout } = useAuth();
//   const history = useHistory();

//   async function handleLogout() {
//     setError("");
//     try {
//       await logout();
//       history.push("/login");
//     } catch {
//       setError("Failed to log out");
//     }
//   }
//   return (
//     <StyledWrapper>
//       <nav className="navbar">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             ourfitness
//           </a>
//           <ul>
//             <li>Rules</li>
//             <li>
//               <button variant="link" onClick={handleLogout}>
//                 Log Out
//               </button>
//             </li>
//             <li>
//               <NavLink to="/Logout">Logout</NavLink>
//               {currentUser.email}
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div>{error && <Alert variant="danger">{error}</Alert>}</div>
//       <div className="slogan">
//         <h2>Select your Goal</h2>
//         <p>
//           We’ve created a fun, proven way to get better at just about anything.
//           Whether you’re starting your journey or honing your skills – you’ll
//           find a game, a goal, and a supportive group of fellow players that’s
//           right for you.
//         </p>
//       </div>
//       <Card />
//       <Card />
//       <Footer />
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   nav {
//     background-color: #f8fdff;
//     padding: 0;
//   }

//   .container-fluid {
//     margin: 0 80px 0 80px;
//   }
//   ul {
//     display: block;
//     margin-top: 10px;
//   }

//   ul * {
//     list-style: none;
//     text-decoration: none;
//     display: inline;
//     margin: 0 20px;
//   }
//   .card-horizontal {
//     display: flex;
//     margin: 3% 15% 3% 15%;
//   }
//   .card {
//     background-color: #f8fdff;
//     border: none;
//   }
//   .card-body {
//     border: 1px solid black;
//   }
//   .slogan {
//     text-align: center;
//     padding: 100px 550px 100px 550px;
//     background-color: #f8fdff;
//   }
//   .slogan h3 {
//     margin-bottom: revert;
//   }
// `;

// //change navbar login/logout
// //https://stackoverflow.com/questions/59580153/how-to-change-navbar-text-on-login-logout-in-react-js
// //https://wtwerner.medium.com/adding-login-logout-signup-to-a-navbar-with-react-and-redux-729f806258bb
// //https://www.youtube.com/watch?v=fXk6x3MCNHM

// //MERN STACK
// //https://www.youtube.com/watch?v=2yddJwL1Tpg
