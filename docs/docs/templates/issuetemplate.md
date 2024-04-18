## Introdução

Para seguirmos um padrão e manter o desenvolvimento organizado, utilizaremos um modelo padrão para desenvolver a aplicação.

## Tarefas

- As tarefas destinadas a cada um ficarão disponíveis na aba Issues.

- Para cada tarefa a ser realizada, crie uma nova branch a partir da branch develop, que utilizaremos como default durante todo o desenvolvimento.

### 1 - Criando uma branch para a tarefa

Primeiro, estando na branch develop, sincronizamos a remota com a local:
```
git pull origin develop
```
Depois, criamos a nova branch a partir da develop, observe que utilizaremos o ID da tarefa(Issue) para identificar a branch. Siga sempre o formato a seguir, substituindo id e nome-da-issue pelos dados da tarefa no github:
```
git checkout -b feature-#id/nome-da-issue
```

### Adicionando e commitando modificações

Já na nova branch, as alterações no código podem ser feitas. A cada nova funcionalidade implementada, adicione os arquivos alterados:

```
git add nome-do-arquivo-modificado
OU
git add . (adiciona todos os arquivos modificados)
```
Em seguida, com os arquivos adicionados, comite utilizando os prefixos da "Conventional Commits", e entre parênteses, o id da issue relacionada, o mesmo da branch que você criou:
```
git commit -m "feat(#id): descrição do que o commit faz, em inglês"

```
Observe alguns prefixos da Conventional Commits:

 - test: indica qualquer tipo de criação ou alteração de códigos de teste. Exemplo: Criação de testes unitários.
 - feat: indica o desenvolvimento de uma nova feature ao projeto. Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.
 - refactor: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. Exemplo: Mudanças de código após um code review
 - style: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
 - fix: utilizado quando há correção de erros que estão gerando bugs no sistema.
Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
 - chore: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
Exemplo: Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
 - docs: usado quando há mudanças na documentação do projeto.
Exemplo: adicionar informações na documentação da API, mudar o README, etc.
 - build: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
Exemplo: Gulp, adicionar/remover dependências do npm, etc.
 - perf: indica uma alteração que melhorou a performance do sistema.
Exemplo: alterar ForEach por while, melhorar a query ao banco, etc.
 - ci: utilizada para mudanças nos arquivos de configuração de CI.
Exemplo: Circle, Travis, BrowserStack, etc.
 - revert: indica a reverão de um commit anterior.

Adicione e commite o quanto necessário para concluir a tarefa. Divida a tarefa em vários commits.

### Subindo a branch com as modificações para o github

Após concluir a tarefa e ter todas as alterações devidamente commitadas na branch que você criou, suba a branch para o repositório remoto e abra um pull request:
```
git push origin nome-da-branch-que-voce-criou

```
Após executar esse comando, espere o git retornar um link, que te direcionará para o github, ou apenas entre no github pelo seu navegador.

Na página do github, adicione algum reviwer para analisar seu pull request no canto superior direito, e então clique em 'open pull request'

### Retornando para a develop

Após seu pull request ser aceito e o merge ser realizado, no terminal, volte para a branch develop:

```
git checkout develop
```
Depois, atualize seu repositório local com as alterações que foram mergeadas:

```
git pull origin develop
```