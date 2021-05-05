import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Navigation from "./components/Navigation";
import DisplayPage from "./components/DisplayPage";

function App() {
  return (
    <div>
      <Container fluid='lg'>
        <Row>
          <Col lg={12}>
            <Navigation />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col lg={12}>
            <DisplayPage />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;