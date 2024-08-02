/* eslint-disable jsx-a11y/img-redundant-alt */
// src/pages/InnerPage.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { Footers } from "./Footer";

const InnerPage = () => {
  const { id } = useParams(); // Получите ID из URL
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      // Получите все данные из localStorage
      const storedItems = JSON.parse(localStorage.getItem("profileData")) || [];

      // Найдите элемент с нужным ID
      const foundItem = storedItems.find((item) => item.id === parseInt(id));

      // Установите найденный элемент в состояние
      setItem(foundItem);
    };

    fetchData();
  }, [id]);

  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <InnerPageContainer>
        <Button onClick={navigateHandler}>Назад</Button>
        {item ? (
          <>
            <h1>{item.productName}</h1>
            {item.fileURLs && item.fileURLs.length > 0 ? (
              <ImageGallery>
                {item.fileURLs.map((url, index) => (
                  <ImageWrapper key={index}>
                    <img src={url} alt={`product image ${index}`} />
                  </ImageWrapper>
                ))}
              </ImageGallery>
            ) : (
              <p>No images available</p>
            )}
            <TextStyled>{item.productDescription}</TextStyled>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </InnerPageContainer>
      <Footers />
    </>
  );
};

export default InnerPage;

const InnerPageContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 100px;
  h1 {
    font-family: Cormorant Garamond;
    font-size: 50px;
    font-weight: 700;
    line-height: 60.55px;
    text-align: left;
    margin-bottom: 35px;
  }
`;

const TextStyled = styled.p`
  font-family: Cormorant Garamond;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
  text-align: justified;
  color: rgba(0, 51, 102, 1);
  margin-top: 63px;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  width: 300px; // Установите ширину карточки
  height: 300px; // Установите высоту карточки
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center; // Вертикальное выравнивание
  justify-content: center; // Горизонтальное выравнивание

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Изображение занимает всю карточку, сохраняя пропорции
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  width: ${({ primary }) => (primary ? "200px" : "100px")};
  height: 40.4px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "rgba(0, 51, 102, 1)" : "gray")};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
