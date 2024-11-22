// var fruta1 = 'Melancia'
// var fruta2 = 'tomate'
// var fruta3 = 'melão'
// var fruta4 = 'maracuja'
// var fruta5 = 'manga'

//forma de array
fruta = ['manga', 'tomate', 'melão', 'maracuja', 'manga'];

teste = Array()
teste[0] = 'olha'
teste[1] = 'que coisa'
teste[3] = 'mais linda'

//forma de chamar o array, para que ele apareça no console 
console.log(fruta)
console.log(fruta[1])

//PUSH seria o empurar na lista, acresentar algo que ficou faltando no caso 
fruta.push('uva', 'goiaba')
console.log(fruta)

// UNSHIFIT adiciona ao começo da lista, mundando assim a ordem do array
fruta.unshift('abacate')
console.log(fruta)

// POP remove o ultimo da lista de array
fruta.pop()
console.log(fruta)

//SHIFT remove o primeiro da lista de array
fruta.shift()
console.log(fruta)

//SPLICE remove, adiciona e atualiza a lista de arrays
fruta.splice(3,1)
fruta.splice(2,0,'morango')
fruta.splice(1,1, 'maracuja')
console.log(fruta)

fruta.push('abacaxi')

for (let i = 0; i < fruta.length; i++) {
    document.getElementById('resposta').innerHTML += `
    ${fruta[i]}
    `
}

alert(fruta)