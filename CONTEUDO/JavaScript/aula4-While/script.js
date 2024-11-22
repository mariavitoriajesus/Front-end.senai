function carregarCatalogo() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`catalogo`).innerHTML += `
         <div class="livros">
                <img src="img/corteEspinhoRosas.jpeg" alt="">
                <h4>Corte de Névoa e Fúria</h4>
                <button>
                    Adicionar
                    <img src="icons/plus.svg" alt="">
                </button>
            </div>
        `
  }
}

carregarCatalogo()
