import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import ResendOtpCode from "./subcomponents/ResendOtpCode";

function ResendOtpPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight700">
        <Row id="resendotp">
          <h2 className="mb-0 mt-0 heading2">Remitter Resend OTP</h2>
          <p className="px-4  mb-0 backroundP-tag">
            For any kind of reasons if the remitter send otp to get failed or
            the remitter not verified using the OTP, This endpoint using for
            resend the OTP
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
        className="col-12 col-sm-6 zindex scrollbar bg-dark maxheight700"
      >
        <ResendOtpCode />
      </Col>
    </>
  );
}

export default ResendOtpPage;
