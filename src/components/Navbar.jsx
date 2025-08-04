import React, { useState, useEffect } from "react";
import styled from "styled-components";
const NavBar = styled("nav")`
  opacity: 0;
  animation: fadeInax 1s ease-in-out forwards;
  animation-delay: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 40px;
  z-index: 1000;



  @keyframes fadeInax {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Logo = styled("h3")`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;
const Links = styled("ul")`
  display: flex;
  gap: 20px;
  position: relative;
  list-style: none;
  transition: all 0.3s ease-in-out;
  li {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #111827;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
    z-index: 10000;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-30%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  }
`;
const NavLink = styled("a")`
   color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #259dadff;
    
  }
  }
`;
const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
`;
const Left = styled("div")`
  display: flex;
`;
const Li = styled("li")`
  transition: 0.3s;
  @media (max-width: 768px) {
    &:hover {
      weight: 100%;
      padding-left: 10px;
    }
  }
`;
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavBar scrolled={scrolled}>
        <Logo>
          <NavLink href="" className="">
            Mostafa Elrefay
          </NavLink>
        </Logo>
        <Left>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
          <Links isOpen={isOpen}>
            <Li>
              <NavLink href="#home" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </NavLink>
            </Li>
            <Li>
              <NavLink href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </NavLink>
            </Li>
            <Li>
              <NavLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </Li>
          </Links>
        </Left>
      </NavBar>
    </>
  );
}
