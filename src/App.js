import React from "react";
import Routes from "./routes";
import { Container } from "reactstrap";
//import logo from "./logo.svg";
import "./App.css";
import { ContextWrapper } from "./products-context";

function App() {
  return (
    <ContextWrapper>
      <Container>
        <Routes />
      </Container>
    </ContextWrapper>
  );
}

export default App;
