const contato1 = {
  nome: "Rafael",
  telefone: "(11)11111-1111",
};

const contato2 = {
  nome: "João",
  telefone: "(22)22222-2222",
};

const arrContatos = [contato1, contato2];

const criarStorge = () => {
  localStorage.setItem("contatos", JSON.stringify(arrContatos));
};

const getStorge = () => {
  const contato = window.localStorage.getItem("contatos");

  if (contato) {
    const objContato = JSON.parse(contato);
    for (const c of objContato) {
      document.write(`<p>${c.nome}`);
      document.write(`<p>${c.telefone}`);
    }
  }
};

criarStorge();
getStorge();
