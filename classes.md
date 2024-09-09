## Linguagem de Programação

Uma linguagem de programação é a forma como damos instruções a um computador para que ele execute tarefas. Podemos compará-la a um conjunto de peças de lego, onde cada peça representa uma instrução específica. Ao combinar essas peças, criamos algoritmos que resolvem problemas.

**Algoritmos**: Sequências lógicas e finitas de passos, projetadas para alcançar a solução de um problema de maneira clara e eficiente.

## Componentes de uma Linguagem de Programação

- **Comentários**: Anotações no código que não são executadas, usadas para descrever o que está acontecendo.
- **Declaração de variáveis**: Uso de `const` e `let` para armazenar valores.
- **Operadores**:
  - Atribuição.
  - Concatenação.
  - Operadores Matemáticos e Lógicos.
- **Tipos de dados**:
  - `string`.
  - `number`.
  - `boolean`.
- **Estruturas de dados**:
  - Funções (`functions`).
  - Objetos (`object`).
  - Arrays (`array`).
- **Controle de fluxo**: Uso de condicionais como `if/else` para direcionar o fluxo do programa.
- **Estruturas de repetição**: Loops como `for` e `while` para repetir blocos de código.

## Fases da Resolução de um Problema

1. **Coletar os dados**: Reunir e organizar as informações necessárias.
2. **Processar os dados**: Manipular e modificar os dados para adequá-los ao contexto ou objetivo.
3. **Apresentar os dados**: Exibir os dados processados de maneira clara e acessível.

## Escopo e Variáveis

- **Variáveis globais**: Variáveis acessíveis em qualquer parte do código, desde que não estejam limitadas a um escopo específico.
- **Constantes**: Valores imutáveis que, uma vez definidos, não podem ser alterados durante a execução do programa.

## Tipos de Dados

- **String (texto)**: Representa uma sequência de caracteres, como `"exemplo de texto"`.
- **Number**: Representa valores numéricos, podendo ser inteiros (`2`) ou decimais (`1.4`).
- **Boolean**: Representa valores lógicos, podendo ser `true` (verdadeiro) ou `false` (falso).

## Operadores

- **Operadores de atribuição de valor**: Usados para atribuir valores a variáveis. Exemplo: `=`.
- **Operador de concatenação**: Usado para unir strings. Exemplo: `+`.

## Estruturas de Dados

- **Arrays**: Listas que podem conter qualquer tipo de dado. Exemplo: `[1, "texto", true]`.
- **Objetos**:
  - **Atributos e métodos**: Dados e funções associadas a um objeto. Exemplo:
    ```javascript
    let pessoa = {
      nome: "João",
      idade: 30,
      saudacao: function () {
        return "Olá!";
      },
    };
    ```
  - **Criação e manipulação de objetos**: Definir e modificar objetos e suas propriedades.
  - **Acesso a propriedades de objetos**: Utilizar a notação de ponto ou colchetes para acessar dados. Exemplo: `pessoa.nome` ou `pessoa["idade"]`.

## Funções

- **Criar e passar argumentos**: Definir funções e fornecer parâmetros para elas. Exemplo:
  ```javascript
  function saudacao(nome) {
    return "Olá, " + nome;
  }
  ```
