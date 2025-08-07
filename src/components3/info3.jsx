import React from "react";
import Foco from "../assets/foco.png"
import "./info3.css";

const Info3 = () => {
  return (
    
    <div className="bg3">
        <div className="txbox-tituloinfo">
            <p className="titulo">Nossa Jornada até aqui!</p>
        </div>
        <div className="quadro-info">
            <img src={Foco} className="imgfoco" alt="" />
        </div>
        <div className="txbox-info3">
            <p className="tx-info3">O desenvolvimento do projeto FinWise não foi um caminho fácil. Desde os
                 primeiros passos, lidamos com desafios constantes.</p>

            <p className="tx-info3">Foram semanas de discussões, ideias divergentes, dúvidas técnicas e muitos 
                momentos de incerteza sobre como transformar o conceito em um produto funcional. A definição das funções,
                 do design, da experiência do usuário e da própria identidade do FinWise passou por vários ajustes, mudanças
                  de direção e, claro, muito debate.</p>

            <p className="tx-info3">Em alguns momentos, o projeto parecia travar. Faltavam respostas, sobram dúvidas e, muitas vezes,
                 surgiam opiniões conflitantes. Mas foi justamente nesses momentos que aprendemos a importância do diálogo,
                  do planejamento e da colaboração.</p>

            <p className="tx-info3">Através de reuniões, ajustes constantes e muito trabalho em equipe, cada etapa começou a se encaixar.
                 O projeto ganhou forma, identidade e propósito.</p>
                 
            <p className="tx-info3">Hoje, mesmo ainda em desenvolvimento, o FinWise já representa algo muito maior do que um simples trabalho acadêmico.
                 É uma construção coletiva, feita com dedicação, resiliência e a vontade de entregar uma solução que realmente gere valor para
                  quem usar.</p>
        </div>
    </div>
  );
};

export default Info3;