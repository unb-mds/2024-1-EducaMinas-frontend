
# Histórias de usuário

| ID  |  Eu, como   |    Quero / Preciso / Devo / Gostaria de     |                         Para                         | Must/Could |
|-----|-------------|---------------------------------------------|------------------------------------------------------|------------|
| US1 | Usuário     | Acessar desktop                             | Ter visualização ampla                               | Must       |
| US2 | Usuário     | Acessar mobile                              | Ter maior praticidade                                | Must       |
| US3 | Usuário     | Visualizar conjunto de páginas com gráficos |                      Visualizar os dados             | Must       |
| US4 | Usuário     | Deslizar pelo feed                          | Visualizar as informações de forma dinâmica          | Must       |
| US5 | Usuário     | Navegar com sumário                         | Facilitar navegação                                  | Could      |
| US6 | Usuário     | Rolar todo o feed para cima                 | Otimizar o tempo                                     | Could      |
| US7 | Usuário     | Visualizar rankings de municípios           | Comparar as informações entre os municípios          | Must       |
| US8 | Usuário     | Interagir com os gráficos                   | Compreender as informações                           | Must       |
| US9 | Usuário     | Comparar por meio de gráficos               | Ressignificar as informações                         | Must       |
| US10| Usuário     | Visualizar tendências                       | Projetar o desenvolvimento da educação               | Could      |
| US11| Usuário     | Saber a fonte dos dados                     | Ter maior confiabilidade                             | Must       |
| US12| Usuário     | Visualizar dados atualizados                | Me manter atualizado                                 | Could      |
| US13| Usuário     | Filtrar por período/ano, município, rede e etapa de ensino, cor/raça, sexo, localidade, subcategorias  | Visualizar dados específicos                                                                                                              | Must      |
| US14| Usuário     | Visualizar a motivação do projeto           | Me iterar sobre a iniciativa                         | Could      |
| US15| Usuário     | Entender como contribuir                    | Fazer possíveis contribuições                        | Could      |
| US16| Usuário     | Entender metodologia                        | Conhecer o processo ágil                             | Could      |
| US17| Usuário     | Visualizar o código                         | Colaborar com o desenvolvimento                      | Could      |
| US18| Usuário     | Entender quem está por trás do projeto      | Conectar e comunicar                                 | Could      |




# Requisitos

### Requisitos Funcionais

|   ID   |                                 Reequisito Funcional                                     |       Referência       |
|--------|------------------------------------------------------------------------------------------|------------------------|
| RF01   | O software deve possibilitar a comparação entre dados                                    | US9                    |
| RF02   | O software deve possibilitar a filtragem de dados                                        | US13                   |
| RF03   | O software deve disponibilizar os gráficos em feed                                       | US3, US4, US5, US6, US8|
| RF04   | O software deve possibilitar a visualização dos rankings de municípios                   | US7                    |
| RF05   | O software deve possibilitar a visualização de tendências                                | US10                   |
| RF06   | O software deve exibir dados confiáveis                                                  | US11, US12             |




### Requisitos Não Funcionais

|   ID   |   Tipo           |                  Requisito não funcional                                   |     Referência    |
|--------|------------------|----------------------------------------------------------------------------|-------------------|
| RNF01  | Usabilidade      | O software deve ser responsivo                                             | US1, US2          |
| RNF02  | Manutenibilidade | O software deve possibilitar modificações de forma simples                 | US15, US17, US1/8 |
| RNF03  | Desempenho       | O software deve processar dados com eficiência                             | US13              |
| RNF04  | Usabilidade      | O software deve ser autoexplicativo                                        | US14, US16        |
| RNF05  | Confiabilidade   | O software deve ser confiável                                              | US11              |
| RNF06  | Manutenibilidade | O software deve se manter atualizado                                       | US12              |


