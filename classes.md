# Linguagem de Programação

Uma linguagem de programação é um conjunto de instruções que você usa para comunicar tarefas ao computador. Semelhante a construir algo com blocos de lego, você usa os "blocos" da linguagem para criar algoritmos e resolver problemas.

## 💡 Algoritmo

Um algoritmo é uma sequência de passos lógica e finita para resolver um problema específico. Ele define a forma como os dados devem ser processados para alcançar um resultado desejado.

## Componentes de uma Linguagem de Programação

- **Comentários**: Anotações no código que não são executadas, mas ajudam a documentar o que o código faz.
- **Declaração de Variáveis**: Utilizada para armazenar dados. Exemplos incluem:

  - `const` para constantes que não podem ser alteradas.
  - `let` para variáveis cujo valor pode mudar.

- **Operadores**:

  - **Atribuição**: `=` (ex: `x = 10`)
  - **Concatenação**: `+` (para unir strings)
  - **Matemáticos**: `+`, `-`, `*`, `/`, `%`
  - **Lógicos**: `&&`, `||`, `!` (para operações booleanas)

- **Tipos de Dados**:

  - **String**: Representa texto (ex: `"Olá"`, `'Mundo'`)
  - **Number**: Representa números (ex: `42`, `3.14`)
  - **Boolean**: Representa valores lógicos (`true`, `false`)

- **Estruturas de Dados**:

  - **Funções**: Blocos de código reutilizáveis.
  - **Objetos**: Estruturas que contêm propriedades e métodos.
  - **Arrays**: Listas de valores.

- **Controle de Fluxo**:

  - **Condicionais**: Estruturas que permitem executar código com base em condições (ex: `if/else`).

- **Estrutura de Repetição**:
  - **Loops**: Estruturas que repetem um bloco de código várias vezes (ex: `for`, `while`).

## Fases da Resolução de Problemas

1. **Coletar Dados**: Obter as informações necessárias para resolver o problema.
2. **Processar Dados**: Manipular e alterar os dados conforme necessário.
3. **Apresentar Dados**: Mostrar os resultados de forma compreensível para o usuário.

## Escopo e Variáveis

- **Variáveis Globais e Locais**: Variáveis podem ser acessíveis em todo o código (globais) ou apenas em partes específicas (locais).
- **Constantes**: Variáveis cujo valor não muda durante a execução do programa.

## Tipos de Dados

- **Strings (texto)**: Delimitados por aspas duplas `""`, aspas simples `''`, ou crase `` ` ``.
- **Numbers**: Incluem números inteiros e de ponto flutuante (ex: `2`, `1.4`).
- **Boolean**: Representa valores de verdadeiro ou falso (`true`, `false`).

## Operadores

- **Atribuição de Valor**: `=` (ex: `x = 5`)
- **Concatenação**: `+` (para unir strings)
- **Comparação**: `==`, `!=`, `<=`, `>=`, `<`, `>` (para comparar valores)
- **Spread Operator**: `...` (para expandir arrays ou objetos)

## Estruturas de Dados

### Arrays

- **Definição**: Uma coleção ordenada de elementos que pode conter qualquer tipo de dado.
- **Métodos Comuns**:
  - `push()`: Adiciona um item ao final do array.
  - `find()`: Encontra o primeiro item que satisfaz a condição fornecida.
  - `forEach()`: Executa uma função para cada item do array.
  - `filter()`: Retorna um novo array com todos os itens que passam no teste fornecido.
  - `map()`: Cria um novo array com os resultados da aplicação de uma função a cada item do array.

### Objetos

- **Definição**: Estruturas que armazenam dados em pares chave-valor.
- **Criação e Manipulação**: Você pode criar objetos, adicionar propriedades e métodos, e acessar suas propriedades.

## Funções

- **Definição**: Blocos de código que realizam uma tarefa específica e podem ser reutilizados.
- **Criação**: Funções podem ser definidas de várias maneiras, incluindo funções nomeadas e funções de seta (arrow functions).
- **Execução**: Chamadas de função executam o código definido na função.

## Estruturas de Repetição

- **while**: Executa um bloco de código enquanto uma condição for verdadeira.

## Condicionais

- **switch**: Estrutura que permite executar diferentes blocos de código com base no valor de uma expressão.
- **if/else**: Estrutura condicional que executa blocos de código com base em uma condição.

## Módulos em Node.js

- **Importação de Módulos**: Utiliza `require` para incluir módulos em seu código (CommonJS).
- **Biblioteca 'inquirer'**: Usada para criar prompts interativos com o usuário.
- **FS (File System)**: Módulo para manipulação de arquivos e diretórios.

## JSON

- **Definição**: JavaScript Object Notation, um formato de dados leve para troca de informações.
- **Métodos**:
  - **JSON.parse()**: Converte uma string JSON em um objeto JavaScript.
  - **JSON.stringify()**: Converte um objeto JavaScript em uma string JSON.

## Programação Assíncrona e Promises

- **Funções Assíncronas**: Utilizam `async` e `await` para escrever código que pode esperar por operações assíncronas sem bloquear o fluxo principal.
