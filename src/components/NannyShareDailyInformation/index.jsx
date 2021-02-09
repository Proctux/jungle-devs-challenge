import React from "react";

import imageSection from "../../assets/ImageSection5.svg";

import {
  Container,
  NannyShareDailyContent,
  NannyShareDailyImage,
} from "./style";

const NannyShareDailyInformation = () => (
  <Container>
    <NannyShareDailyImage src={imageSection} />
    <NannyShareDailyContent>
      <h2>Coming soon: Nanny Share Daily Diary!</h2>

      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </NannyShareDailyContent>
  </Container>
);

export default NannyShareDailyInformation;
