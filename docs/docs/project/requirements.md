# Histórias de usuário

As histórias de usuário desempenham papel fundamental na concepção de um projeto robusto e bem planejado, definindo com clareza as funcionalidades obrigatórias e desejáveis a partir da experiência de um usuário da aplicação.

Possíveis usuários dessa aplicação estão descritos na guia [Personas](personas.md).

O quadro que ilustra as Histórias de Usuário pode ser visualizado na guia [StoryMap](storymap.md).

| ID  |  Eu, como   |    Quero / Preciso / Devo / Gostaria de     |                         Para                         | Teor |
|-----|-------------|---------------------------------------------|------------------------------------------------------|------------|
| US1 | Usuário     | Acessar desktop                             | Ter visualização ampla                               | Obrigatório       |
| US2 | Usuário     | Acessar mobile                              | Ter maior praticidade                                | Obrigatório       |
| US3 | Usuário     | Visualizar conjunto de páginas com gráficos |                      Visualizar os dados             | Obrigatório       |
| US4 | Usuário     | Deslizar pelo feed                          | Visualizar as informações de forma dinâmica          | Obrigatório       |
| US5 | Usuário     | Navegar com sumário                         | Facilitar navegação                                  | Desejável      |
| US6 | Usuário     | Rolar todo o feed para cima                 | Otimizar o tempo                                     | Desejável      |
| US7 | Usuário     | Visualizar rankings de municípios           | Comparar as informações entre os municípios          | Obrigatório       |
| US8 | Usuário     | Interagir com os gráficos                   | Compreender as informações                           | Obrigatório       |
| US9 | Usuário     | Comparar por meio de gráficos               | Ressignificar as informações                         | Obrigatório       |
| US10| Usuário     | Visualizar tendências                       | Projetar o desenvolvimento da educação               | Desejável      |
| US11| Usuário     | Saber a fonte dos dados                     | Ter maior confiabilidade                             | Obrigatório       |
| US12| Usuário     | Visualizar dados atualizados                | Me manter atualizado                                 | Desejável      |
| US13| Usuário     | Filtrar por período/ano, município, rede e etapa de ensino, cor/raça, sexo, localidade, subcategorias  | Visualizar dados específicos                                                                                                              | Obrigatório      |
| US14| Usuário     | Visualizar a motivação do projeto           | Me iterar sobre a iniciativa                         | Desejável      |
| US15| Usuário     | Entender como contribuir                    | Fazer possíveis contribuições                        | Desejável      |
| US16| Usuário     | Entender metodologia                        | Conhecer o processo ágil                             | Desejável      |
| US17| Usuário     | Visualizar o código                         | Colaborar com o desenvolvimento                      | Desejável      |
| US18| Usuário     | Entender quem está por trás do projeto      | Conectar e comunicar                                 | Desejável      |


---

# Requisitos

O levantamento de requisitos, em conjunto com as histórias de usuário, definem de modo preciso as funcionalidades disponíveis ao usuário(Requisitos Funcionais) e aquelas relacionadas à qualidade do software(Requisitos Não Funcionais).

---

## Requisitos Funcionais

|   ID   |                                 Reequisito Funcional                                     |       Referência       |
|--------|------------------------------------------------------------------------------------------|------------------------|
| RF01   | O software deve possibilitar a comparação entre dados                                    | US9                    |
| RF02   | O software deve possibilitar a filtragem de dados                                        | US13                   |
| RF03   | O software deve disponibilizar os gráficos em feed                                       | US3, US4, US5, US6, US8|
| RF04   | O software deve possibilitar a visualização dos rankings de municípios                   | US7                    |
| RF05   | O software deve possibilitar a visualização de tendências                                | US10                   |
| RF06   | O software deve exibir dados confiáveis                                                  | US11, US12             |


---

## Requisitos Não Funcionais

|   ID   |   Tipo           |                  Requisito não funcional                                   |     Referência    |
|--------|------------------|----------------------------------------------------------------------------|-------------------|
| RNF01  | Usabilidade      | O software deve ser responsivo                                             | US1, US2          |
| RNF02  | Manutenibilidade | O software deve possibilitar modificações de forma simples                 | US15, US17, US1/8 |
| RNF03  | Desempenho       | O software deve processar dados com eficiência                             | US13              |
| RNF04  | Usabilidade      | O software deve ser autoexplicativo                                        | US14, US16        |
| RNF05  | Confiabilidade   | O software deve ser confiável                                              | US11              |
| RNF06  | Manutenibilidade | O software deve se manter atualizado                                       | US12              |


