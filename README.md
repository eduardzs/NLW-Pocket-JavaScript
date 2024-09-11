# NLW Pocket: JavaScript

Bem-vindo ao projeto **NLW Pocket: JavaScript**! Este projeto foi desenvolvido como parte do evento NLW Pocket da Rocketseat e é um gerenciador de metas simples, criado utilizando Node.js. O objetivo principal é ajudar os usuários a gerenciar e acompanhar suas metas pessoais de forma eficiente.

## Objetivos do App de Gerenciamento de Metas

- **Criar metas**: Adicione novas metas à sua lista.
- **Listar metas**:
  - **Metas realizadas**: Visualize as metas que foram concluídas.
  - **Metas abertas**: Visualize as metas que ainda estão pendentes.
- **Marcar ou desmarcar metas como concluídas**: Atualize o status das suas metas.
- **Remover metas**: Exclua metas da sua lista.
- **Sistema de mensagens integrado**: Receba feedback sobre as operações realizadas.

## Funcionalidades

O app oferece as seguintes funcionalidades:

1. **Cadastrar Meta**: Permite adicionar uma nova meta à lista.
2. **Listar Metas**: Mostra todas as metas com a possibilidade de marcar ou desmarcar como concluídas.
3. **Metas Abertas**: Lista apenas as metas que ainda não foram concluídas.
4. **Metas Realizadas**: Lista apenas as metas que já foram concluídas.
5. **Remover Metas**: Permite remover uma ou mais metas da lista.

## Como Rodar o Projeto

Para rodar o projeto, siga as instruções abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nlw-pocket-javascript.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd nlw-pocket-javascript
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute o aplicativo:**
   ```bash
   node index.js
   ```

## Estrutura do Código

O código principal do projeto está no arquivo `index.js`, e o gerenciamento de metas é feito de forma assíncrona, utilizando o módulo `fs` para leitura e escrita de arquivos, e o módulo `inquirer` para interações com o usuário.

### Principais Componentes

- **Funções Assíncronas**: Utiliza `async` e `await` para operações assíncronas, como leitura e escrita de arquivos.
- **Prompts do Inquirer**: Utiliza prompts interativos para coleta de dados do usuário e gerenciamento das metas.
- **Manipulação de Arquivos**: Usa `fs.promises` para ler e escrever a lista de metas em um arquivo JSON.

---

Obrigado por conferir o **NLW Pocket: JavaScript**! Aproveite o gerenciamento das suas metas e boa programação! 🚀
