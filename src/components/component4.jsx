import React from "react";
import Cell3 from "../assets/cell3.png";
import "./component4.css";

const Component4 = () => {
  return (
    
    <div className="corpo4">
        <div className="linha4">
        <div className="tx-container4">
            <h1 className="titulo4">Metas que viram conquistas.</h1>
            <p className="texto4">Quer viajar, quitar dívidas ou guardar dinheiro? Crie metas
                 personalizadas e veja seu dinheiro trabalhar por você.</p>
            <button className="btnbaixar">Baixe o Aplicativo</button>
        </div>
        <div className="img-container4">
            <img src={Cell3} className="img3"/>
        </div>
        </div>
    </div>
  );
};

export default Component4;