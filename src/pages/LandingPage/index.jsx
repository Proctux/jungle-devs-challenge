import React from "react";
import { FiPlay } from "react-icons/fi";

import Header from "../../components/Header";
import CaresInformation from "../../components/CaresInformation";
import ServiceInformation from "../../components/ServiceInformation";
import PaymentsInformation from "../../components/PaymentsInformation";
import ItemSeparator from "../../components/ItemSeparator";

import {
  HeaderContainer,
  Image,
  HeaderContent,
  ContentContainer,
  ContentImage,
  ImageContainer,
  VideoPlayInfo,
  Container,
} from "./style";
import Newsletter from "../../components/Newsletter";
import BillingInformation from "../../components/BillingInformation";
import NannyShareDailyInformation from "../../components/NannyShareDailyInformation";
import Footer from "../../components/Footer";

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
      <HeaderContainer>
        <Image />
        <Header />
        <HeaderContent>
          <ContentContainer>
            <h1>Easily create or join a local nanny share with Hapu</h1>

            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>

            <VideoPlayInfo>
              <div>
                <FiPlay size={24} color="white" />
              </div>

              <a href="/">See hapu in action (27 seconds)</a>
            </VideoPlayInfo>
          </ContentContainer>
          <ImageContainer>
            <ContentImage />
          </ImageContainer>
        </HeaderContent>
      </HeaderContainer>

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
