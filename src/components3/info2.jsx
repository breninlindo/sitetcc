import React from "react";
import Grupo from "../assets/grupo.png";
import Grupo2 from "../assets/Grupo2.png"
import "./info2.css";

const Info2 = () => {
  return (
    
    <div className="bg2">
        <div className="linhainfo">
        <div className="txbox-info2">
            <p className="tx-info2">O <span className="destaqueamarelo"> FinWise</span> nasceu como um Trabalho de Conclusão
             de Curso, desenvolvido por seis alunos da ETEC de Guarulhos. Mais do que uma obrigação acadêmica, este projeto
              representa a <span className="destaqueamarelo"> união</span> de conhecimentos, ideias e a 
              <span className="destaqueamarelo"> vontade</span> de desenvolver algo realmente útil e capaz
               de ajudar pessoas a <span className="destaqueamarelo"> organizarem</span> sua vida 
               <span className="destaqueamarelo"> financeira</span>.
            </p>
        </div>
        <div><img src={Grupo} className="imggrupo" alt="" /></div>
        </div>
        <div className="linhainfo2">
          <div><img src={Grupo2} className="imggrupo2" alt="" /></div>
          <div className="txbox2-info2">
          <p className="tx-info2">Desde o início, identificamos um <span className="destaqueamarelo"> problema</span> 
            muito presente na sociedade: a dificuldade que muitas pessoas enfrentam em <span className="destaqueamarelo"> controlar</span>
            suas finanças. Seja pela falta de acesso a ferramentas eficientes, pela <span className="destaqueamarelo"> complexidade</span>
            de alguns aplicativos ou simplesmente pela ausência de <span className="destaqueamarelo"> incentivo</span>, 
            cuidar do próprio dinheiro, muitas vezes, parece mais difícil do que deveria ser.</p>
          </div>
        </div>
        <div className="txbox3-info2">
          <p className="tx-info2">Foi a partir dessa percepção que nasceu o FinWise, uma plataforma pensada para ser simples, eficiente,
             intuitiva e acessível para qualquer pessoa.</p>
        </div>
        
        <div></div>
        <div></div>
    </div>
  );
};

export default Info2;