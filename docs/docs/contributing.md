Para contribuir com o projeto:

## **Relatar um problema**

- Para relatar poblemas no código, abra uma nova issue em nosso [repositório](https://github.com/unb-mds/2024-1-EducaMinas-frontend) no GitHub, com o template [Bug report](template/issuetemplate.md) e com o _label_ de `bug`.
- Verifique se já existe alguma issue que reporte o problema encontrado.
- Seja o mais descritivo possível.

- Para relatar problemas na documentação, siga os mesmos passos acima, adicionando o _label_ de `docs`.

<!--
**Propor novas funcionalidades:**

- Para propor uma melhoria ou nova funcionalidade, abra uma issue com um template especifico a ser criado ainda -->

---

## **Implementar**

### **Verificar as Issues**

Verifique as [issues](https://github.com/unb-mds/2024-1-EducaMinas-frontend/issues) abertas para encontrar alguma tarefa a ser realizada.

### **Clonar o Repositório**

Clone o repositório para sua máquina local executando:

```bash
git clone https://github.com/unb-mds/2024-1-EducaMinas-frontend.git
```

### **Instalar pré-requisitos**

O projeto tem como dependências globais que precisam estar instaladas na máquina:

- Node v20.12.2 ou superior
- Npm v9.0.0 ou superior

### **Instalar dependências**

Para instalar as dependências específicas do projeto, navegue até o diretório raiz do repositório clonado e execute o npm para instalar os pacotes:

```bash
cd 2024-1-EducaMinas-frontend
```

```bash
npm install
```

### **Criar uma nova Branch**

A partir da branch padrão develop, crie uma nova branch para trabalhar nas modificações, executando:

```bash
git checkout -b feature/nome-da-issue
```

Faça as alterações para implementar a tarefa

### **Commitar mudanças**

Adicione as alterações feitas:

```bash
git add nome-dos-arquivos-alterados
```

Commite as alterações seguindo o padrão das [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), com a seguinte estrutura:

```bash
git commit -m "tipo(#idIssue): descrição"
```

### **Abrir um Pull Request**

Após fazer seus commits, empurre a branch para o repositório remoto e abra um Pull Request, de acordo com o [template](template/prTemplate.md) disponível para descrever suas alterações:

```bash
git push origin nome-da-sua-branch
```

### **Revisão e Merge**

Aguarde a revisão do seu Pull Request pela equipe, e caso necessário, realize as alterações necessárias.

Após a aprovação, o Pull Request será mergeado e suas implementações serão incorporadas ao projeto!

---
