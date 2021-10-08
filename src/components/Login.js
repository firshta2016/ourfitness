import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "./Nav";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

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
      <Nav />
      <div className="signup">
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
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="button 2-100" type="submit">
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .signup {
    margin: 50px 25% 0 25%;
  }
  .button {
    margin-top: 20px;
  }
`;
