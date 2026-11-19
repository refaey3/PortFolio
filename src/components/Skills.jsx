import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiTurborepo,
  SiCypress,
  SiSentry,
} from "react-icons/si";

const SkillsContainer = styled.div`
  padding: 80px 20px 60px;
  background-color: #0f172a;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  gap: 12px;

  svg {
    font-size: 90px;
    transition: transform 0.3s ease;
  }

  span {
    color: #94a3b8;
    font-size: 14px;
    font-weight: 600;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 60px auto 0;

  @media (max-width: 968px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const CategoryCard = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #111827 100%);
  border: 1px solid rgba(0, 255, 224, 0.12);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 224, 0.35);
    box-shadow: 0 8px 30px rgba(0, 255, 224, 0.08);
  }

  h4 {
    color: #ffffff;
    font-size: 18px;
    margin: 0 0 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      color: #00ffe0;
    }
  }
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillPill = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 255, 224, 0.1);
    color: #00ffe0;
    border-color: rgba(0, 255, 224, 0.3);
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
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

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Vue 3",
        "Nuxt 4",
        "React 19",
        "Next.js 16",
        "Pinia",
        "Tailwind CSS 4",
        "Shadcn UI",
        "Naive UI",
        "CVA",
        "HTML5",
        "CSS3",
        "Styled Components",
        "Responsive Design",
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        "Supabase (Auth, RLS)",
        "PostgreSQL",
        "Next.js Route Handlers (REST)",
        "Firebase / Firestore",
        "JWT",
        "Zod Validation",
        "Row Level Security (RLS)",
        "Database Schema Design",
      ],
    },
    {
      title: "Tools & Engineering",
      skills: [
        "Git",
        "GitHub",
        "Turborepo (Monorepo)",
        "pnpm",
        "Cypress (E2E Testing)",
        "Sentry (Monitoring & Alerts)",
        "Vite",
        "RESTful APIs",
        "Agile / Scrum",
        "Jira",
        "Slack",
      ],
    },
  ];

  return (
    <SkillsContainer id="skills">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Skills&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Skills&nbsp;
          </span>
        </button>
      </StyledWrapper>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/vue-logo.svg" alt="Vue.js" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/nuxt-logo.svg" alt="Nuxt.js" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/react-logo.webp" alt="React" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiNextdotjs style={{ color: "#ffffff" }} />
            <span>Next.js 16</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/typescript-logo.svg" alt="TypeScript" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/pinia-logo.svg" alt="Pinia" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiTailwindcss style={{ color: "#06B6D4" }} />
            <span>Tailwind CSS 4</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiSupabase style={{ color: "#3ECF8E" }} />
            <span>Supabase</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiPostgresql style={{ color: "#4169E1" }} />
            <span>PostgreSQL</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiTurborepo style={{ color: "#EF4444" }} />
            <span>Turborepo</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiCypress style={{ color: "#17E8A4" }} />
            <span>Cypress</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <IconWrapper>
            <SiSentry style={{ color: "#9065B0" }} />
            <span>Sentry</span>
          </IconWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/js-logo.webp" alt="JavaScript" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/git-logo.webp" alt="Git" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/css-logo.webp" alt="CSS3" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/html-logo.webp" alt="HTML5" />
          </ImgWrapper>
        </SwiperSlide>
      </Swiper>

      <CategoriesGrid>
        {skillCategories.map((cat) => (
          <CategoryCard key={cat.title}>
            <h4>
              <span>⚡</span> {cat.title}
            </h4>
            <SkillPills>
              {cat.skills.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </SkillPills>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </SkillsContainer>
  );
}
