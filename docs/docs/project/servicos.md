# API

O **EducaMinas** possui 3 componentes de dados, que nomeiam as 3 rotas da API:

- Gráfico de Matrículas,
- Gráfico de Indicadores,
- Ranking de desigualdade.

As rotas foram desenvolvidas sob medida para os parâmetros que os gráficos esperam, já retornando as series e categories devidamente formatadas para sua composição, quando é o caso.

---

Acesse a API do **EducaMinas** em produção:

```bash
https://2024-1-educa-minas-backend.vercel.app/
```

Se preferir, clique aqui: [**API EducaMinas**](https://2024-1-educa-minas-backend.vercel.app/)

---

## Documentação Swagger

A documentação da API do **EducaMinas** no Swagger está disponível apenas em ambiente local.

Para utilizá-la, veja a guia [**Como contribuir**](../contributing-backend.md) para executar a API em sua máquina, e então acesse:

```bash
http://localhost:3001/api-docs
```

---

## Gráfico de Matrículas

### Rota

Essa rota requer dois parâmetros: municipio e etapa.

```bash
https://2024-1-educa-minas-backend.vercel.app/api/matriculas?municipio=1&etapa=Todos
```

**municipio:**

Para filtrar por município, basta enviar o código referente ao município pretendido:

| Município              | Código      |
|------------------------|-------------|
| Todos (Minas Gerais)   | 1           |
| Município específico   | [Código IBGE](https://www.ibge.gov.br/explica/codigos-dos-municipios.php#MG) |


**etapa:**

Para filtrar por etapa de ensino, basta enviar o código referente à etapa pretendida:

| Etapa                  | Código      |
|------------------------|-------------|
| Ensino Fundamental 1   | EF1         |
| Ensino Fundamental 2   | EF2         |
| Ensino Médio           | EM          |
| Todos                  | Todos       |


### Retorno

Essa rota retorna o número de matrículas de brancos e pretos/pardos em determinado ano e rede de ensino, de acordo com o município e etapa passados na requisição:

```typescript
// https://2024-1-educa-minas-backend.vercel.app/api/matriculas?municipio=1&etapa=Todos

data: {
  series: [
    {
      name: "Pretos/Pardos",
      data: [1516218, 78829, 1501136, 79019, 1532561, 88808, 1507572, 88374] // Valores para Pretos/Pardos ordenados conforme categories
    },
    {
      name: "Brancos",
      data: [878138, 218279, 868097, 220306, 858840, 233891, 841327, 231185] // Valores para Brancos ordenados conforme categories
    }
  ],
  categories: [
    "2020 Pública", // Ano e Rede
    "2020 Privada",
    "2021 Pública",
    "2021 Privada",
    "2022 Pública",
    "2022 Privada",
    "2023 Pública",
    "2023 Privada"
  ]
}
```

---

## Gráfico de Indicadores

### Rota

Essa rota requer quatro parâmetros: indicador, municipio, etapa e rede.

```bash
https://2024-1-educa-minas-backend.vercel.app/api/indicador?indicador=reprovacao&municipio=1&etapa=Todos&rede=Publica
```

**indicador:**

Para filtrar por indicador, basta enviar o código referente ao indicador pretendido:

| Indicador              | Código      |
|------------------------|-------------|
| Reprovação             | reprovacao  |
| Evasão                 | evasao      |
| Atraso Escolar         | atraso      |

**rede:**

Para filtrar por rede de ensino, basta enviar o código referente à rede pretendida:

| Rede                                       | Código      |
|--------------------------------------------|-------------|
| Pública (Municipal + Estadual + Federal)   | publica     |
| Privada                                    |  privada    |


**municipio:**

Para filtrar por município, basta enviar o código referente ao município pretendido:

| Município              | Código      |
|------------------------|-------------|
| Todos (Minas Gerais)   | 1           |
| Município específico   | [Código IBGE](https://www.ibge.gov.br/explica/codigos-dos-municipios.php#MG) |


**etapa:**

Para filtrar por etapa, basta enviar o código referente à etapa pretendida:

| Etapa                  | Código      |
|------------------------|-------------|
| Ensino Fundamental 1   | EF1         |
| Ensino Fundamental 2   | EF2         |
| Ensino Médio           | EM          |
| Todos                  | Todos       |

### Retorno

Essa rota retorna a porcentagem de brancos e pretos/pardos em determinado ano, de acordo com o município, etapa, rede e indicador passados na requisição:

```typescript
// https://2024-1-educa-minas-backend.vercel.app/api/indicador?municipio=1&etapa=Todos&rede=publica&indicador=evasao

data: {
  series: [
    {
      name: "Brancos", // Raça/cor
      data: [12, 23, 33, 13, 54] // Valores para Brancos ordenados conforme os anos em Categories
    },
    {
      name: "Pretos/Pardos", // Raça/cor
      data: [46, 65, 76, 34, 38] // Valores para Pretos/Pardos ordenados conforme os anos em Categories
    }
  ],
  categories: [2019, 2020, 2021, 2022, 2023] // Anos disponíveis
}
```


---

## Ranking de desigualdade

### Rota

Essa rota requer dois parâmetros: ano e etapa.

```bash
https://2024-1-educa-minas-backend.vercel.app/api/ranking?etapa=Todos&ano=2020
```

**ano:**

Para filtrar por ano, basta enviar o ano pretendido:

| Ano     |
|---------|
| 2020    |
| 2021    |
| 2022    |
| 2023    |

**etapa:**

Para filtrar por etapa, basta enviar o código referente à etapa pretendida:

| Etapa                  | Código      |
|------------------------|-------------|
| Ensino Fundamental 1   | EF1         |
| Ensino Fundamental 2   | EF2         |
| Ensino Médio           | EM          |
| Todos                  | Todos       |

### Retorno

Essa rota retorna um índice de desigualdade para cada município, em determinado ano e etapa:

```typescript
// https://2024-1-educa-minas-backend.vercel.app/api/ranking?etapa=Todos&ano=2020

data: [
  {
    name: "Belo Horizonte", // Nome do município
    value: 84 // Valor do índice
  },
  {
    name: "Patos de Minas",
    value: 95
  },
  {
    name: "Uberlândia",
    value: 31
  },
  {
    name: "Santana de Cataguases",
    value: 98
  }
]
```