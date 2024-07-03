# Arquitetura

<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVKP3cIXs=/?pres=1&frameId=3458764586923416227&embedId=890096952393" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

---

# Tecnologias

## Coleta de Dados e Atualização de Conteúdos

1. **Selenium**: Uma ferramenta que permite controlar um navegador web automaticamente. É útil quando o conteúdo de uma página web é carregado dinamicamente por meio de JavaScript.
2. **Requests**: Uma biblioteca Python simples e elegante para fazer requisições HTTP. Embora não seja específica para scraping, é frequentemente utilizada para baixar o conteúdo HTML das páginas a serem analisadas.
3. **XPath**: Uma linguagem de consulta usada para extrair dados de documentos XML ou HTML. Pode ser usada em conjunto com outras ferramentas de scraping para selecionar elementos específicos em uma página web.
4. **Regex (Expressões Regulares)**: Embora seja mais uma técnica do que uma tecnologia específica, as expressões regulares são amplamente usadas para encontrar padrões específicos nos dados extraídos.
5. **Proxy Services**: Em alguns casos, o uso de proxies é necessário para evitar bloqueios e limitações impostas por sites durante o scraping em grande escala.


## Processamento e Análise de Dados

- **Python**: Linguagem de programação popular para análise de dados.
    - **Pandas**: Biblioteca Python para manipulação e análise de dados estruturados, oferecendo poderosas ferramentas de processamento de dados.
    - **NumPy**: Biblioteca essencial para computação numérica em Python, útil para operações matemáticas eficientes em grandes conjuntos de dados.

## Segurança

- **Validação de Dados**: Validar os dados obtidos do web scraping para garantir integridade e segurança. Isso pode incluir filtragem de caracteres maliciosos ou inesperados que possam ser inseridos nos dados.
- **Tratamento de Erros**: Implementar mecanismos para lidar com erros durante o web scraping, como timeout de conexão ou respostas inesperadas dos servidores, de forma a evitar interrupções não planejadas ou vulnerabilidades.
- **Logs e Monitoramento**: Registrar e monitorar atividades de web scraping e acesso aos dados para identificar potenciais problemas de segurança ou anomalias.


## Backend:

### 1. Framework Web

- **Node.js**: Plataforma de execução de JavaScript no servidor, ideal para aplicações escaláveis e orientadas a eventos.
    - **Express.js**: Framework web minimalista e flexível para Node.js, utilizado para construir APIs RESTful e gerenciar rotas, middlewares e respostas HTTP.

### 2. Banco de Dados Relacional e ORM

- **PostgreSQL**: Banco de dados relacional robusto e altamente escalável, adequado para armazenamento e consulta eficiente de dados estruturados, como informações educacionais.
    - **Prisma**: ORM moderno e poderoso para Node.js, que simplifica o acesso ao banco de dados, oferece uma interface de tipo seguro e facilita a escrita de consultas SQL de forma declarativa.
        - **Prisma Client**: Biblioteca gerada automaticamente pelo Prisma com métodos para interagir com o banco de dados PostgreSQL de forma segura e eficiente.
- **Cache de Dados**: Estratégias de cache para armazenar dados temporários e reduzir a carga nos servidores durante picos de acesso.

### 3. API e Integrações

- **API RESTful**: Arquitetura para comunicação entre sistemas utilizando HTTP e princípios REST (Representational State Transfer).
    - **Express.js (Node.js)**: Utilizado para criar endpoints de API RESTful e gerenciar requisições HTTP.
    - **Axios (Node.js)**: Biblioteca para fazer requisições HTTP de forma fácil e eficiente a partir do Node.js.

### 4. Gerenciamento de Servidores

- **Docker**: Plataforma de contêineres que facilita a criação, implantação e execução de aplicativos em ambientes isolados.

### 5. Logging e Monitoramento

- **Winston (Node.js)**: Biblioteca para logging em aplicações Node.js, permitindo o registro de mensagens em diferentes níveis de severidade.
    - **Prometheus e Grafana**: Ferramentas populares para monitoramento de métricas e visualização de dados operacionais.

## Frontend:

1. **Next.js (v14)**:
    - Framework React baseado em JavaScript/TypeScript que facilita a criação de aplicativos web, oferecendo renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG).
    - Suporte a roteamento fácil, pré-renderização, otimização de desempenho e API integrada para construção de aplicativos web modernos.
2. **TypeScript**:
    - Superset tipado do JavaScript que fornece tipos estáticos opcionais para aumentar a robustez e a segurança do código.
    - Ajuda a identificar erros de programação mais cedo no desenvolvimento e oferece maior legibilidade e manutenibilidade.

### Visualização de Dados:

1. **ApexCharts**:
    - Biblioteca JavaScript para criação de gráficos e visualizações de dados interativas.
    - Oferece uma variedade de tipos de gráficos (como barras, linhas, pizza) e opções de personalização.

### Interação com o Usuário:

1. **React Hooks**:
    - Recurso do React que permite utilizar o estado e outras funcionalidades do React em componentes funcionais.
    - Usado para gerenciar o ciclo de vida dos componentes, estado local, efeitos colaterais e interações do usuário.
2. **React Router**:
    - Biblioteca para navegação declarativa e controle de rotas em aplicativos React.
    - Utilizado para definir e gerenciar a navegação entre diferentes páginas e componentes da aplicação.

### Integração com API REST:

1. **Axios**:
    - Biblioteca JavaScript/TypeScript para fazer requisições HTTP mais simples e eficientes.
    - Alternativa popular ao Fetch API, oferecendo funcionalidades adicionais como interceptores, cancelamento de requisições, etc.


## Sobre a Extração de Dados

### Web Scraping para Análise de Dados Educacionais

Neste tópico, descreveremos o processo de web scraping para extrair dados do Oracle BI do INEP Data. Esses dados serão utilizados para análise e estudos educacionais, abrangendo informações como extratos de pagamentos de gastos públicos na educação e índices educacionais, evasão, demografia escolar e outras métricas relevantes.

---

### 1. Oracle BI do INEP Data (Índices Educacionais, Demografia Escolar, etc.)

O Oracle BI do INEP Data oferece acesso a diversos dados educacionais importantes, como índices educacionais, evasão, demografia escolar, matrículas, docentes, instituições de ensino, entre outros. Para extrair esses dados, siga os passos a seguir: ### AQUI FICARÁ OS DIAGRAMAS QUE REPRESENTAM A EXTRAÇÃO DOS DADOS
