import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import "./form.css";

const form = () => {
  return (
    <div className="form__container">
      <FormControl
        mt={"2rem"}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <FormLabel></FormLabel>
        <Input
          h="35px"
          w="590px"
          placeholder="Name"
          borderRadius={5}
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
          w="590px"
          placeholder="E-Mail"
          borderRadius={5}
          fontSize={18}
          type="email"
          border="1px solid #fff"
          pl={"1rem"}
          mt={15}
        />

        <FormLabel></FormLabel>
        <Input
          h="215px"
          w="590px"
          placeholder="Message"
          borderRadius={5}
          fontSize={18}
          border="1px solid #fff"
          pl={"1rem"}
          pb={"11rem"}
          mt={15}
          type="message"
        />
      </FormControl>
      <Button className="form__button">Submit</Button>
    </div>
  );
};

export default form;
