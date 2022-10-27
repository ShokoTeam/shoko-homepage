import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./form.css";

const Form = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div className="form__container">
      <FormControl
        isInvalid={isError}
        mt={"2rem"}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <FormLabel></FormLabel>
        <Input
          h="35px"
          w="320px"
          placeholder="Name"
          borderRadius={10}
          fontSize={18}
          border="1px solid #fff"
          type="name"
          pl={"1rem"}
          p={15}
          mt={23}
        />

        <FormLabel></FormLabel>
        <Input
          h="35px"
          w="320px"
          placeholder="E-Mail"
          borderRadius={10}
          fontSize={18}
          border="1px solid #fff"
          pl={"1rem"}
          mt={15}
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText color={"gray"} fontSize={12} mt={5}>
            Enter the email you'd like to receive the newsletter on
          </FormHelperText>
        ) : (
          <FormErrorMessage></FormErrorMessage>
        )}

        <FormLabel></FormLabel>
        <Input
          h="215px"
          w="320px"
          placeholder="Message"
          borderRadius={10}
          fontSize={18}
          border="1px solid #fff"
          pl={"1rem"}
          pb={"11rem"}
          mt={40}
          type="message"
        />
      </FormControl>
      <Button className="form__button">Submit</Button>
    </div>
  );
};

export default Form;
