import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import image from "../../assets/imageUploading.svg";
import { X } from "react-feather"; // Importing Feather icon for delete
import Input from "../UI/Input";

const Profile = ({ editItemId, onSave }) => {
  const [fileURLs, setFileURLs] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [editId, setEditId] = useState(null); // State to track the editing item
  const fileGroup = useRef(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData")) || [];
    if (editItemId) {
      const itemToEdit = savedData.find((item) => item.id === editItemId);
      if (itemToEdit) {
        setFileURLs(itemToEdit.fileURLs);
        setProductName(itemToEdit.productName);
        setProductDescription(itemToEdit.productDescription);
        setEditId(editItemId);
      }
    } else {
      setFileURLs([]);
      setProductName("");
      setProductDescription("");
    }
  }, [editItemId]);

  const changeHandlerFile = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newURLs = selectedFiles.map((file) => URL.createObjectURL(file));

    setFileURLs((prevURLs) => {
      const updatedURLs = [...prevURLs, ...newURLs].slice(0, 10);
      return updatedURLs;
    });
  };

  const removeFile = (index) => {
    setFileURLs((prevURLs) => {
      const updatedURLs = prevURLs.filter((_, i) => i !== index);
      URL.revokeObjectURL(prevURLs[index]);
      return updatedURLs;
    });
  };

  const handleFileGroup = () => {
    fileGroup.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName") {
      setProductName(value);
    } else if (name === "productDescription") {
      setProductDescription(value);
    }
  };

  const handleSave = () => {
    const newItem = {
      id: editId || Date.now(), // Use existing ID if editing
      fileURLs,
      productName,
      productDescription,
    };

    const savedData = JSON.parse(localStorage.getItem("profileData")) || [];
    const updatedData = editId
      ? savedData.map((item) => (item.id === editId ? newItem : item))
      : [...savedData, newItem];

    localStorage.setItem("profileData", JSON.stringify(updatedData));
    setFileURLs([]);
    setProductName("");
    setProductDescription("");
    setEditId(null); // Reset edit state

    // Call onSave callback to notify AboutAdmin component
    onSave(updatedData);
  };

  return (
    <div>
      <StyledH1>Данные товара</StyledH1>
      <Container>
        {fileURLs.length > 0 && (
          <ImageContainer>
            {fileURLs.map((fileURL, index) => (
              <ImageWrapper key={index}>
                <ImgContainerStyled>
                  <StyledGroupImg src={fileURL} alt={`Preview ${index}`} />
                </ImgContainerStyled>
                <DeleteButton onClick={() => removeFile(index)}>
                  <X size={20} />
                </DeleteButton>
              </ImageWrapper>
            ))}
          </ImageContainer>
        )}
        <StyledDiv>
          {fileURLs.length < 10 && (
            <StyledGroupButton
              onClick={handleFileGroup}
              src={image}
              alt="Upload"
            />
          )}
          <StyledGroupFile
            ref={fileGroup}
            onChange={changeHandlerFile}
            type="file"
            accept="image/*,.svg,.png,.jpg,.web"
            multiple
          />
        </StyledDiv>
      </Container>
      <FormStyled>
        <div>
          <label>Названия товара:</label>
          <Input
            variant=""
            name="productName"
            value={productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Описания товара:</label>
          <Input
            variant=""
            name="productDescription"
            value={productDescription}
            rows="4"
            cols="50"
            onChange={handleInputChange}
          />
        </div>
      </FormStyled>
      <ButtonContainer>
        <ButtonStyled onClick={handleSave}>
          {editId ? "Сохранить изменения" : "Добавить"}
        </ButtonStyled>
      </ButtonContainer>
    </div>
  );
};

export default Profile;

const StyledH1 = styled.h1`
  font-family: Cormorant Garamond;
  font-size: 32px;
  font-weight: 600;
  line-height: 38.75px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  margin: 74px 0px 0px 70px;
  @media (max-width: 778px) {
    margin: 20px 0px 0px 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  align-items: flex-start;
  padding: 30px 0px 30px 70px;
  @media screen and (max-width: 778px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    padding: 0px;
  }
`;

const StyledDiv = styled.div`
  width: 278px;
  height: 260px;
  border-radius: 15px;
  background: rgba(239, 239, 111, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledGroupButton = styled.img`
  width: 90px;
  height: 90px;
  padding: 11.25px 0px 3.75px 7.5px;
  cursor: pointer;
`;

const StyledGroupFile = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 778px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledGroupImg = styled.img`
  width: 223px;
  height: 240px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
`;

const ImgContainerStyled = styled.div`
  width: 278px;
  height: 260px;
  border-radius: 15px;
  background: rgba(239, 239, 111, 0.5);
  padding: 10px 28px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38%;
  @media (max-width:778px) {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyled = styled.button`
  width: 256px;
  height: 47px;
  border-radius: 10px;
  background: rgba(0, 51, 102, 1);
  font-family: Cormorant Garamond;
  font-size: 25px;
  font-weight: 700;
  line-height: 30.28px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin: 20px 0px;
`;
