import React, { useState } from "react";
import { Footer } from "flowbite-react";
import styled from "styled-components";
import { BsWhatsapp, BsInstagram, BsTelegram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext"; // Import the useAuth hook
import logo from "../assets/photo1720537791.jpeg"; // Adjust the import path as necessary
import number from "../assets/footerNumber.svg";
import location from "../assets/footerLocation.svg";
import message from "../assets/Group 955.svg";
import Input from "./UI/Input";

export function Footers() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, logout, isAuthenticated } = useAuth(); // Use the login function from AuthContext

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your actual authentication logic
    if (email === "admin@gmail.com" && password === "password") {
      login(); // Call the login function to update the authentication state
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Footer
        container
        className="text-blue py-8"
        style={{ background: "rgba(239, 239, 111, 1) " }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="flex flex-col items-start">
            <img
              style={{ width: "118px", height: "126px", borderRadius: "50%" }}
              src={logo}
              alt="TapTaza Logo"
              className="mb-4"
            />
            <p className="text-lg font-medium w-[346px] leading-[24.22px]">
              У нас швейное производство полного цикла. Специализируемся на
              пошиве одежды первого, второго и третьего слоя.
            </p>
            <div className="flex space-x-4 mt-4">
              <Footer.Icon
                href="https://api.whatsapp.com/send?phone=996509570063"
                icon={BsWhatsapp}
                className="text-pink-500"
                style={{ color: "rgba(0, 51, 102, 1)" }}
              />
              <Footer.Icon
                href="https://www.instagram.com/taptaza.fabric.kg?igsh=MXZ6bW1oMDVuZHB4MQ=="
                icon={BsInstagram}
                className="text-pink-500"
                style={{ color: "rgba(0, 51, 102, 1)" }}
              />
              <Footer.Icon
                href="#"
                icon={BsTelegram}
                className="text-pink-500"
                style={{ color: "rgba(0, 51, 102, 1)" }}
              />
            </div>
          </div>
          <div>
            <Footer.Title title="Контакты" className="text-pink-500" />
            <Footer.LinkGroup col className="mt-4">
              <Footer.Link
                href="#"
                className="flex items-center text-lg font-medium"
              >
                <span className="mr-2">•</span> Звоните с Пн-Сб: 9.00-18.00
              </Footer.Link>
              <Footer.Link
                href="https://api.whatsapp.com/send?phone=996509570063"
                className="flex items-center text-lg font-medium"
              >
                <div className="flex items-center">
                  <img src={number} alt="phone icon" className="w-6 h-6 mr-2" />
                  <span>+996 (509) 570 063</span>
                </div>
              </Footer.Link>
              <Footer.Link
                href="https://2gis.kg/bishkek/geo/15763234351110359"
                className="flex items-center text-lg font-medium"
              >
                <div className="flex items-center">
                  <img
                    src={location}
                    alt="location icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span>ул.Турусбекова 124 Кыргызстан, г.Бишкек</span>
                </div>
              </Footer.Link>
              <Footer.Link
                href="mailto:taptazafabric@gmail.com"
                className="flex items-center text-lg font-medium"
              >
                <div className="flex items-center">
                  <img
                    src={message}
                    alt="email icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Эл. адрес: taptazafabric@gmail.com</span>
                </div>
              </Footer.Link>
              <Footer.Link
                href="https://api.whatsapp.com/send?phone=996509570063"
                className="flex items-center text-lg font-medium"
              >
                <button
                  className="mt-4 px-4 py-2 rounded-md"
                  style={{
                    backgroundColor: "rgba(0, 51, 102, 1)",
                    color: "#ffffff",
                  }}
                >
                  Задать вопрос в WhatsApp
                </button>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              title="Навигация по сайту"
              className="text-pink-500"
            />
            <Footer.LinkGroup col className="mt-4 space-y-2">
              <div>
                <Footer.Link href="#" className="text-lg font-medium">
                  Главная
                </Footer.Link>
                <Footer.Link href="#" className="text-lg font-medium">
                  Каталог
                </Footer.Link>
                <Footer.Link href="#" className="text-lg font-medium">
                  О нас
                </Footer.Link>
                <Footer.Link href="#" className="text-lg font-medium">
                  Контакты
                </Footer.Link>
              </div>
            </Footer.LinkGroup>
            {isAuthenticated ? (
              <button onClick={handleLogout}>Выйти</button>
            ) : (
              <button onClick={() => setShowModal(true)}>Регистрация</button>
            )}
          </div>
        </div>
      </Footer>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <StyledH1>Регистрация</StyledH1>
            <form onSubmit={handleLogin}>
              <ModalButton>
                <Input
                  variant="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  variant="email"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ModalButton>
              <ButtonDivStlyed>
                <Button primary type="submit">
                  Войти
                </Button>
                <Button onClick={() => setShowModal(false)} type="submit">
                  Отмена
                </Button>
              </ButtonDivStlyed>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

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
  background: rgba(239, 239, 111, 0.45);
  padding: 20px;
  width: 568px;
  max-width: 90%;
  height: 477px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledH1 = styled.h1`
  font-family: Cormorant Garamond;
  font-size: 40px;
  font-weight: 700;
  line-height: 48.44px;
  text-align: center;
  color: rgba(0, 51, 102, 1);
`;

const ModalButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  width: ${({ primary }) => (primary ? "200px" : "100px")};
  height: 52.4px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "rgba(0, 51, 102, 1)" : "gray")};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
const ButtonDivStlyed = styled.button`
  display: flex;
  gap: 60px;
`;
