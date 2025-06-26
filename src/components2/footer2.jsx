import React from "react";
import Logo2 from "../assets/logo2.png";
import Baixe from "../assets/Baixe.png"
import Redes from "../assets/redes.png"
import "./footer2.css";

const Footer2 = () => {
  return (
    
    <div className="corpofooter">
      <div className="">
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
    </div>
  );
};

export default Footer2;