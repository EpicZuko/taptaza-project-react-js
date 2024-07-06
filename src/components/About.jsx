import React from "react";
import styled from "styled-components";
import Trouses from "../assets/Trouses.svg";
import BlousesAndShirts from "../assets/BlousesAndShirts.svg";
import Skirt from "../assets/Skirt.svg";
import Shorts from "../assets/Shorts.svg";
import Tunics from "../assets/Tunics.svg";
import Dresses from "../assets/Dresses.svg";
import SportsWear from "../assets/SportsWear.svg";
import Turtles from "../assets/Turtules.svg";
import Costume from "../assets/Costume.svg";
import ThirtTops from "../assets/TshirtTops.svg";
import Jackets from "../assets/Jackets.svg";
import SweatshirtAndHoodie from "../assets/SweatshirtAndHoodie.svg";
import aboutIcons from "../assets/about.svg";
import AboutSvg from "../assets/aboutSvg.svg";
import AboutSvg2 from "../assets/aboutSvg2.svg";
import AboutGolachka from "../assets/aboutGolachka.svg";

const About = () => {
  const about = [
    { id: 1, title: "БРЮКИ", image: Trouses },
    { id: 2, title: "БЛУЗКИ И РУБАШКИ", image: BlousesAndShirts },
    { id: 3, title: "ЮБКА", image: Skirt },
    { id: 4, title: "ШОРТЫ", image: Shorts },
    { id: 5, title: "ТУНИКИ", image: Tunics },
    { id: 6, title: "ПЛАТЬЯ", image: Dresses },
    { id: 7, title: "СПОРТИВНЫЕ ОДЕЖДЫ", image: SportsWear },
    { id: 8, title: "ВОДОЛАЗКИ", image: Turtles },
    { id: 9, title: "КОСТЬЮМ", image: Costume },
    { id: 10, title: "ФУТБОЛКА И ТОПЫ", image: ThirtTops },
    { id: 11, title: "ПИДЖАКИ", image: Jackets },
    { id: 12, title: "СВИДШОТ И ХУДИ", image: SweatshirtAndHoodie },
  ];

  return (
    <>
      <SectionStyled id="katalog">
        <TitleWrapper>
          <Title>Что мы шьём?</Title>
        </TitleWrapper>
        <CardContainer>
          {about.map((elem) => (
            <Card key={elem.id}>
              <img src={elem.image} alt={elem.title} />
              <CardTitle>
                <TitleText>{elem.title}</TitleText>
              </CardTitle>
            </Card>
          ))}
        </CardContainer>
      </SectionStyled>
      <ContainerStyled images={aboutIcons} id="about">
        <div>
          <div>
            <AboutStyledText>О нас</AboutStyledText>
            <AboutContainer>
              <ImageTextContainer>
                <ImagesAboutStyled src={AboutSvg} alt="..." />
                <ImagesStyledAbout src={AboutSvg2} alt="" />
              </ImageTextContainer>
              <TextContainer>
                <TextStyled>
                  Наша фабрика «ТапТаза» - всегда рада выполнить ваши заказы в
                  пошиве оптовых изделий.
                </TextStyled>
                <TextStyled2>
                  В нашей компании работает более 100 человек: квалифицированные
                  швеи, коммуникабельные менеджеры, специалисты своего дела!
                </TextStyled2>
                <TextStyled3>
                  Качество наших изделий проходит не одну проверку.
                </TextStyled3>
              </TextContainer>
            </AboutContainer>
          </div>
        </div>
        <ContainerQualityStyled>
          <div>
            <WhyUsStyled>Почему мы?</WhyUsStyled>
          </div>
          <ContainerTextWhyUsStyled>
            <TextStyledWhyUsStyled>
              Наша команда отвечает за поставку качественной небракованной ткани
              для изготовления вашей продукции (при возникновении проблем мы
              решаем их с поставщиками тканей без вашего участия);
            </TextStyledWhyUsStyled>
          </ContainerTextWhyUsStyled>
          <RegistrationStyled>
            <div>
              <RegistrationContainerStyled>
                <div>
                  <img src={AboutGolachka} alt="" />
                </div>
                <div>
                  <RegistrationH1Styled>
                    Зарегистрированное ООО
                  </RegistrationH1Styled>
                  <RegistrationTextStyled>
                    Мы работаем по договору. Можем отправлять официально
                    продукцию, предоставляя всю нужную документацию.
                  </RegistrationTextStyled>
                </div>
              </RegistrationContainerStyled>
              <RegistrationContainerStyled>
                <div>
                  <img src={AboutGolachka} alt="" />
                </div>
                <div>
                  <RegistrationH1Styled>
                    Отвечаем за качество
                  </RegistrationH1Styled>
                  <RegistrationTextStyled>
                    Мы стараемся работать на качество, выпускаемой продукции.
                    Каждая продукция проходит двойную проверку на качество.x
                  </RegistrationTextStyled>
                </div>
              </RegistrationContainerStyled>
            </div>
            <div>
              <RegistrationContainerStyled>
                <div>
                  <img src={AboutGolachka} alt="" />
                </div>
                <div>
                  <RegistrationH1Styled>
                    Чёткие сроки производства
                  </RegistrationH1Styled>
                  <RegistrationTextStyled>
                    Мы следим за потоками производства и выполняем заказы в
                    оговоренные сроки.
                  </RegistrationTextStyled>
                </div>
              </RegistrationContainerStyled>
              <RegistrationContainerStyled>
                <div>
                  <img src={AboutGolachka} alt="" />
                </div>
                <div>
                  <RegistrationH1Styled>
                    Доступные цены на ткани
                  </RegistrationH1Styled>
                  <RegistrationTextStyled>
                    Большой ассортимент тканей и фурнитур по доступным ценам
                    позволяет выполнить любое пожелание Заказчика.
                  </RegistrationTextStyled>
                </div>
              </RegistrationContainerStyled>
            </div>
          </RegistrationStyled>
        </ContainerQualityStyled>
      </ContainerStyled>
    </>
  );
};

