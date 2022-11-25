import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import SendOtpCode from "./subcomponents/SendOtpCode";

function SendOtpPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight700">
        <Row id="sendotp">
          <h2 className="mb-0 mt-0 heading2">Remitter Send OTP</h2>
          <p className="px-4  mb-0 backroundP-tag">
            As mentioned in Remitter Information API, if a remitter is not found
            registered in the system, then by this API remitter can register
            themselves, by filling below details with OTP. Using this otp Can
            verify the remitter
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
                  <td>0</td>
                  <td>Remitter already exist</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>105</td>
                  <td>Enter a valid name</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>404</td>
                  <td>102</td>
                  <td>Invalid Mobile number</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex  scrollbar maxheight700 bg-dark">
        <SendOtpCode />
      </Col>
    </>
  );
}

export default SendOtpPage;
