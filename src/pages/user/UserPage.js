import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Carousel from "../../components/UI/Carusel";
import { Footers } from "../../components/Footer";
import Content from "../../components/Content";

const UserPage = () => {
  return (
    <div>
      <Header />
      <Content />
      <About />
      <Products />
      <Newsletter />
      <Carousel />
      <Footers />
    </div>
  );
};

export default UserPage;
