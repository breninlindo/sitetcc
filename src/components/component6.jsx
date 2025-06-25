import React from "react";
import Foguete from "../assets/foguete.png";
import "./component6.css";

const Component6 = () => {
  return (
    
    <div className="corpo6">
        <div className="linha6">
        <div className="tx-container6">
            <h1 className="titulo6">FinWise é para quem quer mais do próprio dinheiro.</h1>
            <p className="texto6">Menos bagunça, mais planejamento. Bora conquistar sua liberdade financeira!</p>
        </div>
        <div className="img-container6">
            <img src={Foguete} className="img5"/>
        </div>
        </div>
    </div>
  );
};

export default Component6;