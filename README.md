<div align="center">
  <img src="https://raw.githubusercontent.com/CostaMarcos/GitJobs/develop/services/frontend/public/images/gitjobs.svg" alt="GitJobs Symbol" width="300">
</div>

<h1 align="center">GitJobs</h1>
<p align="center">Website de Vagas de Empregos de Repositórios do GitHub</p>

<div align="center">
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/CostaMarcos/GitJobs?color=FFD43B&label=Tamanho%20do%20Reposit%C3%B3rio&logo=databricks&logoColor=white"">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/CostaMarcos/GitJobs?color=346b31&label=%C3%9Altimo%20Commit&logo=lastpass&logoColor=white"">
  <img alt="Lines Of Code" src="https://img.shields.io/tokei/lines/github/CostaMarcos/GitJobs?color=306998&label=Linhas%20de%20C%C3%B3digo&logo=maas&logoColor=white">
  <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/CostaMarcos/GitJobs?color=646464&label=Contribuidores&logo=dark-reader&logoColor=white"">
</div>

<div align="center">
    <a href='https://nodejs.org/'><img title='NodeJS' alt='NodeJS Icon' width='75' src='https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/nodejs.svg'></a>
    <a href='https://www.typescriptlang.org/'><img title='TypeScript' alt='TypeScript Icon' width='75' src='https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/typescript.svg'></a>
    <a href='https://www.javascript.com/'><img title='JavaScript' alt='JavaScript Icon' width='75' src='https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/javascript.svg'></a>
    <a href='https://nextjs.org/'><img title='NextJS' alt='NextJS Icon' width='75' src='https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_light_next.svg'></a>
    <a href='https://reactjs.org/'><img title='React' alt='React Icon' width='75' src='https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/react.svg'></a>
    <a href='https://styled-components.com/'><img title='Styled Components' alt='Styled Components Icon' width='75' src='https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_styled.svg'></a>
    <a href='https://github.com/axios/axios'><img title='Axios' alt='Axios Icon' width='75' src='https://www.nolabels.org/wp-content/uploads/2021/03/Axios.png'></a>
    <a href='https://grpc.io/'><img title='gRPC' alt='gRPC Icon' width='75' src='https://symbols-electrical.getvecta.com/stencil_82/91_grpc.08e443ffd4.png'></a>
    <a href='https://www.json.org/'>
    <a href='https://www.docker.com/'><img title='Docker' alt='Docker Icon' width='75' src='https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_docker.svg'></a>
    <img title='JSON' alt='JSON Icon' width='75' src='https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/json.svg'></a>
</div>

<h5 align="center">:heavy_check_mark: Status do Projeto: Concluído :heavy_check_mark:</h5>

</br>

<h5 align="center">:bangbang: DESCRIÇÃO DO PROBLEMA :bangbang:</h5>
<p align="justify"><i>Existem alguns repositórios do GitHub que são inteiramente voltados para a disponibilização de vagas de tecnologia. Todos esses repositórios se utilizam da estratégia de mostrar vagas como problemas(issues), e tais poblemas podem ser aceitos ou não como uma vaga da área de tecnologia pelos donos do repositório. Assim como acontecem em projetos comuns da área de progração, o recrutador submete uma "Pull Request", essa submissão é avaliada pelos próprios profissionais da área e caso seja aceita, vira uma "issue" aberta, o que poderia se caracterizar como uma vaga aberta, e quando a vaga é preenchida, o próprio recrutador pode fechar a vaga, sem intermediação dos proprietários do repositório. Como a interface de procura de "issues" pode ser um pouco confusa para pessoas comuns, decidimos construir um website que possa suprir essa necessidade. Além do website poder integrar vários repositórios diferentes em uma única aplicação, caso necessário, o website dispõe de uma interface simples e bastante intuitiva e um serviço de envio de emails, que notifica o usuário sobre novas vagas no website.</i></p>

</br>

