import React from "react";
import { Col, Row, Table } from "react-bootstrap";

function BeneficiaryDeletePage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight500">
        <Row id="beneficiarydelete">
          <h2 className="mb-0 mt-0 heading2">Delete Beneficiary</h2>
          <p className="px-4 mb-0 backroundP-tag">
            Use this API to remove an existing beneficiary from a list of added
            beneficiaries.
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
                  <td>0</td>
                  <td>Beneficiary not found</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex scrollbar bg-dark maxheight500"
      >
        <Row className="codebg">
          <h3 className="text-white codehed p-3">URL:</h3>
          <code className="text-white pt-5 pb-5">
            http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary
          </code>
          <h3 className="text-white p-3">Method:</h3>
          <p className="text-white p-3">POST</p>

          <h3 className="text-white p-3">Header:</h3>
          <p className="output text-white ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow">"abs1nxxxxx"</code>
            <br />
          </p>

          <h3 className="text-white p-3">Request:</h3>
          <p className="output  text-white ">
            <br /> <code>"remitterPhone"</code>
            <span>:</span>
            <code className="code-cyan"> "7902626443"</code>
            <br />
          </p>

          <h3 className="text-white link-section p-3">Response:</h3>
          <p className="output text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"200"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message" </code>
            <span>: </span> <code className="">"Beneficiary Deleted"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">1</code>
            <br />
          </p>
        </Row>
      </Col>
    </>
  );
}

export default BeneficiaryDeletePage;
