// script.js
class Postagem {
  constructor(texto) {
    this.texto = texto;
  }

  criarElemento() {
    const li = document.createElement("li");
    li.textContent = this.texto;
    return li;
  }
}

document.getElementById("post").addEventListener("submit", function (e) {
  e.preventDefault();
  const mensagem = document.getElementById("mensagem").value;
  const novaPostagem = new Postagem(mensagem);

  const listaMensagens = document.getElementById("listaM");
  listaMensagens.appendChild(novaPostagem.criarElemento());

  document.getElementById("post").reset();
});
