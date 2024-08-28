# Sprint 11

Período: 31/07/2024 a 07/08/2024

---

**Confira o que foi desenvolvido:**

- **[Sprint 11 - Frontend](https://github.com/unb-mds/2024-1-EducaMinas-frontend/milestone/12?closed=1)**
- **[Sprint 11 - Backend](https://github.com/unb-mds/2024-1-EducaMinas-backend/milestone/5?closed=1)**

---

## Descrição

Nessa sprint o grupo definiu que iria implementar algumas correções para alinhamento entre o banco de dados e o frontend, como nomes passados como parâmetros nas rotas para as buscas. Além disso, no backend o service que não foi concluído na sprint anterior foi realocado para essa e no frontend foi determinada a elaboração de 'pop-ups' informativos para complementar a compreensão dos gráficos e aumentar a transparência do processo desde a coleta até a exibição dos dados.

---

## Objetivos

- Implementar os alinhamentos com o banco de dados em relação ao nome dos municípios e etapas de ensino. (frontend)
- Implementar o componente de pop-up informativo para os elementos gráficos.(frontend)
- Implementar o service faltante. (backend)
- Implentar um possível deploy e conexão com o banco de dados. (backend)

---

## Reuniões

### Reunião 1

Data: 31/07/2024

Local: UnB Gama

**Ata:**

Reunião de incialização da sprint, onde foi abordado o possível escopo da sprint para cada um dos subgrupos e foram definidos os objetivos a serem explorados em ambos durante a semana. Nessa reunião, foi feito um alinhamento minuncioso acerca dos nomes utilizados para as consultas no banco de dados, e dos dados que deveriam ser armazenados. Também foi testada a conexão do backend com o banco de dados, obtendo-se sucesso.

### Reunião 2


Data: 07/08/2024

Local: UnB Gama

**Ata:**

Reunião de fechamento da sprint, onde foram apresentadas as evoluções, dificuldades e conquistas da semana. Novamente, ambas as equipes apresentaram um avanço considerável.

---

## Finalização

Todos os objetivos propostos foram concluídos. No frontend, os filtros foram alinhados para corresponder com o banco de dados, também foi feita a conexão com o backend, e os dados passaram a ser recebidos por meio das requisições, ainda que estáticos, para testes. Também foi realizado o deploy na vercel, e a pipeline para deploy automático na branch main foi desenvolvida. Observou-se que seria necessário fazer um 'pente fino' no código do frontend, padronizando nomes de variáveis, funções, arquivos, adotando boas práticas de programação e conceitos de Clean Code, o que foi concluído com sucesso.

No backend também foi feito o deploy na vercel, e a pipeline foi configurada. A conexão com o banco de dados foi estabelecida com sucesso e o primeiro service de matrículas foi ajustado juntamente com seu repository para buscarem e tratarem os dados do banco de dados. Foram feitas as documentações das rotas com Swagger.

---
