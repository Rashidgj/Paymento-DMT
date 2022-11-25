import React from "react";
import { Row } from "react-bootstrap";

function RemitterinfoCode() {
  return (
    <>
      <Row className="codebg">
        <h3 className="text-secondary codehead">URL:</h3>
        <code className="text-white pt-5 pb-5 ">
          http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
        </code>

        <h5 className="text-secondary p-3">Request:</h5>
        <p className="output  text-white">
          <br /> <code> "remitterPhone"</code>
          <span>:</span>
          <span>"7902900295"</span>
          <br />
        </p>

        <h5 className="text-secondary  p-3">Header:</h5>
        <p className="output  text-white ">
          <br /> <code>"apiKey"</code>
          <span>:</span>
          <code className="code-yellow"> "abs1nxxxxx"</code>
          <br />
        </p>

        <h5 className="text-secondary  p-3">Response:</h5>
        <h6 className="text-secondary ">If Remitter Exist : </h6>
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"200"</code>,
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"true"</code>,
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Remitter Exists"</code>,
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">"0"</code>,
          <br /> <code>"data"</code>
          <p className="output-two  text-white">
            <br />
            <code>"remitterPhone"</code> <span>: </span>
            <code className="code-cyan">"7902900295"</code>,
            <br />
            <code>"remitterName"</code> <span>: </span>
            <code className="code-yellow">"dilsha"</code>,
            <br />
            <code>"remitterAddress" </code>
            <span>: </span> <code className="code-yellow">"veluthedath"</code>
            ,
            <br />
            <code>"remitterPinCode"</code> <span>: </span>
            <code className="code-cyan">"528963"</code>,
            <br />
            <code>"remitterCity"</code> <span>: </span>
            <code className="code-yellow">"calicut"</code>,
            <br />
            <code>"remitterState"</code> <span>: </span>
            <code className="code-yellow">"kerala"</code>,
            <br />
            <code>"remitterStatus"</code> <span>: </span>
            <code className="code-yellow">"Active"</code>,
            <br />
            <code>"userId"</code> <span>: </span>
            <code className="code-cyan">"3"</code>,
            <br />
            <code>"userName"</code> <span>: </span>
            <code className="code-yellow">"qwert G"</code>,
            <br />
            <code>"totalBalance"</code> <span>: </span>
            <code className="code-cyan">"9"</code>,
            <br />
            <code>"id"</code> <span>: </span>
            <code className="code-cyan">"25000.0"</code>
            <br />
          </p>
        </p>
      </Row>
    </>
  );
}

export default RemitterinfoCode;
