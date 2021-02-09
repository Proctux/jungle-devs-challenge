import React from "react";

import imageSection from "../../assets/ImageSection3.svg";

import { Container, PaymentContent, PaymentImage } from "./style";

const PaymentsInformation = () => (
  <Container>
    <PaymentImage src={imageSection} />
    <PaymentContent>
      <h2>Shared payments made simple</h2>

      <p>
        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
        that bill week in, week out and you might encounter more than a few
        snares. But not with Hapu. Simply set your rates and our automated
        payment system takes care of the rest. You need enver talk money or who
        owes what.
      </p>

      <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
    </PaymentContent>
  </Container>
);

export default PaymentsInformation;
