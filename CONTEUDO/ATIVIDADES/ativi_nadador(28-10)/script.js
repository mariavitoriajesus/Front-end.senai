function classificarNadador() { 
    var idade = document.getElementById("idade").value; 
    var categoria; 
    if (idade >= 5 && idade <= 7) { 
        categoria = "Infantil A"; 
    } else if (idade >= 8 && idade <= 11) { 
        categoria = "Infantil B"; 
    } else if (idade >= 12 && idade <= 13) { 
        categoria = "Juvenil A"; 
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B"; 
    } else if (idade >= 18) { 
        categoria = "Adultos"; 
    } else { 
        categoria = "Idade fora das categorias disponíveis"; 
    }
         document.getElementById("resultado").innerHTML = "Categoria: " + categoria; 
        
}