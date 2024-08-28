# Histórias de usuário

As histórias de usuário desempenham papel fundamental na concepção de um projeto robusto e bem planejado, definindo com clareza as funcionalidades obrigatórias e desejáveis a partir da experiência de um usuário do **EducaMinas**.

Possíveis usuários do **EducaMinas** estão descritos na guia [Personas](personas.md).

O quadro que ilustra as Histórias de Usuário pode ser visualizado na guia [StoryMap](storymap.md).

| ID  |  Eu, como   |    Quero / Preciso / Devo / Gostaria de     |                         Para                         | Teor |
|-----|-------------|---------------------------------------------|------------------------------------------------------|------------|
| US1 | Usuário     | Acessar desktop                             | Ter visualização ampla                               | Obrigatório       |
| US2 | Usuário     | Acessar mobile                              | Ter maior praticidade                                | Obrigatório       |
| US3 | Usuário     | Visualizar páginas com gráficos             |                      Visualizar os dados             | Obrigatório       |
| US4 | Usuário     | Deslizar pelo feed                          | Visualizar as informações de forma dinâmica          | Obrigatório       |
| US5 | Usuário     | Visualizar rankings de municípios           | Comparar as informações entre os municípios          | Obrigatório       |
| US6 | Usuário     | Interagir com os gráficos                   | Compreender as informações                           | Obrigatório       |
| US7 | Usuário     | Comparar por meio de gráficos               | Ressignificar as informações                         | Obrigatório       |
| US8| Usuário     | Saber a fonte dos dados                     | Ter maior confiabilidade                             | Obrigatório       |
| US9| Usuário     | Visualizar dados atualizados                | Me manter atualizado                                 | Desejável      |
| US10| Usuário     | Filtrar por ano, município, rede e etapa de ensino, cor/raça  | Visualizar dados específicos  | Obrigatório      |
| US11| Usuário     | Visualizar a motivação do projeto           | Me iterar sbre a iniciativa                         | Desejável      |
| US12| Usuário     | Entender como contribuir                    | Fazer possíveis contribuições                        | Desejável      |
| US13| Usuário     | Entender metodologia                        | Conhecer o processo ágil                             | Desejável      |
| US14| Usuário     | Visualizar o código                         | Colaborar com o desenvolvimento                      | Desejável      |
| US15| Usuário     | Entender quem está por trás do projeto      | Conectar e comunicar                                 | Desejável      |


---

# Requisitos

O levantamento de requisitos, em conjunto com as histórias de usuário, definem de modo preciso as funcionalidades disponíveis ao usuário(Requisitos Funcionais) e aquelas relacionadas à qualidade do software(Requisitos Não Funcionais).

---

## Requisitos Funcionais

|   ID   |                                 Reequisito Funcional                                     |       Referência       |
|--------|------------------------------------------------------------------------------------------|------------------------|
| RF01   | O software deve possibilitar a comparação entre dados                                    | US5, US7                |
| RF02   | O software deve possibilitar a filtragem de dados                                        | US10                   |
| RF03   | O software deve disponibilizar os gráficos em feed                                       | US3, US4, US6, US7     |
| RF04   | O software deve possibilitar a visualização dos rankings de municípios                   | US5                    |
| RF05   | O software deve exibir dados confiáveis                                                  | US8, US9             |


---

## Requisitos Não Funcionais

|   ID   |   Tipo           |                  Requisito não funcional                                   |     Referência    |
|--------|------------------|----------------------------------------------------------------------------|-------------------|
| RNF01  | Usabilidade      | O software deve ser responsivo                                             | US1, US2          |
| RNF02  | Manutenibilidade | O software deve possibilitar modificações de forma simples                 | US12, US14 |
| RNF03  | Usabilidade      | O software deve ser autoexplicativo                                        | US13, US14, US12, US11        |
| RNF04  | Confiabilidade   | O software deve ser confiável                                              | US8              |
| RNF05  | Manutenibilidade | O software deve se manter atualizado                                       | US9              |


