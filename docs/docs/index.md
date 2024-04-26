# EducaMinas

Este é um projeto desenvolvido na disciplina Métodos de Desenvolvimento de Software (MDS)
ofertada no curso de Engenharia de Software na Universidade de Brasília (UnB), que visa reunir
em um só local dados sobre a Educação do estado de Minas Gerais, utilizando dados extraídos da pesquisa educacional realizada pelo INEP.

---

## Objetivo

Este projeto tem por objetivos: 

- Facilitar a visualização de dados complexos através de gráficos simples;
- Ressignificar os dados utilizando rankings e comparações entre diferentes indicadores;
- Possibilitar uma interpretação mais profunda dos dados, voltada para o lado social do ensino mineiro.

Para saber mais sobre as aplicações práticas do projeto, verifique as [Personas](project/personas.md) e os demais documentos na guia Projeto.

---

## Funcionalidades Previstas

- **Coleta de Dados e Atualização de Conteúdos:** Raspagem de dados do censo escolar do INEP.
- **Processamento de Dados:** Análises descritivas automáticas nos dados.
- **Segurança:**  Validação dos dados coletados por scraping e tratamento de erros.
- **Escalabilidade:** Arquitetura compatível com grandes fluxos de dados e expansão de código.
- **Visualização de Dados:** Interface em feed para a visualização gráfica dos dados coletados.
- **Pesquisa Avançada:** Possibilidade para os usuários realizarem pesquisas profundas, filtrando por período de tempo, atributos de ensino e atributos pessoais.

---

## Tecnologias Utilizadas

Este projeto possui dois repositórios, definindo e separando explicitamente o [frontend](https://github.com/unb-mds/2024-1-EducaMinas-frontend) e o [backend](https://github.com/unb-mds/2024-1-EducaMinas-backend).

Para visualizar a escolha das tecnologias: [Arquitetura](../docs/project/arquitetura.md)