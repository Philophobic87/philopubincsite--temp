import React from "react";
import { Logo } from "../Navbar/NavbarElements";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import { animateScroll as scroll } from "react-scroll";

const Signin = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/" onClick={toggleHome}>
            <Logo
              className="PhiloLogo"
              src="/images/PhiloPubLogoWhite.png"
              alt="Logo"
            ></Logo>
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Join our Mailing List!</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="fullName" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
