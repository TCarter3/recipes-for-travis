import React from "react";
import { Form, Container, TextArea, } from "semantic-ui-react";
import NavBar from "./NavBar";

const ContactForm = () => {
  return (
    <>
    <NavBar />
    <Container>

    <Form>
      <Form.Input
      label="Name"
      placeholder="Name"
      />
      <Form.Input
      label="Email"
      placeholder="Email"
      />
      <Form.Input
      control={TextArea}
      label="Message"
      placeholder="Message"
      />
    </Form>
    </Container>
    </>
  );
};

export default ContactForm;