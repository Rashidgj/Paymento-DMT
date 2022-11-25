import React from "react";
import { Row } from "react-bootstrap";

function VerifyOtpCode() {
  return (
    <>
      <Row className="codebg">
        <h3 className="text-white codehead p-3">URL:</h3>
        <code className="text-white pt-5 pb-5">
          http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
        </code>
        <h3 className="text-white p-3">Method:</h3>
        <p className="text-white p-3">POST</p>

        <h3 className="text-white  p-3">Header:</h3>
        <p className="output text-white ">
          <br /> <code>"apiKey"</code>
          <span>:</span>
          "abs1nxxxxx"
          <br />
        </p>

        <h3 className="text-white  p-3">Request:</h3>
        <p className="output  text-white">
          <br />
          <code>"otp"</code> <span>: </span>
          <code className="code-cyan"> "017111" </code> <br />
          <code>"otpRefferenceId"</code> <span>: </span>
          <code className="code-yellow">"URMDiiD2UQkIkkQy" </code> <br />
          <code>"mobile"</code> <span>: </span>
          <code className="code-cyan">"7902626443" </code> <br />
          <code>"remitterType"</code> <span>: </span>
          <code className="code-cyan">3 </code> <br />
        </p>

        <h3 className="text-white  p-3">Response:</h3>
        <h5 className="text-white  p-3">SUCCESS </h5>
        <p className="output text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"200"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"true"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"OTP verified"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">"0"</code>
          <br />
        </p>
      </Row>
    </>
  );
}

export default VerifyOtpCode;
