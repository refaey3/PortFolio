import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiVite, SiFirebase } from "react-icons/si";
const ProjectContainer = styled("div")`
  .continer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  background: #0f172a;
  overflow: hidden;
`;
const Project = styled("div")`
  background-color: #1f2937;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  .img-wrapper {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      opacity: 1;
      transition: opacity 0.5s ease;
      z-index: 1;
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover::before {
      opacity: 0;
    }
  }
  .content {
    padding: 15px;
    // height: 550px;
    .info {
      p {
        margin-top: 10px;
        color: #777;
      }
    }
    .icons {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      svg {
        font-size: 20px;
        color: #1480deff;
      }
    }
  }

  .adv {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .adv p {
    background-color: #374151;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
    color: #e2e8f0;
  }
`;
const H2 = styled("h2")`
  font-size: 36px;
  text-align: center;
  margin: 40px 0;
  color: white;
  border-bottom: 1px solid;
  width: fit-content;
  left: 50%;
  top: 50%;
  position: relative;
  transform: translate(-50%);
`;
const Hr = styled("hr")`
  width: 90%;
  background-color: #4a5568;
  margin-top: 20px;
  border: none;
  height: 1px;
`;
const Links = styled("div")`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const LinkButton = styled("a")`
  background-color: #4a5568;
  color: #e2e8f0;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 12px;
  display: inline-block;
  &:hover {
    background-color: #718096;
  }
