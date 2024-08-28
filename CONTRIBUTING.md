# Primeiros passos - FRONTEND

**Antes de começar a contribuir de fato, veja o guia [Ambiente de Desenvolvimento](https://unb-mds.github.io/2024-1-EducaMinas-frontend/environment/) para configurá-lo corretamente.**

---

Guia para o [**Repositório Frontend**](https://github.com/unb-mds/2024-1-EducaMinas-frontend).

Você pode contribuir com o **EducaMinas** de duas formas: **Relatando um problema** e **Implementando uma funcionalidade**.

## **Relatando um problema**

- Para relatar poblemas no código, abra uma nova issue em nosso [**repositório frontend**](https://github.com/unb-mds/2024-1-EducaMinas-frontend) no GitHub, com o template **Bug report** e com o _label_ de `bug`.
- Verifique se já existe alguma issue que reporte o problema encontrado.
- Preencha as informações solicitadas pelo template.
- Para relatar problemas na documentação, siga os mesmos passos acima, adicionando o _label_ de `docs`.

---

## **Implementando uma funcionalidade**

Verifique as [**issues do frontend**](https://github.com/unb-mds/2024-1-EducaMinas-frontend/issues) abertas para encontrar alguma tarefa a ser realizada.

### **Clonar o Repositório**

Para clonar o repositório em um diretório de sua máquina, abra o terminal e execute:

```bash
git clone https://github.com/unb-mds/2024-1-EducaMinas-frontend.git
```

### **Instalar dependências**

#### **Next.js**

Navegue até o diretório raiz do repositório clonado:

```bash
cd 2024-1-EducaMinas-frontend
```
Em seguida instale as dependências do EducaMinas:

```bash
npm install
```

#### **MkDocs**

Navegue até o diretório `docs` localizado dentro da raiz:

```bash
cd docs
```
Instale as dependências da Documentação do EducaMinas:

```bash
pip install mkdocs mkdocs-material
```

### **Criar uma nova Branch**

A partir da branch padrão develop, crie uma nova branch para trabalhar nas modificações, executando:

```bash
git checkout -b feature/nome-da-issue
```

Faça as alterações para implementar a tarefa.

### **Executando**

#### **Next.js**

Para executar a aplicação Next em sua máquina, execute no diretório raiz:

```bash
npm run dev
```
O servidor será inicializado e estará disponível na porta 3000 do localhost:

```bash
http://localhost:3000/
```

Demais comandos para execução de testes, builds e linter podem ser encontrados na guia _scripts_  do arquivo `package.json` na pasta raiz.

No arquivo `.env` na raiz, é possível alternar a conexão com a API, por padrão, a conexão é feita com a API em produção, mas se você estiver executando localmente o **backend**, pode alternar para a url disponível com `localhost`.

#### **MkDocs**

Para executar a aplicação MkDocs em sua máquina, navegue até a pasta `docs`:

```bash
cd docs
```
Inicialize:

```bash
mkdocs serve
```
O servidor será inicializado e estará disponível em:

```bash
http://127.0.0.1:8000/
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

O **EducaMinas** conta com quatro validações padrão para os Pull Requests. Assim, é necessário atendê-las para que sua solicitação seja considerada:

- **Qualidade:** São executados os testes, linter e build para validação básica da qualidade do código.
- **Cobertura:** A cobertura dos testes é comparada com a cobertura atual, e não deve ser menor.
- **Preview Deployment:** É feito um deployment de preview para melhor visualização das alterações na interface.
- **Review:** Para aprovação, é necessário que ao menos um desenvolvedor faça o code review.

Após a aprovação, o Pull Request será mergeado e suas implementações serão incorporadas ao **EducaMinas**!

---
