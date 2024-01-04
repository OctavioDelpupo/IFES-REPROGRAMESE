# Promises

Vamos criar um exercício prático simples para entender o conceito de Promises em JavaScript.
Suponha que temos uma função baixarConteudoPromisse que simula o download de um conteúdo
da internet, mas desta vez, utilizaremos Promises

Neste exemplo, a função baixarConteudoPromisse retorna uma Promise que representa o
download do conteúdo. A Promise é resolvida se o download for bem-sucedido e rejeitada se
ocorrer algum erro.

Ao usar .then e .catch, podemos tratar o resultado da Promise. Se a Promise for resolvida, o código
dentro do .then é executado. Se a Promise for rejeitada, o código dentro do .catch é executado.
Além disso, podemos encadear várias Promises sequencialmente usando vários blocos .then, o que
proporciona um código mais limpo e legível para operações assíncronas.

# Resolução

![](../../assets/Promises.gif)
