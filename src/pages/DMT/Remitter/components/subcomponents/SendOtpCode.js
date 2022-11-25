import React from "react";
import { Row } from "react-bootstrap";

function SendOtpCode() {
  return (
    <>
      <Row className="codebg">
        <h3 className="text-white codehead p-3">URL:</h3>
        <code className="text-white pt-5 pb-5">
          http://194.195.113.218:8090/paymento/remitter-reg/send-otp
        </code>
        <h3 className="text-white">Method:</h3>
        <p className=" text-white p-3">POST</p>

        <h3 className="text-white  p-3">Header:</h3>
        <p className="output  text-white ">
          <br /> <code>"apiKey"</code>
          <span>:</span>
          <code className="code-yellow">"abs1nxxxxx"</code>
          <br />
        </p>

        <h3 className="text-white  p-3">Request:</h3>
        <p className="output  text-white ">
          <br /> <code>"remitterPhone"</code>
          <span>:</span>
          <code className="code-cyan">"7902900295"</code>
          <br />
          <code>"remitterName"</code>
          <span>:</span>
          <code className="code-yellow">"anu"</code>
          <br />
        </p>

        <h3 className="text-white  p-3">Response:</h3>
        <h5 className="text-white  p-3">SUCCESS </h5>
        <p className="output  text-white ">
          <br /> <code>"status" </code>
          <span>: </span> <code className="code-cyan">"201"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"true"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code>"OTP send successfully"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">"0"</code>
          <br /> <code>"data"</code>
          <p className="output-two  text-white">
            <br />
            <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">15</code>
            <br />
            <code>"otpRefferenceId"</code> <span>: </span>
            <code className="code-yellow">"2NEBGNVgCJ92agZg"</code>
            <br />
            <code>"mobile"</code> <span>: </span>
            <code className="code-cyan">"7902666443"</code>
            <br />
            <code>"name"</code> <span>: </span>
            <code className="code-yellow">"Anju"</code>
            <br />
            <code>"userId"</code> <span>: </span>
            <code className="code-cyan">3</code>
            <br />
            <code>"remitterType"</code> <span>: </span>
            <code className="code-cyan">3</code>
            <br />
          </p>
        </p>

        <h5 className="text-white  p-3 ">UNKNOWN RESPONSE </h5>
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"404"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"false"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">" "</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-yellow">" "</code>
          <br />
        </p>
      </Row>
    </>
  );
}

export default SendOtpCode;
