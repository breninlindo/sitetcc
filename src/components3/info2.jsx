import React from "react";
import Grupo from "../assets/grupo.png";
import "./info2.css";

const Info2 = () => {
  return (
    
    <div className="bg2">
        <div className="linhainfo">
        <div className="txbox-info2">
            <p className="tx-info2">O FinWise nasceu como um Trabalho de Conclusão de Curso, desenvolvido por seis alunos da ETEC de Guarulhos. Mais do que uma obrigação acadêmica, este projeto representa a união de conhecimentos, ideias e a vontade de desenvolver algo realmente útil e capaz de ajudar pessoas a organizarem sua vida financeira.
            </p>
        </div>
        <div className="imgbox-info2"><img src={Grupo} className="imggrupo" alt="" /></div>
        </div>
        <div></div>
        <div></div>
    </div>
  );
};

export default Info2;