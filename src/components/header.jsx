import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import "./header.css";

const Header = () => {
  return (
    
    <div className="corpo">
        <div className="quadro">
        <img src={Logo} className="imagem"/>
        <Link to="/home" className="textoh">home</Link>
        <Link to="/sobre" className="textoh">o finwise</Link>
        <Link to="/suporte" className="textoh">suporte</Link>
        </div>
    </div>
  );
};

export default Header;