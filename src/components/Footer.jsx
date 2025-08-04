import React from "react";
import styled from "styled-components";
import Container from "./Container";
import emailjs from "emailjs-com";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled("div")`
  background: #0d285a;
  @media (max-width: 600px) {
    padding-bottom: 20px;
  }
  .cont {
    display: flex;
    gap: 50px;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
  }
  overflow: hidden;
`;
const StyledWrapper = styled.div`
  text-align: center;
  margin-top: 50px;

  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }
   {
  }
  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #00ffe0;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;
const FormContainer = styled("div")`
  background-color: #0f172a;
  color: white;
  padding: 40px;
  border-radius: 16px;
  // width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
  span {
    display: block;
    font-size: 12px;
    color: #94a3b8;
    font-weight: 400;
    margin-bottom: 6px;
    text-transform: uppercase;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #cbd5e1;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: #1e293b;
  color: white;
  font-size: 14px;
  &::placeholder {
    color: #64748b;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #1e293b;
  color: white;
  font-size: 14px;
  height: 100px;
  resize: none;
  &::placeholder {
    color: #64748b;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 12px;
  &:hover {
    background-color: #2563eb;
  }
`;
const Hand = styled.div`
  .🤚 {
    --skin-color: #e4c560;
    --tap-speed: 0.6s;
    --tap-stagger: 0.1s;
    position: relative;
    width: 80px;
    height: 60px;
    margin-left: 80px;
  }

  .🤚:before {
    content: "";
    display: block;
    width: 180%;
    height: 75%;
    position: absolute;
    top: 70%;
    right: 20%;
    background-color: black;
    border-radius: 40px 10px;
    filter: blur(10px);
    opacity: 0.3;
  }

  .🌴 {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--skin-color);
    border-radius: 10px 40px;
  }

  .👍 {
    position: absolute;
    width: 120%;
    height: 38px;
    background-color: var(--skin-color);
    bottom: -18%;
    right: 1%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-20deg);
    border-radius: 30px 20px 20px 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-left: 2px solid rgba(0, 0, 0, 0.1);
  }

  .👍:after {
    width: 20%;
    height: 60%;
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    bottom: -8%;
    left: 5px;
    border-radius: 60% 10% 10% 30%;
    border-right: 2px solid rgba(0, 0, 0, 0.05);
  }

  .👉 {
    position: absolute;
    width: 80%;
    height: 35px;
    background-color: var(--skin-color);
    bottom: 32%;
    right: 64%;
    transform-origin: 100% 20px;
    animation-duration: calc(var(--tap-speed) * 2);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform: rotate(10deg);
  }

  .👉:before {
    content: "";
    position: absolute;
    width: 140%;
    height: 30px;
    background-color: var(--skin-color);
    bottom: 8%;
    right: 65%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-60deg);
    border-radius: 20px;
  }

  .👉:nth-child(1) {
    animation-delay: 0;
    filter: brightness(70%);
    animation-name: tap-upper-1;
  }

  .👉:nth-child(2) {
    animation-delay: var(--tap-stagger);
    filter: brightness(80%);
    animation-name: tap-upper-2;
  }

  .👉:nth-child(3) {
    animation-delay: calc(var(--tap-stagger) * 2);
    filter: brightness(90%);
    animation-name: tap-upper-3;
  }

  .👉:nth-child(4) {
    animation-delay: calc(var(--tap-stagger) * 3);
    filter: brightness(100%);
    animation-name: tap-upper-4;
  }

  @keyframes tap-upper-1 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.4);
    }

    40% {
      transform: rotate(50deg) scale(0.4);
    }
  }

  @keyframes tap-upper-2 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.6);
    }

    40% {
      transform: rotate(50deg) scale(0.6);
    }
  }

  @keyframes tap-upper-3 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.8);
    }

    40% {
      transform: rotate(50deg) scale(0.8);
    }
  }

  @keyframes tap-upper-4 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(1);
    }

    40% {
      transform: rotate(50deg) scale(1);
    }
  }
`;
const SocialLinks = styled("div")`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  @media (max-width: 600px) {
    margin-top: 63px;
  }
  a {
    color: #b0b0b0;
    font-size: 1.8rem;
    transition: transform 0.3s ease;

    &:hover {
      color: #00ffe0;
      transform: scale(1.2);
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Get_In_Touch&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Get_In_Touch&nbsp;
          </span>
        </button>
      </StyledWrapper>
      <Container className="cont">
        <FormContainer>
          <Title>
            <span>Get in touch</span>
            Contact.
          </Title>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_rxd0qa8",
                  "template_lw461g5",
                  e.target,
                  "LL8cJsZOkmjJg5J79"
                )
                .then(() => {
                  alert("Message sent!");
                  e.target.reset();
                })
                .catch((error) => {
                  console.error("Error sending message:", error);
                });
            }}
          >
            <Label>Your Name</Label>
            <Input
              type="text"
              name="user_name"
              placeholder="What's your name?"
            />

            <Label>Your Email</Label>
            <Input
              type="email"
              name="user_email"
              placeholder="What's your email?"
            />

            <Label>Your Message</Label>
            <TextArea name="message" placeholder="What do you want to say?" />

            <Button type="submit">Send</Button>
          </form>
        </FormContainer>
        <Hand>
          <div className="🤚">
            <div className="👉" />
            <div className="👉" />
            <div className="👉" />
            <div className="👉" />
            <div className="🌴" />
            <div className="👍" />
          </div>
        </Hand>
      </Container>
      <SocialLinks>
        <a
          href="https://github.com/refaey3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mostafa-elrefaey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/qr/EXIKANDNERRJN1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
}
