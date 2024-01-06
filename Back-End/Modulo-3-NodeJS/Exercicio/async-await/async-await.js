function baixarConteudoPromisse(nomeConteudo) {
  return new Promise((resolve, reject) => {
    console.log("_______________________________________________");
    console.log(`Iniciando o download de ${nomeConteudo}`);
    //Simula um tempo de download (em milissegundos)
    setTimeout(() => {
      const sucesso = true; //Simula se o download foi bem sucedido

      if (sucesso) {
        console.log(`${nomeConteudo} foi baixado com sucesso.`);
        resolve(nomeConteudo); // Resolvendo a Promise com sucesso
      } else {
        const erro = "Erro ao baixar o conteúdo";
        console.error(erro);
        reject(erro); // Rejeitando a Promise em caso de erro
      }
    }, 2000); // Simula 2 segundos de download
  });
}

async function baixarConteudoAssyncAwait() {
  try {
    const documento = await baixarConteudoPromisse("Documento.pdf");
    console.log(`Download de ${documento} concluído com sucesso!`);

    const imagem = await baixarConteudoPromisse("Imagem.png");
    console.log(`Download de ${imagem} concluído com sucesso!`);

    const video = await baixarConteudoPromisse("Video.mp4");
    console.log(`Download de ${video} concluído com sucesso!`);
  } catch (error) {
    console.error(`Erro durante o downlaod: ${error}`);
  }
}

// Chamar a função assíncrona
baixarConteudoAssyncAwait();
