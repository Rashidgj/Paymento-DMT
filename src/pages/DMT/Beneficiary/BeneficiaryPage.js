import React from "react";
import Beneficiary from "./components/Beneficiary";
import BeneficiaryDeletePage from "./components/BeneficiaryDeletePage";
import BeneficiaryListPage from "./components/BeneficiaryListPage";
import BeneficiaryRegister from "./components/BeneficiaryRegister";

function BeneficiaryPage() {
  return (
    <>
    <Beneficiary />
    <BeneficiaryRegister />
    <BeneficiaryListPage />
    <BeneficiaryDeletePage />
    </>
  );
}

export default BeneficiaryPage;
