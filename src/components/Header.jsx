import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import LocationImage from "../assets/footerLocation.svg";
import PhoneImage from "../assets/footerNumber.svg";
import Bac from "../assets/bac.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    {
      link: "Главная",
      path: "home",
    },
    {
      link: "Каталог",
      path: "katalog",
    },
    {
      link: "О нас",
      path: "about",
    },
    {
      link: "Контакты",
      path: "kontakt",
    },
  ];
  return (
    <div id="home">
      <HeaderStyled isSticky={isSticky}>
        <HeaderLogo src={Logo} />
        <MobileMenuToggle onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </MobileMenuToggle>
        <NavigationStyled isOpen={isMenuOpen} id="home">
          {navItems.map(({ link, path }) => (
            <NavItem
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
            >
              {link}
            </NavItem>
          ))}
        </NavigationStyled>
        <MobileMenu isOpen={isMenuOpen}>
          {navItems.map(({ link, path }) => (
            <NavItem
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
            >
              {link}
            </NavItem>
          ))}
        </MobileMenu>
        <LocationContactContainer isOpen={isMenuOpen}>
          <LocationContainer>
            <LocationImageStyled src={LocationImage} alt="Location" />
            <LocationAddress>
              <b>ул. Турусбекова 124 </b>
              <span>Кыргызстан, г. Бишкек</span>
            </LocationAddress>
          </LocationContainer>
          <ContactContainer>
            <PhoneImageStyled src={PhoneImage} alt="Phone" />
            <PhoneNumber>
              <b>+996 (509) 570 063</b>
            </PhoneNumber>
          </ContactContainer>
        </LocationContactContainer>
      </HeaderStyled>
      <HeaderBacImage images={Bac}>
        <HeaderContent>
          <Title>ШВЕЙНОЕ ПРОИЗВОДСТВО ПОЛНОГО ЦИКЛА В БИШКЕКЕ</Title>
          <Description>
            Наша фабрика «ТапТаза» - всегда рада выполнить ваши заказы в пошиве
            оптовых изделий.
          </Description>
        </HeaderContent>
      </HeaderBacImage>
    </div>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  height: 87.03px;
  background-color: ${({ isSticky }) =>
    isSticky ? "rgba(239, 239, 111, 1)" : "rgba(239, 239, 111, 1)"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border-bottom: 3px solid black; */
  position: fixed;
  z-index: 1000;
  top: 0;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px;
    height: ${({ isSticky }) => (isSticky ? "auto" : "87.03px")};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderLogo = styled.img`
  width: 76px;
  height: 76px;
`;

const NavItem = styled(Link)`
  cursor: pointer;
  color: rgba(46, 46, 46, 1);
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    margin-left: 4px;
  }
`;

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;
    padding: 20px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease;
  }

  > ${NavItem} {
    cursor: pointer;
    color: rgba(46, 46, 46, 1);
    font-weight: 700;
    font-size: 20px;
    &:hover {
      color: #fff;
    }
  }
`;

const MobileMenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 999;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 76px;
    left: 0;
    width: 100%;
    background-color: rgba(239, 239, 111, 1);
    padding: 20px;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

const LocationContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(46, 46, 46, 1);
  /* width: 270px; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: normal;
    position: ${({ isOpen }) => (isOpen ? "absolute" : "relative")};
    top: ${({ isOpen }) => (isOpen ? "145px" : "0")};
    left: 0;
    width: 100%;
    padding: 20px;
    transition: top 0.3s ease;
    background-color: #1a1a1a;
    display: none;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
`;

const LocationImageStyled = styled.img`
  margin-right: 10px;
`;

const LocationAddress = styled.div`
  > b {
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  > span {
    font-weight: 500;
    font-size: 16px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PhoneImageStyled = styled.img`
  margin-right: 10px;
`;

const PhoneNumber = styled.div`
  > b {
    font-weight: 700;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeaderBacImage = styled.div`
  width: 100%;
  height: 710px;
  background-image: url(${(props) => props.images});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 761px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  /* &:hover {
    color: rgba(239, 239, 111, 1);
  } */
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: rgba(239, 239, 111, 1);
  /* &:hover {
    color: white;
  } */
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
