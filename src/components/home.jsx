import React from "react";
import cellImage from "../assets/cell.png";
import "./home.css";

const Home = () => {
  return (
    
    <div className="box1">  
    <div className="linha">
    <div className="text-container">
    <h1 className="titulo">FinWise</h1>
      <p className="texto">
        é seu app de finanças <span className="destaqueamarelo">inteligente</span> e fácil de usar. Com uma interface 
         <span className="destaqueamarelo"> intuitiva</span>, você organiza seus gastos,
        cria <span className="destaqueamarelo">metas</span> e entende sua vida financeira de forma 
         <span className="destaqueamarelo"> simples</span> e sem estresse. Tudo isso com eficiência,
        praticidade e aquele empurrãozinho pra você <span className="destaqueamarelo">transformar</span> seu dinheiro em conquistas!
      </p>
    </div>
      <img src={cellImage} className="celularimg" />
    </div>
    </div>
  );
};

export default Home;
