import React from "react";
import Cell4 from "../assets/cell4.png";
import "./component5.css";

const Component5 = () => {
  return (
    
    <div className="corpo5">
    <div className="linha5">
        <div className="img-container5">
            <img src={Cell4} className="img4"/>
        </div>
        <div className="tx-container5">
            <h1 className="titulo5">Seus gastos, do seu jeito.</h1>
            <p className="texto5">Gráficos inteligentes e alertas te ajudam a entender seus hábitos,
                 tomar decisões e nunca mais esquecer uma conta.</p>
            <div className="btn-container">
            <button className="btnbaixar">Baixe o Aplicativo</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Component5;