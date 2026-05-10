import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.9); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 224, 0.25);
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  color: #00ffe0;
  font-size: 18px;
  cursor: pointer;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 255, 224, 0.12);
    border-color: rgba(0, 255, 224, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 255, 224, 0.15);
  }

  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 15px;
  }
`;

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Btn
      $show={show}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </Btn>
  );
}
