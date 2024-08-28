# Arquitetura e Tecnologias

O **EducaMinas** é constituído de cinco componentes principais:

- **Frontend:** Responsável pela interface de usuário, onde os usuários interagem com o sistema. Ele exibe os dados de maneira clara e acessível, permitindo que os usuários façam pesquisas e visualizem gráficos e análises.

- **Backend/API:** Gerencia a lógica de negócios e atua como intermediário entre o frontend e o banco de dados. Ele processa as solicitações dos usuários, executa as regras de negócio e retorna os dados apropriados para o frontend.

- **Scraper:** Responsável por coletar dados diretamente do INEP, raspando as informações relevantes de suas plataformas. Esses dados brutos são a base para as análises e visualizações realizadas pelo sistema.

- **ETL (Extract, Transform, Load):** Depois que os dados são raspados pelo Scraper, o processo de ETL entra em ação. Ele organiza, transforma e carrega os dados nas tabelas do banco de dados, garantindo que eles estejam estruturados de forma eficiente e prontos para serem utilizados pelo backend e visualizados no frontend.

- **Banco de Dados:** Armazena e organiza os dados necessários para o funcionamento do EducaMinas. É o repositório central onde todos os dados coletados, processados e organizados são mantidos para acesso e consulta.

**Arquitetura do EducaMinas**


Para fornecer uma visão clara de como esses componentes interagem e se integram no sistema, o diagrama abaixo ilustra a arquitetura geral do EducaMinas. Nele, é possível visualizar o fluxo de dados e a relação entre cada um dos componentes descritos acima, desde a coleta de dados no INEP até a apresentação dos resultados para o usuário final.


<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVKlmE_38=/?pres=1&frameId=3458764598132571083&embedId=234049125435" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

---

**Descrição dos componentes**

A seguir, apresentamos uma visão detalhada de cada componente do **EducaMinas**. As escolhas tecnológicas feitas para cada parte do sistema refletem o compromisso da equipe de desenvolvimento em utilizar soluções modernas e eficientes, assegurando robustez e facilidade de manutenção.


## Frontend

O **frontend** é interface visual do EducaMinas, composto por três páginas principais, organiza em gráficos os dados coletados.

**Tecnologias utilizadas:**

- **Next.js:** Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos, proporcionando uma performance melhorada e SEO otimizado.
- **Tailwind CSS:** Framework de utilitários CSS que permite um design responsivo e customizável.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript, aumentando segurança e previsibilidade do código.
- **Axios:** Biblioteca para requisições HTTP, estabelecendo a comunicação com a API.
- **Vitest:** Ferramenta de testes unitários JavaScript, permitindo a execução rápida e eficiente dos testes.
- **Testing Library:** Conjunto de utilitários que possibilita renderizar os componentes em ambiente de teste.
- **ESLint:** Ferramenta de linting que identifica e corrige problemas de estilo e padrões no código, garantindo a qualidade e consistência.
- **Sonner:** Biblioteca para exibição de notificações na interface, tornando mensagens de erro e alertas amigáveis.
- **ApexCharts:** Biblioteca para criação de gráficos interativos e visualizações de dados, proporcionando uma apresentação rica e personalizável das informações.

---

## Backend/API

O **backend/API** é responsável pela busca, regras de negócio e tratamento dos dados. Para maior robustez e facilidade de manutenção, a API foi estruturada seguindo os princípios da **Clean Architecture**, dividida em três camadas principais:


- **Infrastructure:** Esta camada contém os elementos de infraestrutura necessários para a execução do sistema, incluindo a configuração do servidor, a conexão com o banco de dados, e a implementação dos serviços externos. Ela lida com as operações mais próximas ao sistema operacional e ao ambiente de execução.

- **Adapters:** Os adaptadores são responsáveis por fazer a ponte entre o mundo externo e o núcleo da aplicação. Eles transformam as entradas e saídas, adaptando-as para serem compreendidas pela camada de aplicação. Incluem controllers que recebem as requisições HTTP e repositórios que abstraem o acesso ao banco de dados.

- **Application:** Esta camada contém a lógica de negócio central do sistema. Ela orquestra as operações, aplica as regras de negócio e interage com as outras camadas através de interfaces definidas. O foco é garantir que as regras de negócio sejam cumpridas de maneira consistente e independente da tecnologia usada nas outras camadas. No EducaMinas, inclui os services.


<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVKP3cIXs=/?pres=1&frameId=3458764598125904430&embedId=919913081084" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>


**Tecnologias utilizadas:**

- **Express:** Framework para construção de APIs e servidores web em Node.js, facilitando a criação e gerenciamento de rotas.
- **Vitest:** Ferramenta de testes unitários JavaScript, permitindo a execução rápida e eficiente dos testes.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript, aumentando segurança e previsibilidade do código.
- **Nodemon:** Ferramenta que reinicia automaticamente o servidor Node.js quando mudanças são detectadas, agilizando o desenvolvimento.
- **ESLint:** Ferramenta de linting que identifica e corrige problemas de estilo e padrões no código, garantindo a qualidade e consistência.
- **Swagger:** Ferramenta para documentação interativa de APIs, permitindo a exploração e testes das rotas da API.
- **Supabase:** Plataforma de backend como serviço usada para conectar ao banco de dados PostgreSQL.

---

## Scraper

---

## ETL

---

## Banco de Dados

---