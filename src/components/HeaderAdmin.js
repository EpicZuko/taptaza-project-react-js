import React from "react";
import styled from "styled-components";
import { useAuth } from "../services/AuthContext";
import Logo from "../assets/photo1720537791.jpeg";

const HeaderAdmin = () => {
  const { logout } = useAuth();
  const logoutHandler = () => {
    logout();
  };
  return (
    <div>
      <HeaderStyled>
        <HeaderLogo src={Logo} alt="..." />
        <Button onClick={logoutHandler}>выйти</Button>
      </HeaderStyled>
    </div>
  );
};

export default HeaderAdmin;

const HeaderStyled = styled.header`
  width: 100%;
  height: 87.03px;
  background-color: ${({ isSticky }) =>
    isSticky ? "rgba(239, 239, 111, 1)" : "rgba(239, 239, 111, 1)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  z-index: 1000;
  top: 0;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: ${({ isSticky }) => (isSticky ? "auto" : "87.03px")};
    /* flex-direction: column; */
    align-items: flex-start;
  }
`;
const HeaderLogo = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 50%;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "rgba(0, 51, 102, 1)" : "gray")};
  color: white;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 778px) {
    margin-top: 20px;
  }
`;
