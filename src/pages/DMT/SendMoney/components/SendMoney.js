import React from "react";
import { Col, Row } from "react-bootstrap";

function SendMoney() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Row id="sendmoney">
          <h1 className="heading mb-0">Send Money</h1>
          <p className="px-4 mb-0 backroundP-tag">
            Initiate a Money Transfer transaction to a bank account via
            NEFT/IMPS
            <br />
            Transaction initiation for More than Rs 5000 in one time:
            <br />
            As per RBI guidelines you can send only Rs 5000 in one go, If you
            wish to send more than Rs 5000 in one go then either you can split
            the transaction at your end and then send to us, that needs to be
            handled at your end.
          </p>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor"></Col>
    </>
  );
}

export default SendMoney;
