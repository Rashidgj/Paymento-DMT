import React from "react";
import RemitterInfoPage from "./components/RemitterInfoPage";
import SendOtpPage from "./components/SendOtpPage";
import ResendOtpPage from "./components/ResendOtpPage";
import VerifyOtpPage from "./components/VerifyOtpPage";
import Remitter from "./components/Remitter";
import RemitterBalancePage from "./components/RemitterBalancePage";

function RemitterPage() {
  return (
    <>
      <Remitter />
      <RemitterInfoPage />
      <SendOtpPage />
      <ResendOtpPage />
      <VerifyOtpPage />
      <RemitterBalancePage />
    </>
  );
}

export default RemitterPage;
