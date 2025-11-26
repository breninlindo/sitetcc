import React from "react";
import Homem from "../assets/image 1.png";
import Fundo from "../assets/fundoft.png"
import { Link } from "react-router-dom";
import "./component2.css";

const Component2 = () => {
  return (
    
    <div className="corpo1">
        <div className="linha1">
        <div className="tx-container">
        <h1 className="titulo1">Seu Dinheiro, Sua Liberdade.</h1>
        <p className="texto1">Chega de se perder nas contas! Com o FinWise, você controla suas finanças de forma fácil,
             rápida e sem complicações.</p>
        <button className="btnbaixar"><a href="/base.apk" download>Baixe o Aplicativo</a></button>
        </div>
        <div className="img-container">
        <img className="imgfundo" src={Fundo}/>
        <img className="imgh" src={Homem}/>
        </div>
        </div>
    </div>
  );
};

export default Component2;