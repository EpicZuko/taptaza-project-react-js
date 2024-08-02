import React from "react";
import styled from "styled-components";
import Bac from "../assets/bac.svg";

const Content = () => {
  return (
    <div>
      <HeaderBacImage images={Bac}>
        <HeaderContent>
          <Title>ШВЕЙНОЕ ПРОИЗВОДСТВО ПОЛНОГО ЦИКЛА В БИШКЕКЕ</Title>
          <Description>
            Наша фабрика «TapTaza» - всегда рада выполнить ваши заказы в пошиве
            оптовых изделий.
          </Description>
        </HeaderContent>
      </HeaderBacImage>
    </div>
  );
};

export default Content;

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
