import React from "react";
import { Footer } from "flowbite-react";
import { BsWhatsapp, BsInstagram, BsTelegram } from "react-icons/bs";
import logo from "../assets/footericon.svg"; // Adjust the import path as necessary
import number from "../assets/footerNumber.svg";
import location from "../assets/footerLocation.svg";
import message from "../assets/Group 955.svg";

export function Footers() {
  return (
    <Footer container className="bg-gray-900 text-white py-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col items-start">
          <img src={logo} alt="TapTaza Logo" className="mb-4" />
          <p className="text-lg font-medium w-[346px] leading-[24.22px]">
            У нас швейное производство полного цикла. Специализируемся на пошиве
            одежды первого, второго и третьего слоя.
          </p>
          <div className="flex space-x-4 mt-4">
            <Footer.Icon href="#" icon={BsWhatsapp} className="text-pink-500" />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-pink-500"
            />
            <Footer.Icon href="#" icon={BsTelegram} className="text-pink-500" />
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
              href="#"
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
              href="mailto:kgtexoffice@gmail.com"
              className="flex items-center text-lg font-medium"
            >
              <div className="flex items-center">
                <img src={message} alt="email icon" className="w-6 h-6 mr-2" />
                <span>Эл. адрес: kgtexoffice@gmail.com</span>
              </div>
            </Footer.Link>
            <Footer.Link
              href="https://api.whatsapp.com/send?phone=996550365566"
              className="flex items-center text-lg font-medium"
            >
              <button
                className="mt-4 px-4 py-2 rounded-md"
                style={{
                  backgroundColor: "rgba(231, 113, 125, 1)",
                  color: "#ffffff",
                }}
              >
                Задать вопрос в WhatsApp
              </button>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Навигация по сайту" className="text-pink-500" />
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
        </div>
      </div>
      {/* <Footer.Divider className="border-pink-500 my-4" /> */}
      {/* <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by="TapTaza™"
          year={2024}
          className="text-pink-500"
        />
      </div> */}
    </Footer>
  );
}
