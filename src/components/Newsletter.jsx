/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import sletter from "../assets/sletter.svg";

const Newsletter = () => {
  return (
    <NewsletterContainer images={sletter} id="kontakt">
      <NewsletterH1Styled>Еще остались вопросы?</NewsletterH1Styled>
      <NumberStyled>+996 (509) 570 063</NumberStyled>
      <NewSletterTextStyled>
        Наши менеджеры всегда на связи с Заказчиками во всех этапах
        сотрудничества с нами.
      </NewSletterTextStyled>
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  background-image: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 602px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px;
  }
`;

const NewsletterH1Styled = styled.h1`
  height: 61px;
  font-family: Cormorant Garamond;
  font-size: 50px;
  font-weight: 700;
  line-height: 60.55px;
  text-align: right;
  color: rgba(0, 51, 102, 1);
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    height: 10px;
  }
`;

const NumberStyled = styled.div`
  height: 109px;
  font-family: Cormorant Garamond;
  font-size: 90px;
  font-weight: 700;
  line-height: 108.99px;
  text-align: right;
  color: rgba(0, 51, 102, 1);
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    height: 70px;
  }
`;

const NewSletterTextStyled = styled.p`
  width: 618px;
  height: 72px;
  font-family: Cormorant Garamond;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
  text-align: right;
  color: rgba(0, 51, 102, 1);
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
