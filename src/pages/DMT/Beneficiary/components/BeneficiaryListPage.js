import React from "react";
import { Col, Row, Table } from "react-bootstrap";

function BeneficiaryListPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight500">
        <Row id="beneficiarylist">
          <h2 className="mb-0 mt-0 heading2">List Beneficiary</h2>
          <p className="px-4  mb-0 backroundP-tag">
            Get list of recipients for a Remitter
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
                  <td>Not found</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex scrollbar maxheight500 bg-dark"
      >
        <Row className="codebg">
          <h3 className="text-white codehead p-3">URL:</h3>
          <code className="text-white pt-5 pb-5 link-heading">
            http://194.195.113.218:8090/paymento/remitter-reg/getbeneficiary
          </code>
          <h3 className="text-white">Method:</h3>
          <p className="text-white p-3">POST</p>

          <h3 className="text-white  p-3">Header:</h3>
          <p className="output  text-white ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow">abs1nxxxxx"</code>"<br />
          </p>

          <h3 className="text-white  p-3">Request:</h3>
          <p className="output  text-white ">
            <br />
            <code>"remitterid"</code> <span>: </span>
            <code className="code-yellow">""</code> <br />
          </p>

          <h3 className="text-white  p-3">Response:</h3>
          <p className="output  text-white ">
            <br /> <code>"status" </code>
            <span>: </span> <code className="code-cyan">"200"</code>
            <br /> <code>"success" </code>
            <span>: </span> <code className="code-cyan">"true"</code>
            <br /> <code>"message" </code>
            <span>: </span>
            <code className="code-yellow">"Loaded Successfully"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">1</code>
            <br /> <code>"data "</code>
            <span>:</span>
            <p className="output-array ">
              <p className="output-two  text-white">
                <br />
                <code>"beneficiaryId"</code> <span>: </span>
                <code className="code-cyan">6</code>
                <br />
                <code>"beneficiaryName"</code> <span>: </span>
                <code className="code-yellow"> "sample"</code>
                <br />
                <code>"beneficiaryBankName"</code> <span>: </span>
                <code className="code-yellow"> "Axis Bank"</code>
                <br />
                <code>"remitterId"</code> <span>: </span>
                <code className="code-cyan">9</code>
                <br />
                <code>"remitterName"</code> <span>: </span>
                <code className="code-yellow"> "dilsha"</code>
                <br />
                <code>"remitterMobileNumber"</code> <span>: </span>
                <code className="code-cyan">"7902900XXX"</code>
                <br />
                <code>"beneficiaryMobileNumber"</code> <span>: </span>
                <code className="code-cyan">"7902900XXX"</code>
                <br />
                <code>"accountNumber"</code> <span>: </span>
                <code className="code-cyan">"123456XXXXXXX"</code>
                <br />
                <code>"ifscCode"</code> <span>: </span>
                <code className="code-yellow"> "UTIB0002916"</code>
                <br />
                <code>"accountHolderName"</code> <span>: </span>
                <code className="code-yellow"> "Vishnu"</code>
                <br />
                <code>"branchName"</code> <span>: </span>
                <code className="code-yellow"> "Mavoor Road"</code>
                <br />
              </p>
            </p>
            <p className="output text-white">
              <br />
              <code>"beneficiaryId"</code> <span>: </span>
              <code className="code-cyan">11</code>
              <br />
              <code>"beneficiaryName"</code>
              <span>:</span>
              <code className="code-yellow">"aaa"</code>
              <br />
              <code>"beneficiaryBankName"</code> <span>: </span>
              <code className="code-yellow">"Axis Bank"</code>
              <br />
              <code>"remitterId"</code> <span>: </span>
              <code className="code-cyan">9</code>
              <br />
              <code>"remitterName"</code> <span>: </span>
              <code className="code-yellow">"dilsha"</code>
              <br />
              <code>"remitterMobileNumber"</code> <span>: </span>
              <code className="code-cyan">"7902900XXX"</code>
              <br />
              <code>"beneficiaryMobileNumber"</code> <span>: </span>
              <code className="code-cyan">"7902900XXX"</code>
              <br />
              <code>"accountNumber"</code> <span>: </span>
              <code className="code-cyan">"8596321876XXX"</code>
              <br />
              <code>"ifscCode"</code> <span>: </span>
              <code className="code-yellow">"UTIB0002916"</code>
              <br />
              <code>"accountHolderName"</code> <span>: </span>
              <code className="code-yellow">"Vishnu"</code>
              <br />
              <code>"branchName"</code> <span>: </span>
              <code className="code-yellow">"Mavoor Road"</code>
              <br />
            </p>
            {/* <p className="output-array-two text-white codehead "></p> */}
          </p>
        </Row>
      </Col>
    </>
  );
}

export default BeneficiaryListPage;