## :mag_right: ÍNDICE
  - [:mag_right: ÍNDICE](#mag_right-índice)
  - [:thought_balloon: SOBRE O PROJETO](#thought_balloon-sobre-o-projeto)
  - [:brain: PRINCÍPIOS E PADRÕES DE PROJETO UTILIZADOS](#brain-princípios-e-padrões-de-projeto-utilizados)
  - [:star2: FUNCIONALIDADES](#star2-funcionalidades)
  - [:twisted_rightwards_arrows: DIAGRAMA DO SISTEMA](#twisted_rightwards_arrows-diagrama-do-sistema)
  - [:art: LAYOUT E DESIGN](#art-layout-e-design)
  - [:triangular_flag_on_post: PRIMEIROS PASSOS](#triangular_flag_on_post-primeiros-passos)
    - [:package: Executando como Projeto Node](#package-executando-como-projeto-node)
        - [:grey_exclamation: Pré-Requisitos com Node](#grey_exclamation-pré-requisitos-com-node)
        - [:play_or_pause_button: Executando o Projeto com Node](#play_or_pause_button-executando-o-projeto-com-node)
    - [:package: Executando como Container Docker](#package-executando-como-container-docker)
        - [:grey_exclamation: Pré-Requisitos com Docker](#grey_exclamation-pré-requisitos-com-docker)
        - [:play_or_pause_button: Executando o Projeto com Docker](#play_or_pause_button-executando-o-projeto-com-docker)
  - [:hammer_and_wrench: DESENVOLVIDO COM](#hammer_and_wrench-desenvolvido-com)
  - [:cloud: SERVIÇOS USADOS](#cloud-serviços-usados)
  - [:nerd_face: AUTORES](#nerd_face-autores)
  - [:memo: LICENÇA](#memo-licença)
  - [:bulb: INSPIRAÇÕES](#bulb-inspirações)

## :thought_balloon: SOBRE O PROJETO
  Este projeto foi feito como trabalho final da disciplina de Arquitetura de Software, lecionada pelo professor Carlos Mar, no Instituto Federal do Amazonas <i>Campus</i> Manaus Zona Leste (IFAM CMZL). Foi desenvolvido pelos alunos Carlos Gabriel, Lucas Castro, Marcos Vinícius e Mayara Silva, e foi desenvolvido usando a Arquitetura de Microsserviços.

## :brain: PRINCÍPIOS E PADRÕES DE PROJETO UTILIZADOS
  - [x] Foi usado singleton na comunicação entre API do GitHub e API da aplicação, ou seja, toda a troca de informação é feita por intermédio da API da aplicação, criando assim, um único canal de comunicação entre as aplicações.
  - [x] Encapsulamento de elementos do DOM é uma das funcionalidades do Styled Components, o que faz com que estilizações, mesmo que com nomes de classes iguais de outros componentes, sejam aplicadas somente ao componente em questão.
  - [x] No modulo de atualização não foi utilizado a criação de classes ou objetos, apenas funções, não foi utilizado nenhum padrão de projeto pois não se observou a necessidade ou mesmo utilidade eficiente para o código. O princípio de responsabilidade única onde o serviço faz apenas o que corresponde a sua responsabilidade foi utilizado no modulo. Respeitando o contexto do modulo e tornando o modulo coeso.
  - [x] Todos os serviços utilizam acoplamento aceitável, ou seja, a execução de tarefas nos serviços e a requisição e resposta de dados eram feitas apenas por meio de chamadas RPC, com o gRPC.

## :star2: FUNCIONALIDADES
### Serviço de FrontEnd - Lucas Castro
O serviço de FrontEnd da aplicação é responsável pela apresentação de dados ao usuário. O serviço é construído usando as bibliotecas React e Styled Components, e os frameworks NextJS e Material UI. O serviço conta com uma interface agradável para visualização das vagas e com um sistema de filtragem baseada nas labels de cada issue do repositório. O serviço tamnbém conta com uma interface modal para inscrição do email no serviço de notificação, assim, o usuário ficará sabendo de novas vagas que venham a ser abertas no repositório.

### Serviço de Issues - Marcos Vinícius
Esse serviço realiza a busca e tratamento das vagas de emprego que são disponibilizadas em formato de Issues no github, a função que realiza essa atividade foi denominada GetIssue e somente é responsável por fazer a requisição e retorno dos dados, para os demais serviços e também o frontend, essa função foi desenvolvida utilizado a biblioteca Axios para realizar requisições a Api do Github, juntamente com a biblioteca GRPC por ser uma ferramenta de transmissão de dados de forma rápida com baixa latência.

### Serviço de Atualização - Carlos Gabriel
O serviço de atualização funciona a partir de uma função principal e uma auxiliar. A função principal “getAtualiza”, faz uma requisição a API do GitHub através do backend para obter dados das vagas registradas, essa requisição retornara um arquivo JSON contendo dados das últimas “issues” registradas no repositório. Então é solicitado a função auxiliar “DatasHoje” que retorna a data atual e a data do dia anterior no fuso horário de referência “UTC” gerando um intervalo de vinte e quatro horas que será usado pra analisar as novas vagas nesse período de tempo. Então um laço “for” com um “if” dentro da função principal irá comparar as datas de cada vaga registrada com as do arquivo JSON e se caso tiver sido registrada no intervalo de 24 horas irá adicionar um valor a uma variável de inteiros “QuantiNovVag”, quando terminar a função principal retornara essa variável de inteiros com a quantidade de novas vagas.

### Serviço de Email - Marcos Vinícius
O serviço de envio de emails tem o papel de notificar os usuários sobre as novas vagas, para isso é necessário dois dados fundamentais, o primeiro é a lista de emails dos usuários que se inscreveram e o segundo dado é a quantidade de novas vagas disponíveis. Então este serviço cria uma comunicação com os serviços de Atualização e Persistência. Do serviço de Atualização é utilizado a função GetAtualiza, que retorna a quantidade de novas vagas do dia. Do serviço de Persistência é utilizado a função ListarEmail que retorna basicamente um array de emails cadastrados. A função de envio de email utiliza a biblioteca nodemailer, e faz o primeiro envio assim que o servidor é iniciado e repete a ação a cada 12h com os novos emails e nova quantidade de vagas, para editar o intervalo entre os envios, basta modificar a variável TIME_NOTIFICATION (em milisegundos) no arquivo .env que está na raiz do projeto.

### Serviço de Persistência - Mayara Silva
O serviço de persistência possui duas funções. A função “gravarArquivoJSON” possui a funcionalidade de registrar e-mails em uma lista no formato de JSON  na pasta “data” que pode ser utilizado no modulo de e-mail, e a função “lerArquivo” que faz a leitura da lista de e-mails gravadas no arquivo JSON

## :twisted_rightwards_arrows: DIAGRAMA DO SISTEMA
  <img title='Diagrama de Tecnologias Usadas' alt='Diagram' width='100%' src='https://raw.githubusercontent.com/CostaMarcos/GitJobs/develop/images/Diagrama%20e%20Tecnologias.svg'>
  <img title='Diagrama de Autores de Módulos e Suas Ligações' alt='Diagram' width='100%' src='https://raw.githubusercontent.com/CostaMarcos/GitJobs/develop/images/Diagrama%20e%20Autores.svg'>

## :art: LAYOUT E DESIGN
  <img title='Interface Principal da Aplicação Web' alt='Main Interface' width='100%' src='https://raw.githubusercontent.com/CostaMarcos/GitJobs/develop/images/Web%20Main%20Interface.jpeg'>
  <img title='Interface Modal da Aplicação Web' alt='Modal Interface' width='100%' src='https://raw.githubusercontent.com/CostaMarcos/GitJobs/develop/images/Web%20Modal%20Interface.jpeg'>

## :triangular_flag_on_post: PRIMEIROS PASSOS

### :package: Executando como Projeto Node
#### :grey_exclamation: Pré-Requisitos com Node
  Além de ter o Node e o NPM já configurados na máquina ([Acesse a documentação para instalação e configuração do NodeJS aqui](https://nodejs.org/pt-br/download/)), para a execução do projeto, você só precisa instalar as dependências do projeto usando o comando `npm install` na pasta raiz do diretório do projeto.
#### :play_or_pause_button: Executando o Projeto com Node
  Após a instalação de todas as dependências de requisito usando o comando mostrado acima, execute o comando `npm start`, ou `npm run start`, para iniciar todos os serviços da aplicação. Após, é só acessar a interface web abrindo a URL http://localhost:2000/ no navegador, ou usar a API na URL http://localhost:3000/.

### :package: Executando como Container Docker
#### :grey_exclamation: Pré-Requisitos com Docker
  Primeiro, é necessário a instalação e configuração do Docker, que pode ser vista [aqui](https://docs.docker.com/get-docker/). Depois a instalação do Docker Compose, que pode ser vista [aqui](https://docs.docker.com/compose/install/)
#### :play_or_pause_button: Executando o Projeto com Docker
  Depois de tudo configurado usando as instruções acima, é necessário somente executar o comando `docker-compose up` na pasta raiz do projeto, para a execução do container.

## :hammer_and_wrench: DESENVOLVIDO COM
  - [Node](https://nodejs.org/) - Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. - Justificativa para uso dessa tecnologia é que ela é a plataforma padrão para interpretação e execução do projeto, pois sem ela, nenhuma aplicação poderia ser executada.

  - [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. - Justificativa para uso dessa tecnologia é que ela facilita algumas questões de tipos de arquivos e prevenção de erros. Essa tecnologia foi usada somente no FrontEnd, não sendo empregada no Backend, por motivos de compatibilidade.

  - [Next](https://nextjs.org/) - Estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React. - Justificativa para uso dessa tecnologia é que ela facilita algumas questões de desenvolvimendo de aplicações, como criações de rotas e distribuição de recursos entre componentes.

  - [React](https://reactjs.org/) - Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. - Justificativa para uso dessa tecnologia é que, além de ser a tecnologia de interface padrão no uso do NextJS, é uma das bibliotecas mais usadas no momento para criação de interfaces.

  - [Styled Components](https://styled-components.com/) - Biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS. - Justificativa para uso dessa tecnologia é que ela é de fácil aprendizado e ajuda muito na estilização de componentes, criando escopos para o mesmo e ajudando no encapsulamento de elementos do Modelo de Objetos do Documento (DOM).

  - [Material UI](https://material-ui.com/pt/) - Framework de componentes React que implementam o Google Material Design. - Justificativa para uso dessa tecnologia é que ela ajuda na criação e uso de alguns componentes, criando uma padronização de design no projeto.

  - [Axios](https://github.com/axios/axios) - Cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node. js. - Justificativa para uso dessa tecnologia é que ela é uma das bibliotecas mais utilizadas para realização de requisições simples e complexas a API's REST e páginas comuns da web.

  - [gRPC](https://grpc.io/) - Estrutura de Chamada de Procedimento Remoto de linguagem independente de alto desempenho. - Justificativa para uso dessa tecnologia é que ela é a mais utilizada para comunicação entre microsserviços, além de seu fácil entendimento e baixa curva de aprendizado.

  - [Express](https://expressjs.com/pt-br/) - Framework para Node.js que fornece recursos mínimos para construção de servidores web. - Justificativa para uso dessa tecnologia é que ele é o framework padrão para criação de API's REST e servidores web usando a plataforma NodeJS.

  - [Docker](https://www.docker.com/) - Conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração. - Justificativa para uso dessa tecnologia é que ela permite que aplicações sejam encapsuladas dentro de pequenos containers linux, isolando a aplicação do resto do sistema operacional e permitindo a fácil execução da mesma em ambientes e sistemas diversos.

## :cloud: SERVIÇOS USADOS
  - [Google Fonts](https://fonts.google.com/) - Serviço online de disponibilização de famílias de fontes gratuitas do Google.
  - [GitHub API](https://docs.github.com/pt/rest) - API REST do GitHub para captura de dados variados de repositórios, projetos e usuários.

## :nerd_face: AUTORES
<div align="center">
    <table>
        <tr>
            <th>
                <img src="https://avatars.githubusercontent.com/u/57019576?v=4" alt="Marcos Vinícius" width="145">
            </th>
            <th>
                <img src="https://avatars.githubusercontent.com/u/32255595?v=4" alt="Lucas Castro" width="145">
            </th>
            <th>
                <img src="https://avatars.githubusercontent.com/u/86427272?v=4" alt="Carlos Gabriel" width="145">
            </th>
            <th>
                <img src="https://avatars.githubusercontent.com/u/61632315?v=4" alt="Mayara Silva" width="145">
            </th>
        </tr>
        <tr>
            <th>
                <p>
                    <i>2019003047</i>
                    </br>
                    <a href="https://github.com/CostaMarcos">
                        <b>Marcos Vinícius</b>
                    </a>
                    </br>
                    <tt>Desenvolvedor Backend</tt>
                </p>
            </th>
            <th>
                <p>
                    <i>2019004278</i>
                    </br>
                    <a href="https://github.com/LucasCastro99">
                        <b>Lucas Castro</b>
                    </a>
                    </br>
                    <tt>Desenvolvedor Frontend</tt>
                </p>
            </th>
            <th>
                <p>
                    <i>2019003010</i>
                    </br>
                    <a href="https://github.com/CarloGabriel">
                        <b>Carlos Gabriel</b>
                    </a>
                    </br>
                    <tt>Desenvolvedor Backend</tt>
                </p>
            </th>
            <th>
                <p>
                    <i>2019003145</i>
                    </br>
                    <a href="https://github.com/mayaradeveloper">
                        <b>Mayara Silva</b>
                    </a>
                    </br>
                    <tt>Desenvolvedora Backend</tt>
                </p>
            </th>
        </tr>
    </table>
</div>
  
## :memo: LICENÇA
  Este projeto é licenciado sobre os termos da MIT License. Veja o [arquivo de licença](LICENSE) para mais detalhes sobre o licenciamento desse projeto.

## :bulb: INSPIRAÇÕES
- [FrontEnd Brasil - Vagas](https://github.com/frontendbr/vagas) - Espaço para divulgação de vagas para front-enders.
- [MarkIcon.IO](https://github.com/LucasCastro99/MarkIcon.IO) - Ferramenta online para ajudar na personalização de MarkDown no GitHub.
