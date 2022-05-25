import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { UserContext } from "../App";

export const Logout = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    setError("");
    dispatch({ type: "USER", payload: false });
    try {
      logout();
      history.push("/login");
    } catch {
      setError("failed to log out");
    }
  });

  return (
    <>
      <h1>logout page</h1>
    </>
  );
};
