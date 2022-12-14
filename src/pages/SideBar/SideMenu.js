import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from "react-bootstrap/ListGroup";

function SideMenu(props) {
  return (
    <div className="mt-5 bg-dark">
      <Accordion defaultActiveKey="0" className="sideMenuColor" flush>
        <Accordion.Item eventKey="0">
          <a href="#remitter">
            <Accordion.Header className="menuItemHeader">
              <b>Remitter</b>
            </Accordion.Header>
          </a>
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "0px" }}>
              <ListGroup.Item onClick={props.onClick} className="activeMenu">
                <a href="#remitterinfo">Remitter Information</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#sendotp">Remitter Send-OTP</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#resendotp">Remitter Resend- OTP</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#remitterverify">Verify Remitter OTP</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#remitterbalance">Remitter Balance</a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="overflow" eventKey="1">
          <a href="#beneficiary">
            <Accordion.Header className="menuItemHeader">
              Beneficiary
            </Accordion.Header>
          </a>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#beneficiarycreate">Beneficiary Create</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#beneficiarylist">Beneficiary List</a>
              </ListGroup.Item>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#beneficiarydelete">Delete Beneficiary</a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <a href="#sendmoney">
            <Accordion.Header className="menuItemHeader">
              Send Money
            </Accordion.Header>
          </a>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="#sendmoney1">Send Money</a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className="menuItemHeader">
            Transaction Money
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <a href="# ">Transaction Money</a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideMenu;
