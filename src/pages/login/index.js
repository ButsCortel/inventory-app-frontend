import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import api from "../../services/api";

import "./index.css";

const LoginPage = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    hasError: false,
    errorMessage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = state;
      if (!email || !password)
        return setState({
          ...state,
          hasError: true,
          errorMessage: "Missing required information!",
        });
      //No error
      const response = await api.post("/login", { email, password });
      const { user_id, token } = response.data;
      localStorage.setItem("user", user_id);
      localStorage.setItem("token", token);
      setState({ ...state, hasError: false, errorMessage: "" });
    } catch (error) {
      console.log(error);
      setState({ ...state, hasError: true, errorMessage: error.response.data });
    }
  };
  const handleClick = () => {
    history.push("/register");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h1>Inventory</h1>
      <div className="content">
        <h2>Login</h2>
        <p>Please login first.</p>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              value={state.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value={state.password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </FormGroup>

          <Button className="submit-btn">Login</Button>
          <Button className="secondary-btn" onClick={handleClick}>
            Register
          </Button>
        </Form>
      </div>
      {state.hasError ? <Alert color="danger">{state.errorMessage}</Alert> : ""}
    </>
  );
};

export default LoginPage;