export default About;

const ContainerStyled = styled.div`
  background-image: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const SectionStyled = styled.section`
  background: rgba(244, 245, 247, 1);
  padding: 20px;
  cursor: pointer;
  text-align: center;
  padding-bottom: 100px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 60.55px;
  color: rgba(51, 51, 51, 1);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 300px;
  border-radius: 20px;
  height: 390px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: #fff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const CardTitle = styled.div`
  width: 100%;
  height: 82px;
  border-radius: 0px 0px 20px 20px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -85.2px;
`;

const TitleText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

// const ContainerAboutStyled = styled.div`
//   background-image: url(${(props) => props.images});
//   background-size: cover;
//   background-position: center;
//   padding: 20px;
//   border-radius: 20px;
// `;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 220px;
  position: relative;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutStyledText = styled.h1`
  height: 61px;
  gap: 0px;
  font-family: "Cormorant Garamond", serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 60.55px;
  text-align: center;
`;

const ImageTextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img:first-child {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    img:first-child {
      width: 100%;
    }
  }
`;
const ImagesAboutStyled = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  border: 3px solid rgba(231, 113, 125, 1);
  padding: 23px;
  &:hover {
    transform: scale(0.95);
  }
`;

const ImagesStyledAbout = styled.img`
  width: 265px;
  height: 306.93px;
  position: absolute;
  left: 320px;
  top: 260px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }

  @media (max-width: 1024px) {
    left: 240px;
    top: 220px;
  }

  @media (max-width: 768px) {
    left: 200px;
    top: 300px;
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    left: 110px;
    top: 230px;
    width: 240px;
    height: 240px;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextStyled = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.33px;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 39px;
`;

const TextStyled2 = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 35px;
`;

const TextStyled3 = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
  color: rgba(231, 113, 125, 1);
`;
const WhyUsStyled = styled.h1`
  height: 61px;
  gap: 0px;
  opacity: 0px;
  font-family: Cormorant Garamond;
  font-size: 50px;
  font-weight: 700;
  line-height: 60.55px;
  text-align: center;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 24px;
  }
  @media (max-width: 375px) {
    margin-bottom: 50px;
    font-size: 24px;
  }
`;
const ContainerTextWhyUsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 375px) {
    margin-bottom: 60px;
  }
`;
const TextStyledWhyUsStyled = styled.p`
  width: 979px;
  height: 108px;
  gap: 0px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
  text-align: center;
  color: rgba(231, 113, 125, 1);
  margin: 0;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    /* margin: 0px; */
    width: 80%;
    font-family: "Cormorant Garamond", serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 36.33px;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-family: Cormorant Garamond;
    font-size: 18px;
    font-weight: 700;
    line-height: 36.33px;
  }
`;
const RegistrationContainerStyled = styled.div`
  display: flex;
`;
const RegistrationH1Styled = styled.h1`
  width: 342px;
  height: 36px;
  gap: 0px;
  opacity: 0px;
  font-family: Cormorant Garamond;
  font-size: 30px;
  font-weight: 700;
  line-height: 36.33px;
  /* text-align: center; */
  @media (max-width: 768px) {
    font-family: Cormorant Garamond;
    font-size: 18px;
    font-weight: 700;
    line-height: 36.33px;
  }
  @media (max-width: 375px) {
    font-family: Cormorant Garamond;
    font-size: 18px;
    font-weight: 700;
    line-height: 36.33px;
  }
`;
const RegistrationTextStyled = styled.p`
  width: 427px;
  height: 90px;
  gap: 0px;
  opacity: 0px;
  color: rgba(0, 0, 0, 1);
  font-family: Cormorant Garamond;
  font-size: 25px;
  font-weight: 500;
  line-height: 30.28px;
  text-align: left;
  margin-top: 18px;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    font-family: Cormorant Garamond;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.28px;
    text-align: left;
    margin-top: 18px;
    margin-bottom: 45px;
    width: 300px;
  }
  @media (max-width: 375px) {
    font-family: Cormorant Garamond;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.28px;
    text-align: left;
    margin-top: 18px;
    margin-bottom: 45px;
    width: 300px;
  }
`;
const RegistrationStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const ContainerQualityStyled = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 150px;
  }
  @media (max-width: 375px) {
    margin-top: 150px;
  }
`;
