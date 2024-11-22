function carregarFilmes() {
    var filmes = [
        ['img/iluminado.jpeg', 'O Iluminado'],
        ['img/serra.jpg', 'O Massacre da Serra ELetrica'],
        ['img/bruxa.jpeg', 'A Bruxa'],
        ['img/hereditario.jpeg', 'Hereditario'],
        ['img/cemiterio.jpeg', 'Cemiterio Maldito'],
        ['img/telefone.jpg', 'Telefone Preto']    
    ]
        

    filmes.forEach(cadaFilme => {
        document.getElementById(`catalogo`).innerHTML += `
             <div class="filmes">
                <img src="${cadaFilme[0]}" alt="">
                <h4>${cadaFilme[1]}</h4>
                <button>
                    Assistir
                    <i class="bi bi-camera-reels"></i>
                </button>
            </div>
        `
    });
}

carregarFilmes()