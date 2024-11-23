import React from "react";
import "./WhatsApp.css"; 
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      className="whatsapp-chat"
       href="https://api.whatsapp.com/send?phone=917200864223"
    >
      
      <FaWhatsapp />
    </a>
  );
};

export default WhatsApp;
