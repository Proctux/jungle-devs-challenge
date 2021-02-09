import React from "react";

import CaresInformation from "../../components/CaresInformation";
import ServiceInformation from "../../components/ServiceInformation";
import PaymentsInformation from "../../components/PaymentsInformation";
import ItemSeparator from "../../components/ItemSeparator";
import Newsletter from "../../components/Newsletter";
import BillingInformation from "../../components/BillingInformation";
import NannyShareDailyInformation from "../../components/NannyShareDailyInformation";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

import { Container } from "./style";

const LandingPage = () => {
  const renderSeparator = () => (
    <ItemSeparator
      backgroundWidth="1440px"
      backgroundHeight="1px"
      backgroundColor="#f2f2f2"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#DFDFDF"
    />
  );

  return (
    <Container>
      <Hero />

      <CaresInformation />

      <ServiceInformation />
      {renderSeparator()}

      <Newsletter />
      {renderSeparator()}

      <PaymentsInformation />
      {renderSeparator()}

      <BillingInformation />
      {renderSeparator()}

      <NannyShareDailyInformation />

      <Footer />
    </Container>
  );
};

export default LandingPage;
