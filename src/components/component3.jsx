import React from "react";
import Cell2 from "../assets/cell2.png";
import "./component3.css";

const Component3 = () => {
  return (
    <div className="corpo3">
    <div className="linha3">
        <div className="img-container3">
            <img src={Cell2} className="img2"/>
        </div>
        <div className="tx-container3">
            <h1 className="titulo3">Tudo no seu controle, de verdade.</h1>
            <p className="texto3">Acompanhe seu saldo, veja seus gastos e tenha clareza total de onde seu dinheiro vai.
                 Tudo na palma da mão.</p>
            <div className="btn-container">
            <button className="btnbaixar"><a href="/base.apk" download>Baixe o Aplicativo</a></button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Component3;