import React from "react";
import QRcode from "../assets/qrcode.png";
import "./subfooter.css";

const Subfooter = () => {
  return (
    
    <div className="corpo-ft">
        <div className="quadro-ft">
            <div className="container1">
            <p className="destaque-ft">FinWise</p>
            <p className="texto-ft">Conheça</p>
            <p className="texto-ft">Planos</p>
            </div>
            <div className="container2">
            <p className="destaque-ft">Suporte</p>
            <p className="texto-ft">Suporte</p>
            <p className="texto-ft">Política de Privacidade</p>
            <p className="texto-ft">Termos de Uso</p>
            </div>
            <div className="container3">
            <p className="destaque-ft">Baixe o FinWise</p>
            <img src={QRcode} className="qrcode" />
            </div>
        </div>
    </div>
  );
};

export default Subfooter;