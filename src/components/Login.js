import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { UserContext } from "../App";

export const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "USER", payload: true });
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("./Dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <StyledWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 login-background">
            <div className="login">
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        ref={passwordRef}
                        required
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      className="button 2-100"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </Form>
                  <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password</Link>
                  </div>
                </Card.Body>
              </Card>
              <div className="2-100 text-center mt-2">
                Need an account? <Link to="./Signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .login {
    margin: 50px 25% 0 25%;
  }
  .login-background {
    background-color: #eff5f7;
  }
  .button {
    margin-top: 20px;
  }
`;
