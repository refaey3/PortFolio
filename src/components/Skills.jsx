import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SkillsContainer = styled.div`
  padding: 50px;
  background-color: #0f172a;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
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
  return (
    <SkillsContainer id="skills">
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Skills&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Skills&nbsp;
          </span>
        </button>
      </StyledWrapper>{" "}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/bootstrap-logo.webp" alt="Bootstrap" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/css-logo.webp" alt="CSS" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/git-logo.webp" alt="Git" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/html-logo.webp" alt="HTML" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/js-logo.webp" alt="JavaScript" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <Img src="/react-logo.webp" alt="React" />
          </ImgWrapper>
        </SwiperSlide>
      </Swiper>
    </SkillsContainer>
  );
}
