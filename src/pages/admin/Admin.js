import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import HeaderAdmin from "../../components/HeaderAdmin";
import AboutAdmin from "../../components/AboutAdmin";
import { Footers } from "../../components/Footer";

const Admin = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
  
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated, navigate]);
  return (
    <div>
      <HeaderAdmin />
      <AboutAdmin />
      <Footers />
    </div>
  );
};

export default Admin;
