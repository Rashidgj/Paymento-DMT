import React from "react";
import {Row ,Col} from "react-bootstrap"

function Beneficiary() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Row id="beneficiary">
          <h1 className="heading mb-0">Beneficiary</h1>
          <p className="px-4 mb-0 backroundP-tag">
            Beneficiary is the bank account who receives the funds remitted by
            the remitter mobile number.<br/>
            A beneficiary is someone to whom one can transfer money or to be
            able to transfer money, the customer must add a beneficiary using
            the beneficiary's bank account details. By using our APIs, you can
            Create, Delete and Fetch beneficiaries for your customers.
          </p>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor"></Col>
    </>
  );
}

export default Beneficiary;
