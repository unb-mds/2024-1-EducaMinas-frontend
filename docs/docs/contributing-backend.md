# Primeiros passos - BACKEND

**Antes de começar a contribuir de fato, veja o guia [Ambiente de Desenvolvimento](environment.md) para configurá-lo corretamente.**

---

Guia para o [**Repositório backend**](https://github.com/unb-mds/2024-1-EducaMinas-backend).

Você pode contribuir com o **EducaMinas** de duas formas: **Relatando um problema** e **Implementando uma funcionalidade**.

## **Relatando um problema**

- Para relatar poblemas no código, abra uma nova issue em nosso [**repositório backend**](https://github.com/unb-mds/2024-1-EducaMinas-backend) no GitHub, com o template **Bug report** e com o _label_ de `bug`.
- Verifique se já existe alguma issue que reporte o problema encontrado.
- Preencha as informações solicitadas pelo template.
- Para relatar problemas na documentação, siga os mesmos passos acima, adicionando o _label_ de `docs`.

---

## **Implementando uma funcionalidade**

Verifique as [**issues do backend**](https://github.com/unb-mds/2024-1-EducaMinas-backend/issues) abertas para encontrar alguma tarefa a ser realizada.

### **Clonar o Repositório**

Para clonar o repositório em um diretório de sua máquina, abra o terminal e execute:

```bash
git clone https://github.com/unb-mds/2024-1-EducaMinas-backend.git
```

### **Instalar dependências**

#### **Express/API**

Navegue até o diretório raiz do repositório clonado:

```bash
cd 2024-1-EducaMinas-backend
```
Em seguida instale as dependências do EducaMinas:

```bash
npm install
```

#### **Scraper**

Navegue até o diretório `WebScrapper`:

```bash
cd WebScrapper
```
Crie um ambiente virtual com conda:

```bash
conda create --name <my-env>
```

Ative o ambiente criado:

```bash
conda activate <my-env>
```

Instale as dependências e bibliotecas dentro do ambiente virtual:

```bash
conda install --yes --file requirements.txt
```

O script ETL acessa o banco de dados por meio de um `.env` encontrado no caminho
`WebScrapper/DataETL/.env`. A sua estrutura está escrita abaixo:

```bash
DATABASE_USERNAME=<INSERIR AQUI>
DATABASE_PASSWORD=<INSERIR AQUI>
DATABASE_NAME=<INSERIR AQUI>
DATABASE_PORT=<INSERIR AQUI>
DATABASE_HOST=<INSERIR AQUI>
```


### **Criar uma nova Branch**

A partir da branch padrão develop, crie uma nova branch para trabalhar nas modificações, executando:

```bash
git checkout -b feature/nome-da-issue
```

Faça as alterações para implementar a tarefa.

### **Executando**

#### **Express/API**

Para executar a aplicação Express em sua máquina, execute no diretório raiz:

```bash
npm run start
```
O servidor será inicializado e estará disponível na porta 3001 do localhost:

```bash
http://localhost:3001/
```

Demais comandos para execução de testes, builds e linter podem ser encontrados na guia _scripts_  do arquivo `package.json` na pasta raiz.

Com a api rodando localmente é possível acessar sua documentação e testá-la no **Swagger**, basta acessar:

```bash
http://localhost:3001/api-docs
```

#### **Scraper**

Com o ambiente ativado como instruído acima, para extrair os dados do Oracle Data com o selenium execute:

```bash
DataScraper/InepScrapper.py
```

#### **ETL**

Para tratar e carregar os dados extraídos, em modo debugger, acesse `WebScrapper/DataETL`, lembre-se de selecionar o ambiente conda que foi criado, e então para rodar o programa por partes, execute:

```bash
ETLDebugger.ipynb
```

Se preferir, e não precisar/quiser rodar em modo debugger(por partes), execute o código para produção:

```bash
python3 WebSrapper/DataETL/main.py
```

## **Commitar mudanças**

Adicione as alterações feitas:

```bash
git add nome-dos-arquivos-alterados
```

Commite as alterações seguindo o padrão das [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/), com a seguinte estrutura:

```bash
git commit -m "tipo(#idIssue): descrição"
```

## **Abrir um Pull Request**

Após fazer seus commits, empurre a branch para o repositório remoto:

```bash
git push origin nome-da-sua-branch
```

No GitHub, abra um Pull Request, e preencha o **template** disponível para descrever suas implementações.

## **Revisão e Merge**

O **EducaMinas** conta com três validações padrão para os Pull Requests. Assim, é necessário atendê-las para que sua solicitação seja considerada:

- **Qualidade:** São executados os testes, linter e build para validação básica da qualidade do código.
- **Cobertura:** A cobertura dos testes é comparada com a cobertura atual, e não deve ser menor.
- **Review:** Para aprovação, é necessário que ao menos um desenvolvedor faça o code review.

Após a aprovação, o Pull Request será mergeado e suas implementações serão incorporadas ao **EducaMinas**!

---
