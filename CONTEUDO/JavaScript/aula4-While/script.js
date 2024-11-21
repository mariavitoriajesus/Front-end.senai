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

// enquanto condição faça
// para de tanto ate tanto faça

//repetição em loop
// while (contador < 3) {
//     alert(`E o que vey? ${contador} !! Repete ai!`)
//     contador++
// }


// function test() {
//   contador = 0;
//   for (var i = 0; i < 3; i++) {
//     alert(`Deu certo ${i + i} corre pra alegriiiaa`);
//   }
// }
// test()