import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import "./header.css";

const Header = () => {
  return (
    
    <div className="corpo">
        <div className="quadro">
        <img src={Logo} className="imagem"/>
        <p className="textoh">o finwise</p>
        <Link to="/politicas" className="textoh">suporte v</Link>
        </div>
        <div classname="botoes">
        <button className="btnentrar">Entrar</button>
        <button className="btncriar">Criar conta</button>
        </div>
    </div>
  );
};

export default Header;