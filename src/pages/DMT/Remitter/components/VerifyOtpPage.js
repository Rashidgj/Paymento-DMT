import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import VerifyOtpCode from "./subcomponents/VerifyOtpCode";

function VerifyOtpPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight700">
        <Row id="remitterverify">
          <h2 className="mb-0 mt-0 heading2">Verify Remitter OTP</h2>
          <p className="px-4  mb-0 backroundP-tag">
            As mentioned in Remitter information, if a remitter is not found
            registered in the system, then by this API remitter can register
            themselves, by filling below details with OTP and ReferenceID
            received from " Remitter send OTP"
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
                  <td>208</td>
                  <td>81</td>
                  <td>Invalid OTP</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>208</td>
                  <td>82</td>
                  <td>Invalid ReferenceID</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex  scrollbar maxheight700 bg-dark ">
        <VerifyOtpCode />
      </Col>
    </>
  );
}

export default VerifyOtpPage;
