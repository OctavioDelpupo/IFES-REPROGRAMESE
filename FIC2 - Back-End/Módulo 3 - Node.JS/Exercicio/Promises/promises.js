function baixarConteudoPromisse(nomeConteudo) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o download de ${nomeConteudo}`);
    //Simula um tempo de download (em milissegundos)
    setTimeout(() => {
      const sucesso = true; //Simula se o download foi bem sucedido
      console.log("________________________________________________");
      if (sucesso) {
        console.log(`${nomeConteudo} foi baixado com sucesso.`);
        resolve(nomeConteudo); // Resolvendo a Promise com sucesso
      } else {
        const erro = "Erro ao baixar o conteúdo";
        console.error(erro);
        reject(erro); // Rejeitando a Promise em caso de erro
      }
    }, 2000);
  });
}

// Vamos usar a função baixarConteudoPromisse com Promises
baixarConteudoPromisse("Documento.pdf")
  .then((nomeConteudo) => {
    console.log(`Download de ${nomeConteudo} concluido com sucesso!`);
  })
  .catch((erro) => {
    console.error(`Erro durante o download ${erro}`);
  });

baixarConteudoPromisse("Imagem.jpg")
  .then((nomeConteudo) => {
    console.log(`Download de ${nomeConteudo} concluido com sucesso!`);
  })
  .catch((erro) => {
    console.error(`Erro durante o download ${erro}`);
  });
