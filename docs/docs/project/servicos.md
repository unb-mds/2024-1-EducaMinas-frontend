# Serviços

Foi definido que nossa aplicação será constituída por 2 gráficos e 1 ranking, com cada um deles possuindo seus próprios filtros.

## Gráficos

O primeiro gráfico da página de pesquisa trata sobre o número total de matrículas em porcentagem, apenas entre brancos e pretos/pardos, na rede de ensino pública e privada nos últimos 4 anos, sendo capaz de filtrar por Município e Etapa de ensino.

Já o segundo gráfico nos mostra o índice da proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino, sendo possível, neste gráfico, filtrar por Município, Etapa de ensino e Indicadores ( Evasão, Atraso escolar e Reprovação).

O último componente da página de pesquisa é um ranking que classifica os municipios mineiros pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino. Este componente possui os filtros de Município, Etapa de ensino e pelo critério de maior ou menor, sendo a opção "maior" referente a uma ordem decrescente nas posições do ranking, em que o município que está na primeira posição é o que possui maior diferença entre o percentual de reprovações, e a opção "menor" apresenta uma ordem crescente em suas posições, dessa forma o município que ocupa a primeira posição possui a menor diferença percentual citada.

## Requisição

No front-end, será utilizado Axios, uma biblioteca para fazer requisições HTTP de forma fácil e eficiente, e 3 rotas para a busca de dados, nas quais os parâmetros utilizados irá depender do usuário, de acordo com o filtro desejado, e para cada seleção ou mudança no filtro, uma requisição para o gráfico em questão é feita. Dessa forma, a respeito do primeiro gráfico, a rota irá passar como parâmetro a opção selecionada pelo usuário nos filtros de Município e Etapa de ensino, e essa mesma lógica se aplica aos outros componentes da aplicação.

É importante frisar que o processamento de dados não será feito no front-end, a análise dos dados necessários será feita no back-end, a função do front-end será apenas carregar para o usuário o resultado desse requerimento.