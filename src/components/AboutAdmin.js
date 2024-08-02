import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./UI/ImageUploading"; // Import the Profile component to use the handleEdit function
import edit from "../assets/edit.svg";
import Delete from "../assets/Delete.svg";
import Modal from "./UI/Modal"; // Import the Modal component

const AboutAdmin = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [itemToDelete, setItemToDelete] = useState(null); // State to track the item to delete

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData")) || [];
    setItems(savedData);
  }, []);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("profileData", JSON.stringify(updatedItems));
    setShowModal(false);
    setItemToDelete(null);
  };

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    setEditItem(id);
  };

  const handleSave = (updatedData) => {
    setItems(updatedData);
    setEditItem(null);
  };

  return (
    <div>
      <SectionStyled>
        <TitleWrapper>
          <Title>Мои товары</Title>
        </TitleWrapper>
        <CardContainer>
          {items.length > 0 ? (
            items.map((item) => (
              <Card
                key={item.id}
                title={item.productName}
                image={item.fileURLs[0]}
                onEdit={() => handleEdit(item.id)}
                onDelete={() => handleDeleteClick(item.id)}
              />
            ))
          ) : (
            <p>Нет элементов для отображения</p>
          )}
        </CardContainer>
      </SectionStyled>
      <Profile editItemId={editItem} onSave={handleSave} />
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleDelete(itemToDelete)}
      />
    </div>
  );
};

export default AboutAdmin;

// Styled components code remains the same as before

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

const Title = styled.h2`
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

const CardStyled = styled.div`
  width: 300px;
  border-radius: 20px;
  height: 390px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: #fff;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const TitleStyled = styled.h3`
  width: 100%;
  height: 82px;
  border-radius: 0px 0px 20px 20px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ButtonStyled = styled.button`
  height: 40px;
  border-radius: 10px;
  font-family: Cormorant Garamond;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

const Card = ({ title, image, onEdit, onDelete }) => (
  <CardStyled>
    <ImageStyled src={image} alt={title} />
    <TitleStyled>{title}</TitleStyled>
    <ButtonWrapper>
      <ButtonStyled onClick={onEdit}>
        <img src={edit} alt="Edit" />
      </ButtonStyled>
      <ButtonStyled onClick={onDelete}>
        <img src={Delete} alt="Delete" />
      </ButtonStyled>
    </ButtonWrapper>
  </CardStyled>
);
