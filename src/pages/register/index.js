import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import "./index.css";
import api from "../../services/api";

const RegisterPage = ({ history }) => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    hasError: false,
    errorMessage: "",
    success: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstname, lastname, email, password } = state;

      if (!firstname || !lastname || !email || !password)
        return setState({
          ...state,
          hasError: true,
          errorMessage: "Missing required information!",
        });
      //No error
      const response = await api.post("/accounts/create", {
        firstname,
        lastname,
        email,
        password,
      });
      console.log(response);
      setState({
        ...state,
        hasError: false,
        errorMessage: "",
        success: true,
      });
      setTimeout(() => history.push("/"), 2000);
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        hasError: true,
        errorMessage: error.response.data,
      });
    }
  };
  return (
    <>
      <h1>Inventory</h1>
      <div className="content">
        <h2>Create an account</h2>
        <p>Please register first.</p>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="firstname"
              value={state.firstname}
              onChange={handleChange}
              placeholder="First name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="lastname"
              value={state.lastname}
              onChange={handleChange}
              placeholder="Last name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </FormGroup>

          <Button className="submit-btn">Submit</Button>
          <Button className="secondary-btn" onClick={handleClick}>
            Cancel
          </Button>
        </Form>
      </div>
      {state.hasError ? <Alert color="danger">{state.errorMessage}</Alert> : ""}
      {state.success ? <Alert color="success">Account created!</Alert> : ""}
    </>
  );
};

export default RegisterPage;
