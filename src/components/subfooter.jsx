import React from "react";
import { Link } from "react-router-dom";
import QRcode from "../assets/qrcode.png";
import "./subfooter.css";

const Subfooter = () => {
  return (
    
    <div className="corpo-ft">
        <div className="quadro-ft">
            <div className="container1">
            <p className="destaque-ft">FinWise</p>
            <Link to="/sobre" className="destaque-branco"><p>Conheça</p></Link>
            <Link to="/sobre" className="destaque-branco"><p>Planos</p></Link>
            </div>
            <div className="container4">
            <p className="destaque-ft">Suporte</p>
            <Link to="/contato" className="destaque-branco"><p>Suporte</p></Link>
            <Link to="/suporte" className="destaque-branco"><p>Política de Privacidade</p></Link>
            <Link to="/suporte" className="destaque-branco"><p>Termos de Uso</p></Link>
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