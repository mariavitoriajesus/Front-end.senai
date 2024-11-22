function carregarCatalogo() {
  var livros = [
    ['img/corteEspinhoRosas.jpeg', 'Corte de Espinho e Rosas - Saara J. Maas'],
    ['img/CorteNevoaFuria.jpeg', 'Corte de Nevoe e Furia - Saara J. Maas'],
    ['img/corteAsasRuinas.jpeg', 'Corte de Asas e Ruinas - Saara J. Maas'],
    ['img/corteGeloEstrela.jpeg', 'Corte de Gelo e Estrelas - Saara J. Maas'],
    ['img/corteChamaPrateada.jpeg', 'Corte de Chama Prateada - Saara J. Maas'],
    ['img/deusesNeon.jpeg', 'Deuses de Neon - Katee Robert'],
    ['img/idoloEletrico.jpeg', 'Ídolo Eletrico - Katee Robert'],
    ['img/belezaPerversa.jpg', 'Beleza Perversa - Katee Robert'],
    ['img/principeCruel.jpeg', 'O Príncipe Cruel - Holly Black '],
    ['img/reiPerveso.jpg', 'O Rei Perverso - Holly Black'],
    ['img/rainhaNada.jpeg', 'A Rainha do Nada - Holly BLack'],
    ['img/oRei.jpeg', 'Como o Rei de Elfhame Aprendeu a Odiar Histórias - Holly Black']
  ]


  livros.forEach(cadaLivro => {
    document.getElementById(`catalogo`).innerHTML += `
         <div class="livros">
                <img src="${cadaLivro[0]}" alt="">
                <h4>${cadaLivro[1]}</h4>
                <button>
                    Adicionar
                    <img src="icons/plus.svg" alt="">
                </button>
            </div>
        `
  })
}

carregarCatalogo()
