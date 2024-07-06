import React from "react";
import styled from "styled-components";
import productsIcon from "../assets/products1.svg";
import productsIcon2 from "../assets/products2.svg";
import productsIcon3 from "../assets/products3.svg";
import productsIcon4 from "../assets/products4.svg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Шьём оптом",
      image: productsIcon,
      description: "Пошив оптом одежду легкой группы, верхней и трикотаж.",
    },
    {
      id: 2,
      title: "Ассортимент тканей",
      image: productsIcon2,
      description:
        "Большой ассортимент материалов: трикотаж, шелк, шифон и т.д.",
    },
    {
      id: 3,
      title: "Дизайн продукции",
      image: productsIcon3,
      description: "Создадим уникальный дизайн одежды для Вас.",
    },
    {
      id: 4,
      title: "Качество продукции",
      image: productsIcon4,
      description: "Каждая продукция проходит двойную проверку на качество.",
    },
  ];
  return (
    <ProductStyledContainer>
      <ProductH1Styled>Что мы предлагаем ?</ProductH1Styled>
      <ProductContainer>
        {products.map((elem) => (
          <ProductStyled key={elem.id} images={elem.image}>
            <ProductContent>
              <ProductTitle>{elem.title}</ProductTitle>
              <ProductDescription>{elem.description}</ProductDescription>
            </ProductContent>
          </ProductStyled>
        ))}
      </ProductContainer>
    </ProductStyledContainer>
  );
};

export default Products;

const ProductStyledContainer = styled.div`
  background: rgba(244, 245, 247, 1);
  padding-top: 60px;
  padding-bottom: 60px;
`;
const ProductH1Styled = styled.h1`
  height: 61px;
  gap: 0px;
  opacity: 0px;
  font-family: Cormorant Garamond;
  font-size: 50px;
  font-weight: 700;
  line-height: 60.55px;
  text-align: center;
  margin-bottom: 39px;
  margin-top: 53px;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

const ProductStyled = styled.div`
  position: relative;
  width: 299px;
  height: 393px;
  background-image: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px 0px 0px 0px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scale(1.1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;

const ProductContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  border-radius: 0px 0px 20px 20px;
`;

const ProductTitle = styled.h1`
  opacity: 1;
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 36.33px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;

const ProductDescription = styled.p`
  opacity: 1;
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.8px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`;
