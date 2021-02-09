import React from "react";
import { useLoading, Puff } from "@agney/react-loading";

import { Container } from "./style";

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="50" />,
    loaderProps: {
      style: { color: "#5E20A4" },
    },
  });

  return <Container {...containerProps}>{indicatorEl}</Container>;
};

export default Loading;
