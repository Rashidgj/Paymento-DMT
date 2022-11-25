import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import "../../../../asset/css/code.css";
import RemitterinfoCode from "./subcomponents/RemitterinfoCode";
function RemitterInfoPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 maxheight500">
        <Row id="remitterinfo">
          <h2 className="mb-0 mt-0 heading2">Remitter Information</h2>
          <p className="px-4  mb-0 backroundP-tag">
            Using this API You can use this API to check if the customer has
            been created on our platform. If not, you must create the customer
            before using Eko related services (like Money Transfer) for him/her.
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
                  <td>505</td>
                  <td>Remitter Doesn’t exist</td>
                </tr>
              </tbody>
            </Table>
          </span>
          
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-6 zindex scrollbar maxheight500 bg-dark">
        <RemitterinfoCode />
      </Col>
    </>
  );
}

export default RemitterInfoPage;
