import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";
import Baixe from "../assets/baixe.png"
import Redes from "../assets/redes.png"
import "./footer2.css";

const Footer2 = () => {
  return (
    
    <div className="corpofooter2">
      <div className="info-container1">
        <div className="">
            <img src={Logo2} className="logo2" />
            <p className="tx-pequeno">Organize. Planeje. Conquiste.</p>
        </div>
        <div>
            <p className="tx-footer">Baixe, utilize e descubra como o
                <span className="destaque"> FinWise</span> pode transformar sua vida financeira!</p>
        </div>
        <div className="colunas">
            <img src={Baixe} className="baixe" />
            <img src={Redes} className="redes" />
        </div>
        <div className="div-soria">
        </div>
        </div>
        <div className="info-container2">
          <div className="container1">
            <p className="destaque-ft">FinWise</p>
            <Link to="/sobre" className="destaque-branco"><p>Conheça</p></Link>
            <Link to="/sobre" className="destaque-branco"><p>Planos</p></Link>
            </div>
            <div className="container2">
            <p className="destaque-ft">Suporte</p>
            <Link to="/contato" className="destaque-branco"><p>Suporte</p></Link>
            <Link to="/suporte" className="destaque-branco"><p>Política de Privacidade</p></Link>
            <Link to="/suporte" className="destaque-branco"><p>Termos de Uso</p></Link>
          </div>
        </div>
    </div>
  );
};

export default Footer2;