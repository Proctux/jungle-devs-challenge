import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";

import { Container, InputContainer } from "./style";

const Newsletter = () => {
  const { handleSubmit, control } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = useCallback(async (data) => {
    try {
      const { name, email } = data;

      await api.post("", {
        name,
        email,
      });

      setIsVisible(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <h3>Are you a parent without a nanny and looking to share?</h3>

      <p>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>

      <InputContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                placeholder="Your name"
                borderRadius="4px"
                height="48px"
                width="234px"
                borderColor="#DFDFDF"
                value={value}
                onChange={onChange}
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                placeholder="Your email"
                borderRadius="4px"
                height="48px"
                width="234px"
                borderColor="#DFDFDF"
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
          />

          <Button
            height="48px"
            width="96px"
            backgroundColor="#00C88C"
            borderRadius="4px"
            color="#fff"
            type="submit"
            marginRight="24px"
          >
            Send
          </Button>
        </form>
      </InputContainer>
      {isVisible ? (
        <p>
          Now you are registered and will receive newsletter notification on
          your mail
        </p>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Newsletter;
