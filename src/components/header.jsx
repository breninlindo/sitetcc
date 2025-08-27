import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    
    <div className="corpo">
        <div className="quadro">
        <img src={Logo} className="imagem"/>
        <Link to="/" className="textoh">Home</Link>
        <Link to="/sobre" className="textoh">O Finwise</Link>
        <Link to="/contato" className="textoh">Suporte</Link>
        <Link to="/suporte" className="textoh">Políticas e termos</Link>
        </div>
    </div>
  );
};

export default Header;