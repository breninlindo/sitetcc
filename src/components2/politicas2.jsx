import React from "react";
import "./politicas.css";
import { Link } from "react-router-dom";

const Politicas2 = () => {
  return (
    <div className="politicas-container">
      <h1>TERMOS E CONDIÇÕES DE USO - FINWISE</h1>
      <p>Última atualização: 23/05/2024</p>

      <p>
        Bem-vindo(a) ao <strong>FinWise</strong>! Ao utilizar nosso aplicativo, você concorda integralmente com estes Termos e Condições de Uso.
        Caso não concorde com algum ponto, recomendamos não utilizar o app.
      </p>

      <h2>1. OBJETO</h2>
      <p>
        O FinWise é um aplicativo voltado para organização financeira pessoal, permitindo que o usuário insira manualmente suas
        informações financeiras e acompanhe relatórios, metas e categorias de gastos.
      </p>

      <h2>2. CONDIÇÕES DE USO</h2>
      <ul>
        <li>Utilizar o aplicativo somente para fins pessoais e legais;</li>
        <li>Inserir informações verídicas e de sua própria titularidade;</li>
        <li>Não utilizar o app para fins ilícitos, fraudulentos ou que infrinjam direitos de terceiros;</li>
        <li>Não tentar obter acesso não autorizado ao sistema, servidores ou dados de outros usuários.</li>
      </ul>

      <h2>3. CADASTRO E CONTA DO USUÁRIO</h2>
      <ul>
        <li>O usuário é responsável por manter a confidencialidade de suas credenciais de acesso;</li>
        <li>Toda atividade realizada com sua conta será de sua responsabilidade exclusiva;</li>
        <li>Caso identifique uso indevido de sua conta, o usuário deve notificar imediatamente a equipe FinWise.</li>
      </ul>

      <h2>4. PROPRIEDADE INTELECTUAL</h2>
      <p>
        Todos os direitos sobre o aplicativo, incluindo nome, design, logotipo, funcionalidades, textos e imagens, pertencem ao
        <strong> FinWise</strong> e são protegidos por leis de propriedade intelectual.
      </p>
      <p>
        É proibida a reprodução, cópia ou distribuição sem autorização prévia e por escrito.
      </p>

      <h2>5. LIMITAÇÃO DE RESPONSABILIDADE</h2>
      <ul>
        <li>O FinWise não garante que o aplicativo estará livre de erros, interrupções ou falhas técnicas;</li>
        <li>O app é uma ferramenta de apoio à organização financeira e não substitui consultoria profissional contábil ou financeira;</li>
        <li>Não nos responsabilizamos por decisões financeiras tomadas com base nas informações inseridas ou geradas pelo aplicativo.</li>
      </ul>

      <h2>6. ATUALIZAÇÕES E MODIFICAÇÕES</h2>
      <p>
        O FinWise poderá atualizar ou modificar o aplicativo, suas funcionalidades e estes Termos de Uso a qualquer momento.
        As alterações entrarão em vigor a partir de sua publicação, sendo responsabilidade do usuário verificar periodicamente a versão vigente.
      </p>

      <h2>7. SUSPENSÃO E ENCERRAMENTO</h2>
      <p>
        Podemos suspender ou encerrar contas que violem estes Termos ou utilizem o aplicativo de forma indevida.
        O usuário também pode encerrar sua conta a qualquer momento, solicitando a exclusão conforme previsto na Política de Privacidade.
      </p>

      <h2>8. ISENÇÃO DE GARANTIAS</h2>
      <p>
        O aplicativo é fornecido “no estado em que se encontra”, sem garantias de resultados específicos.
        O FinWise não se responsabiliza por eventuais danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do aplicativo.
      </p>

      <h2>9. LEGISLAÇÃO APLICÁVEL</h2>
      <p>
        Estes Termos serão regidos pelas leis da República Federativa do Brasil, em especial o Código Civil e a legislação de consumo aplicável.
        Fica eleito o foro da comarca de <strong>[sua cidade/estado]</strong>, com exclusão de qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>10. CONTATO</h2>
      <p>
        Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato com nossa equipe:
      </p>
      <ul>
        <Link to="/contato" className="destaque-link"><li>Precisa de Ajuda?</li></Link>
        <li>E-mail: Finwise.02@gmail.com</li>
        <li>Responsável: Equipe FinWise</li>
      </ul>
</div>
  );
};

export default Politicas2;
