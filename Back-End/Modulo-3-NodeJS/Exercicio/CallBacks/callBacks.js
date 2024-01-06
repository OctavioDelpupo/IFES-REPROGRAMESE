function baixarConteudo(nomeConteudo, callback) {
  console.log(`Iniciando o download de ${nomeConteudo}`);
  //Simula um tempo de download (em milissegundos)
  setTimeout(function () {
    console.log(`${nomeConteudo} foi baixado com sucesso.`);
    callback(null, nomeConteudo);

    //Indica que o download foi concluído com sucesso
  }, 2000); // Simula 2 segundos de download
}

// Vamos criar um função callback simples que será chamada após o download
function callbackConcluirDownload(erro, nomeConteudo) {
  if (erro) {
    console.erro(`Erro ao baixar ${nomeConteudo}: ${erro}`);
  } else {
    console.log("________________________________________________");
    console.log(`Download de ${nomeConteudo} concluído com sucesso!`);
  }
}

// Agora, vamos usar a função para baixarConteudo com callbacks
baixarConteudo("Documento.pdf", callbackConcluirDownload);
baixarConteudo("Imagem.jpg", callbackConcluirDownload);
baixarConteudo("Video.mp4", callbackConcluirDownload);
