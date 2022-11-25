import React from "react";
import { Col, Row, Table } from "react-bootstrap";

function SendMoney1() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight700">
        <Row id="sendmoney1">
          <h2 className="mb-0 mt-0 heading2">Send Money</h2>
          <p className="px-4  mb-0 backroundP-tag">
            When you are in an UAT Environment try this account numbers for
            success , processing and failure response
            <br />
            <span>Account number</span>
            <br />
            9087718721 - failure
            <br />
            123456789 - success
            <br />
            9087718722 – unknown
            <br />
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
                  <td>400</td>
                  <td>114</td>
                  <td>
                    Invalid amount please enter a valid amount (100 to 5000)
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>117</td>
                  <td>Beneficiary Not found</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>400</td>
                  <td>106</td>
                  <td>Remitter does not exist</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex bg-dark scrollbar maxheight700"
        style={{ maxHeight: "744px" }}
      >
        <Row className="codebg">
          <h3 className="text-white codehead p-3">URL:</h3>
          <code className="text-white pt-5 pb-5 ">
            http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money
          </code>

          <h3 className="text-white p-3">Request:</h3>
          <p className="output  text-white ">
            <br /> <code>"beneficiaryId"</code> <span>: </span>
            <code className="code-cyan">36</code>
            <br /> <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">26</code>
            <br /> <code>"Amount"</code> <span>: </span>
            <code className="code-yellow">200</code>
            <br />
          </p>

          <h3 className="text-white  p-3">Header:</h3>
          <p className="output  text-white ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow"> "abs1nxxxxx"</code>
            <br />
          </p>

          <h3 className="text-white  p-3">Response:</h3>
          <h5 className="text-white ">Success Response : </h5>
          <p className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"200"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney Success"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">1</code>
            <br /> <code>"data"</code>
            <p className="output-two  text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-yellow">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-yellow">"I22313011897"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-yellow">200.0</code>
              <br />
              <code>"utrNumber"</code> <span>: </span>
              <code className="code-yellow">"927019161118"</code>
              <br />
            </p>
          </p>
          <h5 className="text-white  p-3">Send money failed response:</h5>
          <p className="output text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"400"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan"> "false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney Failed"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan"> 0</code>
            <br /> <code>"data"</code>
            <p className="output-two text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-yellow">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-yellow">"I22313011919"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-yellow">200.0</code>
              <br />
              <code>"utrNumber" </code>
              <span>: </span>
              <code className="code-yellow">"927019161118"</code>
            </p>
          </p>
          <h5 className="text-white p-3">Send money processing response:</h5>
          <p className="output text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"201"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney processing"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">2</code>
            <br /> <code>"data"</code>
            <p className="output-two text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-cyan">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-cyan">"I22313011920"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-cyan">200.0</code>
              <br />
              <code>"utrNumber"</code> <span>: </span>
              <code className="code-cyan">"927019161118"</code>
              <br />
            </p>
          </p>
        </Row>
      </Col>
    </>
  );
}

export default SendMoney1;
