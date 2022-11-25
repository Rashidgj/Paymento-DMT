import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import RemitterBalanceCode from "./subcomponents/RemitterBalanceCode";

function RemitterBalancePage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight700">
        <Row id="remitterbalance">
          <h2 className="mb-0 mt-0 heading2">Get Remitter Balance</h2>
          <p className="px-4  mb-0 backroundP-tag">
            This Api is used to fetch the balance of the registered remitter
            number".
          </p>
          <p className="px-4  mb-0 backroundP-tag">
            ! Note
            <br />
            Limits for customer
            <br />
            1.For customer who has done KYC - Rs 74,500 per customer per month
            (Temporarily on hold )<br />
            2.For non-KYC customer - Rs 25,000 per customer per month
          </p>
          <span className="m my-5">
            <Table bordered>
              <thead>
                <tr>
                  <th>Si no.</th>
                  <th>HTTP Response Conde</th>
                  <th>Response Code</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>404</td>
                  <td>501</td>
                  <td>Remitter Doesn’t exist</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex  scrollbar bg-dark maxheight700"
      >
        <RemitterBalanceCode />
      </Col>
    </>
  );
}

export default RemitterBalancePage;
