import React from "react";
import styled from "styled-components";
import Container from "./Container";
import FormalSasa from "../assets/FormalSasa.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";

const HomePage = styled("div")`
  background: linear-gradient(135deg, #121212 0%, #1e3a8a 100%);
  min-height: 100vh;
  width: 100%;
  // position: relative;
  // z-index: 1;
  // overflow: hidden;
`;
const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 100px;
  padding: 40px 20px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 20px 10px;
    text-align: center;
  }

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 5px;
  }
`;

const Info = styled("div")`
  text-align: center;
  width: 100%;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.2s;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 125%;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 40px;
    }

    @media (max-width: 600px) {
      font-size: 28px;
    }
  }

  h2 {
    font-size: 32px;
    color: #00ffe0;
    margin-bottom: 10px;
    height: 40px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    color: #d1d5db;
    line-height: 1.6;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      font-size: 16px;
      max-width: 600px;
    }

    @media (max-width: 600px) {
      font-size: 20px;
      max-width: 400px;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translatex(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const CvAndLinks = styled("div")`
  display: flex;
  justify-content: center;
`;
const SocialLinks = styled("div")`
  margin: 20px 0;
  a {
    color: #b0b0b0;
    margin: 0 15px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      color: #00ffe0;
      transform: scale(1.2);
    }
  }
`;

const Imge = styled("img")`
  opacity: 0;

  animation: fadeIna 1s ease-in-out forwards;
  animation-delay: 0.4s;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 30px rgba(0, 255, 224, 0.4), 0 0 10px rgba(0, 255, 224, 0.2);
  transition: transform 0.3s ease;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 600px) {
    width: 290px;
    height: 290px;
  }
  @keyframes fadeIna {
    from {
      opacity: 0;
      transform: translatex(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const CVLink = styled.div`
  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;
    margin-top: 14px;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
    color: #ddd;
    text-decoration: none;
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #1ca25dff;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
  }

  .button:hover {
    box-shadow: 1px 1px 200px #188327ff;
    color: #fff;
    border: none;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }
`;
export default function Home() {
  return (
    <HomePage id="home">
      <Container>

        <Navbar />
        <Cont>
          <Info>
            <h1>Hi, I'm Mostafa Elrefaey</h1>
            <h2>
              <Typewriter
                words={["Frontend Developer", "Software Engineer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p>
              A Front-End Developer passionate about creating interactive and
              user-friendly web interfaces. Let's build something amazing!
            </p>
            <CvAndLinks>
              <SocialLinks>
                <a
                  href="https://github.com/refaey3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mostafa-elrefaey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </SocialLinks>

              <CVLink>
                <button className="button type1">
                  <a
                    href="/MostafaElrefaey_CV.docx"
                    download
                    className="btn-txt"
                  >
                    Download CV
                  </a>
                </button>
              </CVLink>
            </CvAndLinks>
          </Info>
          <Imge src={FormalSasa} loading="lazy"></Imge>
        </Cont>
      </Container>
    </HomePage>
  );
}
