import React from "react";
import Logo from "../assets/logo.png";
import logo2 from "../assets/text.png";
import "./header.css";

const Header = () => {
  return (
    
    <div className="corpo">
        <div className="quadro">
        <img src={Logo} className="imagem"/>
        <img src={logo2} className="imagem2"/>
        <p className="textoh">o finwise</p>
        <p className="textoh">  suporte v</p>
        </div>
        <div classname="botoes">
        <button className="btnentrar">Entrar</button>
        <button className="btncriar">Criar conta</button>
        </div>
    </div>
  );
};

export default Header;