import React from "react";
import "./politicas.css";
import { Link } from "react-router-dom";

const Politicas = () => {
  return (
    <div className="politicas-container">
      <div className="espaco"></div>
      <h1>POLÍTICA DE PRIVACIDADE - FINWISE</h1>
      <p>Última atualização: 23/05/2024</p>

      <p>
        A sua privacidade é uma prioridade para nós. Esta Política de Privacidade descreve como o FinWise coleta,
         utiliza, armazena e protege os dados pessoais fornecidos pelos usuários. Nosso compromisso é garantir transparência,
          segurança e respeito à privacidade dos dados de todos os nossos usuários, em conformidade com as leis aplicáveis,
           incluindo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
      </p>
      <p>Ao utilizar nossos serviços, você concorda integralmente com os termos desta Política.</p>

      <h2>1. INFORMAÇÕES COLETADAS</h2>
      <p>
        O FinWise coleta apenas as informações pessoais necessárias para a prestação dos serviços oferecidos.
         Esses dados são inseridos diretamente pelos usuários, de forma manual, durante o uso do aplicativo.
      </p>
      <p>As informações coletadas incluem, mas não se limitam a:</p>
      <ul>
        <li>
          Dados de cadastro, como nome, e-mail e senha;
        </li>
        <li>
          Informações financeiras inseridas manualmente, como: 
            <ul>
            <li>Receitas</li>
            <li>Despesas</li>
            <li>Categorias de gastos;</li>
            <li>Datas de pagamento;</li>
            <li>Metas e planejamentos financeiros pessoais;</li>
            </ul>
        </li>
        <li>Dados referentes às preferências do usuário dentro do aplicativo (como alertas e configurações).</li>
      </ul>
      <p>Importante:</p>
      <ul>
        <li>O FinWise não coleta, não solicita e não armazena dados bancários, informações de cartão de crédito,
           senhas bancárias ou dados financeiros sensíveis provenientes de instituições financeiras.</li>
        <li>Todos os dados são inseridos manualmente pelo usuário, sem coleta automática de informações externas.</li>
      </ul>

      <h2>2. FORMA DE COLETA DOS DADOS</h2>
      <p>A coleta de dados ocorre de maneira ativa e voluntária, quando o usuário:</p>
      <ul>
        <li>Cria uma conta no aplicativo;</li>
        <li>Insere receitas, despesas, metas e outras informações no app;</li>
        <li>Personaliza categorias ou configurações;</li>
        <li>Entra em contato com nossa equipe, seja para suporte, feedback ou dúvidas.</li>
      </ul>
      <p>Não realizamos coleta automática de dados sensíveis, não utilizamos cookies dentro do app,
         nem rastreamento de atividades fora da plataforma.</p>

      <h2>3. FINALIDADE DO USO DOS DADOS</h2>
      <p>Os dados fornecidos pelos usuários são utilizados exclusivamente para os seguintes propósitos:</p>
      <ul>
        <li>Permitir o uso pleno das funcionalidades do aplicativo, incluindo:
          <ul>
            <li>Organização e visualização de receitas e despesas;</li>
            <li>Geração de relatórios e gráficos financeiros personalizados;</li>
            <li>Acompanhamento de metas e planejamento financeiro;</li>
            <li>Emissão de lembretes e alertas configurados pelo próprio usuário.</li>
          </ul>
        </li>
        <li>Gerenciar a conta do usuário e suas preferências no aplicativo;</li>
        <li>Aprimorar a experiência do usuário, corrigir erros, melhorar funcionalidades e desenvolver novos recursos;</li>
        <li>Atender solicitações de suporte e responder dúvidas, reclamações ou sugestões;</li>
        <li>Atender solicitações de suporte e responder dúvidas, reclamações ou sugestões;</li>
      </ul>

      <h2>4. COMPARTILHAMENTO DE DADOS COM TERCEIROS</h2>
      <p>
        O FinWise não comercializa, não compartilha e não transfere dados pessoais dos usuários para terceiros com finalidade comercial,
         publicitária ou promocional.</p>
      <p>O compartilhamento de dados ocorre exclusivamente para serviços de infraestrutura tecnológica,
         essenciais para o funcionamento do aplicativo, como:</p>
      <ul>
        <li>Serviços de armazenamento em nuvem e banco de dados, como o Google Firebase, responsável por garantir a segurança,
           backup e integridade das informações.</li>
        <li>Serviços de autenticação, necessários para a criação e acesso às contas dos usuários.</li>
      </ul>
      <p>Todos os fornecedores utilizados pelo FinWise estão contratualmente comprometidos a respeitar a confidencialidade dos dados
         e a cumprir as normas de segurança e privacidade aplicáveis.</p>

      <h2>5. ARMAZENAMENTO, RETENÇÃO E SEGURANÇA DOS DADOS</h2>
      <p>
        Seus dados são armazenados em servidores seguros, gerenciados por provedores de serviços que oferecem elevado padrão de segurança,
         criptografia e proteção contra acessos não autorizados.</p>
      <p>Os dados são retidos enquanto a conta do usuário estiver ativa ou enquanto forem necessários para a prestação dos serviços,
         exceto nos casos em que o usuário solicitar a exclusão dos dados.</p>
      <p>Medidas de segurança implementadas incluem:</p>
      <ul>
        <li>Criptografia dos dados durante o tráfego e armazenamento;</li>
        <li>Controle de acesso restrito e monitoramento de atividades internas;</li>
        <li>Proteção contra acessos não autorizados, perdas acidentais, destruição ou alteração de dados;</li>
        <li>Backup periódico para garantir a integridade dos dados.</li>
      </ul>

      <h2>6. EXCLUSÃO DE DADOS E ENCERRAMENTO DA CONTA</h2>
      <p>
        O usuário pode, a qualquer momento, solicitar a exclusão total de seus dados pessoais e financeiros
         inseridos no aplicativo. A exclusão pode ser feita:</p>
      <ul>
        <li>Diretamente por meio do aplicativo, nas configurações da conta, quando disponível;</li>
        <li>Ou mediante solicitação enviada ao e-mail de suporte: [timeFinWise@gmail.com].</li>
      </ul>
      <p>Após a confirmação da solicitação, todos os dados serão excluídos de forma definitiva dos nossos servidores,
         exceto aqueles que precisem ser mantidos por exigência legal ou cumprimento de obrigações regulatórias.</p>

      <h2>7. DIREITOS DO USUÁRIO</h2>
      <p>Nos termos da LGPD, o usuário tem direito a:</p>
      <ul>
        <li>Confirmar a existência de tratamento dos seus dados;</li>
        <li>Acessar seus dados pessoais;</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>Portabilidade dos dados, quando aplicável;</li>
        <li>Eliminação dos dados pessoais tratados com consentimento;</li>
        <li>Obter informações sobre entidades públicas ou privadas com as quais compartilhamos dados;</li>
        <li>Revogar o consentimento, a qualquer momento, sem prejuízo da legalidade dos tratamentos realizados anteriormente.</li>
      </ul>

      <h2>8. USO DE SERVIÇOS DE TERCEIROS</h2>
      <p>
        O FinWise faz uso de serviços terceirizados, como o Google Firebase, para:
      </p>
      <ul>
        <li>Autenticação de usuários;</li>
        <li>Armazenamento seguro dos dados;</li>
        <li>Monitoramento de desempenho e erros.</li>
      </ul>
      <p>Estes serviços possuem suas próprias políticas de privacidade, que devem ser consultadas diretamente pelos 
        usuários.</p>

      <h2>9. IDADE MINÍMA PARA USO</h2>
      <p>
       O FinWise é destinado a usuários com idade igual ou superior a 16 anos. Não coletamos, de forma consciente, dados de menores de idade. Caso tomemos conhecimento de que dados de menores
        foram coletados sem o consentimento dos responsáveis, tomaremos as medidas necessárias para sua exclusão imediata.</p>

      <h2>10. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</h2>
      <p>
        O FinWise reserva-se o direito de alterar esta Política de Privacidade a qualquer momento,
         visando aprimorar seus serviços e cumprir atualizações legais.</p>
      <p>Sempre que houver uma alteração significativa, os usuários serão comunicados por meio do aplicativo,
         do site ou por outros meios de contato disponibilizados.</p>
      <p>Recomendamos que os usuários revisem periodicamente esta Política para se manterem informados
         sobre como protegemos seus dados.</p>

      <h2>11. FALE CONOSCO</h2>
      <p>Em caso de dúvidas, solicitações, reclamações ou para exercer seus direitos relacionados à privacidade 
        e proteção de dados, entre em contato com o responsável pelo tratamento dos dados:</p>
      <ul>
        <Link to="/contato" className="destaque-link"><li >Precisa de Ajuda?</li></Link>
      </ul>
    </div>
  );
};

export default Politicas;
