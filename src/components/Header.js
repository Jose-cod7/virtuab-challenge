import React from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import Logo from "../components/vb_logo.png";

const Header = () => {
  //const [] usestate
  return (
    <div className="header">
      <Row className="row-header">
        <Col className="column-1">
          <Image className="logo" src={Logo} />
        </Col>
        <Col className="column-2">
          <Form className="form-date">
            <Form.Control
              type="date"
              name="verify-date"
              //value={} //the value comes from useState
              required
            />
          </Form>
        </Col>
        <Col className="column-3">
          <h2>CHALLENGE</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
