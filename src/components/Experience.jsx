import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Container from "./Container";
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

/* ───── animations ───── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 224, 0.4); }
  50%      { box-shadow: 0 0 20px rgba(0, 255, 224, 0.8); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
`;

/* ───── styled ───── */
const Section = styled.div`
  background: #0f172a;
  padding: 80px 0 60px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 255, 224, 0.15) 20%,
      rgba(0, 255, 224, 0.15) 80%,
      transparent
    );
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;

  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
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

  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

/* ── timeline card wrapper ── */
const TimelineItem = styled.div`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`;

/* glowing dot on the timeline */
const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #00ffe0;
  animation: ${pulseGlow} 2s ease-in-out infinite;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0f172a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ── the card itself ── */
const Card = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #1a2540 100%);
  border: 1px solid rgba(0, 255, 224, 0.12);
  border-radius: 20px;
  padding: 36px 32px;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 255, 224, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.3);
  }

  /* decorative corner gradient */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    width: 120px;
    height: 120px;
    background: radial-gradient(
      circle at top right,
      rgba(0, 255, 224, 0.08),
      transparent 70%
    );
    border-radius: 0 20px 0 0;
    pointer-events: none;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CompanyLogo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #00ffe0 0%, #0ea5e9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -1px;
  flex-shrink: 0;
  animation: ${float} 4s ease-in-out infinite;
  box-shadow: 0 4px 20px rgba(0, 255, 224, 0.25);
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Role = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin: 0 0 4px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CompanyName = styled.div`
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90deg, #00ffe0, #0ea5e9, #00ffe0);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 4s linear infinite;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Period = styled.div`
  display: inline-block;
  background: rgba(0, 255, 224, 0.08);
  border: 1px solid rgba(0, 255, 224, 0.2);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 13px;
  color: #00ffe0;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 6px;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 20px;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Badge = styled.span`
  background: rgba(0, 255, 224, 0.06);
  border: 1px solid rgba(0, 255, 224, 0.15);
  color: #00ffe0;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 224, 0.12);
    border-color: rgba(0, 255, 224, 0.35);
    transform: translateY(-2px);
  }
`;



const CompanyLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const CompanyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 13px;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:hover {
    color: #00ffe0;
    border-color: rgba(0, 255, 224, 0.3);
    background: rgba(0, 255, 224, 0.06);
  }

  svg {
    font-size: 12px;
  }
`;

/* ────────────────────────── component ────────────────────────── */
export default function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const techStack = [
    "Vue.js",
    "Nuxt.js",
    "Pinia",
    "Naive UI",
    "Monorepo",
    "JavaScript",
    "CSS / SCSS",
    "REST APIs",
    "Git",
  ];


  return (
    <Section id="experience">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Experience&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Experience&nbsp;
          </span>
        </button>
      </StyledWrapper>

      <Container>
        <TimelineItem ref={ref} $visible={visible}>
          <TimelineDot />
          <Card>
            <CardHeader>
              <CompanyLogo>BX</CompanyLogo>
              <HeaderInfo>
                <Role>Frontend Developer</Role>
                <CompanyName>
                  BaridX — Last-Mile Delivery & Logistics
                </CompanyName>
                <br />
                <Period>Nov 2025 — Jul 2026</Period>
              </HeaderInfo>
            </CardHeader>

            <Description>
              Worked at <strong style={{ color: "#e2e8f0" }}>BaridX</strong>, a
              leading Saudi logistics company redefining last-mile delivery
              through innovation and technology. Built and maintained
              enterprise-grade logistics management platforms using the Vue.js
              ecosystem in a monorepo architecture.
            </Description>

            <TechBadges>
              {techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </TechBadges>


            <CompanyLinks>
              <CompanyLink
                href="https://baridx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> baridx.com
              </CompanyLink>
              <CompanyLink
                href="https://www.linkedin.com/company/baridx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </CompanyLink>
            </CompanyLinks>
          </Card>
        </TimelineItem>
      </Container>
    </Section>
  );
}
