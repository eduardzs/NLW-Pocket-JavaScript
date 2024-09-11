const { select, input, checkbox } = require("@inquirer/prompts");
const fs = require("fs").promises;

let metas = [];

const carregarMetas = async () => {
  try {
    const dados = await fs.readFile("metas.json", "utf-8");
    metas = JSON.parse(dados);
  } catch (erro) {
    metas = [];
  }
};

const salvarMetas = async () => {
  await fs.writeFile("metas.json", JSON.stringify(metas, null, 2));
};

const cadastrarMeta = async () => {
  const meta = await input({
    message: "Informe sua meta:",
  });

  if (meta.length > 0) {
    metas.push({ value: meta, checked: false });
    console.log("Meta cadastrada com sucesso!");
  } else {
    console.log("A meta não pode ser vazia..");
  }
};

const listarMetas = async () => {
  if (metas.length == 0) {
    console.log("Não existem metas!");
    return;
  }

  const respostas = await checkbox({
    message:
      "Use às teclas de setas para 'Cima ↑' ou para 'Baixo ↓' para mudar a seleção da meta, use a tecla 'Espaço' para marcar ou desmarcar uma meta e a tecla 'Enter' para finalizar.",
    choices: [...metas],
    instructions: false,
  });

  metas.forEach((m) => {
    m.checked = false;
  });

  if (respostas.length > 0) {
    respostas.forEach((resposta) => {
      const meta = metas.find((m) => m.value === resposta);
      meta.checked = true;
    });
    console.log("Meta(s) marcadas como concluída(s)");
  } else {
    console.log("Nenhuma meta foi selecionada..");
  }
};

const metasRealizadas = async () => {
  if (metas.length == 0) {
    console.log("Não existem metas!");
    return;
  }

  const realizadas = metas.filter((meta) => meta.checked);

  if (realizadas.length > 0) {
    await select({
      message: "Metas Realizadas " + "(" + realizadas.length + ")",
      choices: [...realizadas],
    });
  } else {
    console.log("Nenhuma meta foi realizada.. :(");
  }
};

const metasAbertas = async () => {
  if (metas.length == 0) {
    console.log("Não existem metas!");
    return;
  }

  const abertas = metas.filter((meta) => !meta.checked);

  if (abertas.length > 0) {
    await select({
      message: "Metas Abertas " + "(" + abertas.length + ")",
      choices: [...abertas],
    });
  } else {
    console.log("Não existe metas abertas! :)");
  }
};

const removerMetas = async () => {
  if (metas.length == 0) {
    console.log("Não existem metas!");
    return;
  }

  const metasDesmarcadas = metas.map((meta) => ({
    value: meta.value,
    checked: false,
  }));

  const itemsARemover = await checkbox({
    message: "Escolha a(s) meta(s) que você deseja remover de sua lista.",
    choices: [...metasDesmarcadas],
    instructions: false,
  });

  if (itemsARemover.length > 0) {
    itemsARemover.forEach((item) => {
      metas = metas.filter((meta) => meta.value !== item);
    });
    console.log("Meta(s) removida(s) de sua lista com sucesso!");
  } else {
    console.log("Não há meta(s) em sua lista..");
  }
};

const start = async () => {
  await carregarMetas();

  while (true) {
    const option = await select({
      message: "Gerenciador de Metas",
      choices: [
        { name: "Cadastrar Meta", value: "cadastrar" },
        { name: "Listar Metas", value: "listar" },
        { name: "Metas Abertas", value: "abertas" },
        { name: "Metas Realizadas", value: "realizadas" },
        { name: "Remover Metas", value: "remover" },
        { name: "Sair", value: "sair" },
      ],
    });

    switch (option) {
      case "cadastrar":
        await cadastrarMeta();
        break;
      case "listar":
        await listarMetas();
        break;
      case "abertas":
        await metasAbertas();
        break;
      case "realizadas":
        await metasRealizadas();
        break;
      case "remover":
        await removerMetas();
        break;
      case "sair":
        console.log("Até a próxima!");
        return;
    }

    await salvarMetas();
  }
};

start();
