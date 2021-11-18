import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle.js";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white",
                   textAlign: "center",
                   marginTop: "-50px",
                   textSize: "32px" }}>
        Ampd : a global parking company, which helps electronic car drivers find parking spaces.
      </h1>
      <Container>
        <Row>
        <Column>
            <Heading>Solutions</Heading>
            <FooterLink href="#">SignUp</FooterLink>
            <FooterLink href="#">Find Parking</FooterLink>
            <FooterLink href="#">List Your Space</FooterLink>
        </Column>
        <Column>
              <Heading>Support</Heading>
              <FooterLink href="#">Help Centre</FooterLink>
              <FooterLink href="#">Safety Information</FooterLink>
              <FooterLink href="#">Our COVID-19 Response</FooterLink>
            </Column>

            <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                      Facebook
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                      Instagram
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                      Twitter
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>
                      Youtube
                    </span>
                  </i>
                </FooterLink>
              </Column>
            </Row>

            <p style={{ color: "white", textSize: "15px"}}> ©️ Made by Tracey, Natalia, Angie & Kundai, 2021 </p>
          </Container>
        </Box>
      );
    };

    export default Footer;
