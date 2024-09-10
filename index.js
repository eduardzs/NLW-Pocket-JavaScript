const { select, input, checkbox } = require("@inquirer/prompts");

let meta = {
  value: "Tomar 3L de água por dia",
  checked: false,
};

let metas = [meta];

const start = async () => {
  const cadastrarMeta = async () => {
    const meta = await input({
      message: "Informe sua meta:",
    });
    if (meta.length > 0) {
      metas.push({ value: meta, checked: false });
    } else {
      console.log("A meta não pode ser vazia..");
      return;
    }
  };

  const listarMetas = async () => {
    const respostas = await checkbox({
      message:
        "Use às teclas de setas para 'Cima ↑' ou para 'Baixo ↓' para mudar a seleção da meta, use a tecla 'Espaço' para marcar ou desmarcar uma meta e a tecla 'Enter' para finalizar.",
      choices: [...metas],
      instructions: false,
    });
    if (respostas.length > 0) {
      metas.forEach((m) => {
        m.checked = false;
      });
      respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
          return m.value == resposta;
        });
        meta.checked = true;
      });
      console.log("Meta(s) marcadas como concluída(s)");
    } else {
      console.log("Nenhuma meta foi selecionada..");
      return;
    }
  };

  while (true) {
    const option = await select({
      message: "Gerenciador de Metas",
      choices: [
        {
          name: "Cadastrar Meta",
          value: "cadastrar",
        },
        {
          name: "Listar Metas",
          value: "listar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (option) {
      case "cadastrar":
        {
          await cadastrarMeta();
        }
        break;
      case "listar":
        {
          await listarMetas();
        }
        break;
      case "sair":
        {
          console.log("Até a próxima!");
        }
        return;
    }
  }
};

start();
