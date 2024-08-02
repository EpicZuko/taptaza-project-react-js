import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Подтвердить удаление</h2>
        </ModalHeader>
        <ModalBody>
          <p>Вы уверены в том, что хотите удалить данное изображение?</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={onConfirm} primary>Подтверждать</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? 'rgba(0, 51, 102, 1)' : 'gray')};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
