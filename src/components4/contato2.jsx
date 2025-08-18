import React from "react";
import Fundo from "../assets/fundoft.png"
import PhoneIcon from "../assets/call 1.png"
import EmailIcon from "../assets/email 1.png"
import "./contato2.css";

const Contato2 = () => {
  return (
    
    <div className="fundo2">
        <div className="coluna">
        <div className="linhabox">
        <div className="infobox1">
            <img src={EmailIcon} className="emailic" alt="" />
            <p className="txctt2">E-mail</p>
            <p className="txctt2">timeFinWise@gmail.com</p>
        </div>
        <div className="infobox1">
            <img src={PhoneIcon} className="emailic" alt="" />
            <p className="txctt2">Telefone</p>
            <p className="txctt2">(11) 91234-8765</p>
        </div>
        </div>
        <div className="mapa-box">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.225536069024!2d-46.6565715!3d-23.5476846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d5b71af63b%3A0xf79c1a8c9294d69c!2sR.%20Cristóbal%20Cláudio%20Elilo%2C%2088%20-%20Parque%20Cecap%2C%20Guarulhos%20-%20SP%2C%2007190-065!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
            width="605px"
            height="209px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="txctt3"><span className="destaquectt">Endereço: </span>R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos - SP, 07190-065</p>
        </div>
        </div>
        <div className="coluna">
          <div className="tituloboxctt">
            <h1 className="tituloctt2">Contate-nos</h1>
            <p className="subtituloctt">Encontrou algum problema, bug ou dúvida? Ou quer enviar sua sugestão e feedback? 
              <span className="destaquectt2"> Fale com a gente!</span></p>
          </div>
          <div className="inputbox">
            <p className="subtituloctt">Nome</p>
            <input className="input1" type="text" placeholder="Nome:" />
            <p className="subtituloctt">E-mail</p>
            <input className="input1" type="text" placeholder="e-mail:" />
            <p className="subtituloctt">Assunto</p>
            <input className="input2" type="text" placeholder="Escreva Aqui:" />
          </div>
          <div className="btnbox">
          <button className="btnenviar">Enviar Mensagem</button>
          </div>
        </div>
    </div>
  );
};

export default Contato2;