`;
const StyledWrapper = styled.div`
  text-align: center;
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
export default function Projects() {
  return (
    <ProjectContainer id="projects">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Featured_Projects&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Featured_Projects&nbsp;
          </span>
        </button>
      </StyledWrapper>
      <Container className="continer">
        <Project>
          <div className="img-wrapper">
            <img src="/IslamLife.jpeg" alt="Islam Life" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Islam Life</h3>
              <p>
                A comprehensive Islamic platform providing Quran, prayer times
                with Adhan, and daily Azkar.
              </p>
            </div>
            <div className="icons">
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
              <FaBootstrap style={{ color: "#7952B3" }} />
              <FaReact style={{ color: "#61DAFB" }} />
              <SiVite style={{ color: "#646CFF" }} />
            </div>
            <div className="adv">
              <p> React – Functional components</p>
              <p> useState + useEffect – Reactive UI</p>
              <p> react-router-dom – Smooth navigation</p>
              <p> Props – Reusable components</p>
              <p> styled-components – Modern styling</p>
              <p> API Integration – Quran & Prayer Times</p>
              <p> Error Handling – Reliable performance</p>
              <p> LocalStorage</p>
              <p> Polished UI – React Icons & clean layout</p>
              <p> Full Quran with multiple reciters</p>
              <p> Accurate prayer times + Adhan</p>
              <p> Morning & Evening Azkar section</p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/IslamLife"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton href="https://islam-life.vercel.app/" target="_blank">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>
        <Project>
          <div className="img-wrapper">
            <img src="/ChatApp.png" alt="Chat App" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Chat App</h3>
              <p>
                Real-time chat application with authentication and user presence
                tracking.
              </p>
            </div>
            <div className="icons">
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
              <FaReact style={{ color: "#61DAFB" }} />
              <SiVite style={{ color: "#646CFF" }} />
              <SiFirebase style={{ color: "#FFCA28" }} />
            </div>
            <div className="adv">
              <p> React – Functional components & Hooks</p>
              <p> useState + useEffect – Dynamic UI updates</p>
              <p> react-router-dom – Multi-page navigation</p>
              <p> styled-components – Clean, responsive styling</p>
              <p> Firebase Authentication – Secure login system</p>
              <p> Firestore Database – Real-time message syncing</p>
              <p> Online/Offline user status tracking</p>
              <p> Last message preview in chat list</p>
              <p> Smooth scrolling and auto-scroll to latest message</p>
              <p> Emoji picker integration</p>
              <p> Toast notifications – Instant feedback</p>
              <p> Responsive layout – Works perfectly on all devices</p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/ChatApp"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton
                href="https://chat-app-liard-two.vercel.app/"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>

        <Project>
          <div className="img-wrapper">
            <img src="/DayPlanner.jpeg" alt="Day Planner" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Day Planner</h3>
              <p>Task manager with authentication and localStorage support.</p>
            </div>
            <div className="icons">
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
              <FaBootstrap style={{ color: "#7952B3" }} />
              <FaReact style={{ color: "#61DAFB" }} />
              <SiVite style={{ color: "#646CFF" }} />
            </div>
            <div className="adv">
              <p> React – Functional components</p>
              <p> useState + useEffect – Reactive UI</p>
              <p> react-router-dom – Smooth navigation</p>
              <p> Props – Reusable components</p>
              <p> styled-components – Styling</p>
              <p> Firebase Authentication – Secure login</p>
              <p> Firebase Realtime Database – Real-time sync</p>
              <p> LocalStorage – Offline backup</p>
              <p> Polished UI – React Icons & clean layout</p>
              <p> Add tasks</p>
              <p> Track progress</p>
              <p> Task distribution by category</p>
              <p> Azkar section</p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/DayPlanner"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton
                href="https://refaey3.github.io/DayPlanner/"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>

        
        <Project>
          <div className="img-wrapper">
            <img src="CheckWord.jpeg" alt="Guess The Word" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Guess The Word</h3>
              <p>
                A fun word-guessing game built with HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="icons">
              <FaHtml5 style={{ color: "#E34F26" }} />
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
            </div>
            <div className="adv">
              <p>HTML – Structured layout</p>
              <p>CSS – Custom styling with color feedback</p>
              <p>JavaScript – Game logic and interactivity</p>
              <p>Letter is Right And In place – Green feedback</p>
              <p>Letter is Right And Not In place – Yellow feedback</p>
              <p>Letter is Wrong – Gray feedback</p>
              <p>Responsive design</p>
              <p>Interactive gameplay</p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/GuressTheWord"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton
                href="https://refaey3.github.io/GuressTheWord/"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>

        <Project>
          <div className="img-wrapper">
            <img src="/GameZone.jpeg" alt="Game Zone" />
          </div>
          <div className="content">
            <div className="info">
              <h3>GameZone</h3>
              <p>
                A clean and responsive landing page for showcasing multiple
                games in a store-like layout.
              </p>
            </div>
            <div className="icons">
              <FaHtml5 style={{ color: "#E34F26" }} />
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
            </div>
            <div className="adv">
              <p>Fully responsive layout using HTML, CSS, and JavaScript</p>
              <p>Interactive UI with sections for different types of games</p>
              <p>Tab system for category-based game filtering</p>
              <p>Each game has an image, title, and call-to-action button</p>
              <p>Designed to simulate an e-commerce game store</p>
              <p>Optimized for desktop and mobile experience</p>
              <p>
                Good base for future features like authentication or cart system
              </p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/GameZone-"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton
                href="https://refaey3.github.io/GameZone-/"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>

        <Project>
          <div className="img-wrapper">
            <img src="/WeatherApp.jpeg" alt="WeatherApp" />
          </div>
          <div className="content">
            <div className="info">
              <h3>Weather App</h3>
              <p>
                <p>
                  A minimal and responsive weather application that displays
                  real-time data for any city.
                </p>
              </p>
            </div>
            <div className="icons">
              <FaHtml5 style={{ color: "#E34F26" }} />
              <FaCss3 style={{ color: "#1572B6" }} />
              <FaJs style={{ color: "#F7DF1E" }} />
            </div>
            <div className="adv">
              <p>Built using HTML, CSS, and JavaScript (Vanilla)</p>
              <p>Real-time weather data fetched from OpenWeatherMap API</p>
              <p>Search by city name and get instant results</p>
              <p>
                Displays temperature, weather condition, humidity, and wind
                speed
              </p>
              <p>Clean UI with responsive design for desktop and mobile</p>
              <p>Error handling for invalid or empty input</p>
              <p>Ideal as a beginner-friendly API integration project</p>
            </div>
            <Hr />
            <Links>
              <LinkButton
                href="https://github.com/refaey3/Weather-App"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.55 11.13C3.19 11.13 3.55 11.59 3.68 11.86C4.36 12.54 5.21 12.35 5.61 12.14C5.74 11.53 6.05 11.13 6.39 10.92C4.98 10.71 3.53 10.13 3.53 7.61C3.53 6.84 3.74 6.22 4.11 5.71C4 5.53 3.78 4.93 4.17 3.84C4.17 3.84 4.71 3.61 5.61 4.41C6.18 4.25 6.79 4.17 7.4 4.17C8.01 4.17 8.62 4.25 9.19 4.41C10.09 3.61 10.63 3.84 10.63 3.84C11.02 4.93 10.8 5.53 10.69 5.71C11.06 6.22 11.27 6.84 11.27 7.61C11.27 10.13 9.8 10.71 8.39 10.92C8.76 11.16 9.02 11.62 9.02 12.36C9.02 13.27 9.01 14.03 9.01 14.21C9.01 14.42 9.16 15.66 9.56 15.59C12.74 14.53 15 11.54 15 8C15 3.58 11.42 0 7 0C8 0 8 0 8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
              <LinkButton
                href="https://refaey3.github.io/Weather-App/"
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#e2e8f0"
                  />
                </svg>
              </LinkButton>
            </Links>
          </div>
        </Project>
      </Container>
    </ProjectContainer>
  );
}
