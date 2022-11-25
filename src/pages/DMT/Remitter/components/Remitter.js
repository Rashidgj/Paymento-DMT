import React from "react";
import { Row, Col } from "react-bootstrap";
import Bar from "../../../SideBar/Bar";

function Remitter() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Row id="remitter">
          <Bar />
          <h1 className="heading mb-0">Remitter</h1>
          <p className="px-4  mb-0 backroundP-tag">
            With these APIs we can check the Remitter mobile number is already
            registered with our database, if yes then the response system will
            provide remitter details. If the remitter mobile number is not
            queried before, then system will hit an OTP on the remitter mobile
            number to initiate the registration process
          </p>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor">
        <Row className="d-none d-sm-block">
          <Col className="bg-dark text-white">
            <span className="border px-3 mx-2 bg-secondary">shell</span>
            <span className="border px-3 bg-secondary">ruby</span>
            <span className="border px-3 mx-2 bg-secondary">python</span>
            <span className="border px-3 bg-secondary">java</span>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Remitter;
