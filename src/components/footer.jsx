import React from "react";
import Logo2 from "../assets/logo2.png";
import Baixe from "../assets/baixe.png"
import Redes from "../assets/redes.png"
import "./footer.css";

const Footer = () => {
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
        <div className="divisoria"></div>
        </div>
        <div className="txfooter-container">
        <p className="tx-footer">Este projeto é um Trabalho de Conclusão de Curso (TCC), desenvolvido por alunos da ETEC do Guarulhos, com muito empenho, dedicação e carinho.
            Nosso objetivo é entregar uma ferramenta que realmente ajude no controle financeiro de forma simples, intuitiva e eficiente. Seu apoio, sua colaboração e, claro, seu uso fazem toda a diferença pra nós!
            Agradecemos por estar aqui, por acreditar no nosso projeto e por fazer parte dessa jornada.</p>
        </div>
        </div>
    </div>
  );
};

export default Footer;