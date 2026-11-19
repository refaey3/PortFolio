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
  margin: 0 auto 40px auto;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &:last-child {
    margin-bottom: 0;
  }
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
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 40px rgba(0, 255, 224, 0.1),
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

const BulletList = styled.ul`
  margin: 0 0 20px;
  padding-left: 20px;
  color: #cbd5e1;
  font-size: 14.5px;
  line-height: 1.7;

  li {
    margin-bottom: 8px;
    position: relative;

    &::marker {
      color: #00ffe0;
    }
  }
`;

const TypeBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 6px;
  background: ${({ $type }) =>
    $type === "work"
      ? "rgba(0, 255, 224, 0.15)"
      : $type === "training"
        ? "rgba(14, 165, 233, 0.15)"
        : "rgba(168, 85, 247, 0.15)"};
  color: ${({ $type }) =>
    $type === "work"
      ? "#00ffe0"
      : $type === "training"
        ? "#38bdf8"
        : "#c084fc"};
  border: 1px solid
    ${({ $type }) =>
      $type === "work"
        ? "rgba(0, 255, 224, 0.3)"
        : $type === "training"
          ? "rgba(14, 165, 233, 0.3)"
          : "rgba(168, 85, 247, 0.3)"};
`;

const CompanyLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: "baridx",
      type: "work",
      typeLabel: "Full-Time Work Experience",
      logo: "BX",
      role: "Front-End Developer",
      company: "Baridx — Last-Mile Delivery & Logistics",
      period: "Nov 2025 — Jul 2026",
      description:
        "Developed and maintained features for an enterprise logistics platform using Vue 3 and Nuxt 4, working across the full front-end stack in a production environment.",
      bullets: [
        "Worked closely with backend APIs and databases across core business modules — OMS, shipments, invoices, finance, vendors, freight, and customer management — including debugging backend/data issues affecting the UI.",
        "Built and maintained shared UI components with Naive UI inside a Turborepo monorepo managed with pnpm, and managed application state with Pinia, ensuring consistency and reusability across multiple applications.",
        "Monitored and resolved production issues using Sentry, improving application stability and reliability.",
        "Wrote automated end-to-end tests with Cypress to catch regressions and support safe, frequent releases.",
      ],
      techStack: [
        "Vue 3",
        "Nuxt 4",
        "Pinia",
        "Naive UI",
        "Turborepo",
        "pnpm",
        "TypeScript",
        "REST APIs",
        "Cypress",
        "Sentry",
        "Git",
      ],
      links: [
        { label: "baridx.com", url: "https://baridx.com/", type: "site" },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/company/baridx/",
          type: "linkedin",
        },
      ],
    },

    {
      id: "education",
      type: "education",
      typeLabel: "Education",
      logo: "TU",
      role: "Bachelor's Degree in Computer Science",
      company: "Tanta University",
      period: "Sep 2022 — Jun 2026",
      description:
        "Studied core computer science concepts with a focus on problem-solving, computational thinking, and software development principles.",
      bullets: [
        "Studied Data Structures, Algorithms, Object-Oriented Programming, and Software Engineering.",
      ],
      techStack: [
        "Computer Science",
        "Data Structures",
        "Algorithms",
        "OOP",
        "Software Engineering",
      ],
      links: [],
    },
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

      <Container ref={ref}>
        {experiences.map((exp) => (
          <TimelineItem key={exp.id} $visible={visible}>
            <TimelineDot />
            <Card>
              <CardHeader>
                <CompanyLogo>{exp.logo}</CompanyLogo>
                <HeaderInfo>
                  <TypeBadge $type={exp.type}>{exp.typeLabel}</TypeBadge>
                  <Role>{exp.role}</Role>
                  <CompanyName>{exp.company}</CompanyName>
                  <br />
                  <Period>{exp.period}</Period>
                </HeaderInfo>
              </CardHeader>

              <Description>{exp.description}</Description>

              {exp.bullets && exp.bullets.length > 0 && (
                <BulletList>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </BulletList>
              )}

              <TechBadges>
                {exp.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </TechBadges>

              {exp.links && exp.links.length > 0 && (
                <CompanyLinks>
                  {exp.links.map((link) => (
                    <CompanyLink
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === "linkedin" ? (
                        <FaLinkedin />
                      ) : (
                        <FaExternalLinkAlt />
                      )}
                      {link.label}
                    </CompanyLink>
                  ))}
                </CompanyLinks>
              )}
            </Card>
          </TimelineItem>
        ))}
      </Container>
    </Section>
  );
}
