class usuario {
    constructor(id, nickName, nome, email, bio, genero) {
        this.id = id;
        this.nickName = nickName;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;
        this.postar = function (pensamentos) {
            document.querySelector('#resposta').innerHTML= `
            
    <div class="post">
        <h3>${this.nickName}</h3>
         <p>${pensamentos}</p>
    </div>
            `
        }
    }
}

var user = new usuario(1, 'Vit', 'vitoria', 'vitoria@email.com', 'tudo na boa', 'feminino')
var user2 = new usuario(1, 'will', 'willmontes', 'will@email.com', 'é a i viado', 'neutro')
// console.log(user)

function postarFeed() {
    alert("Postado com sucesso!")
    pensamentos = document.querySelector('#pensamento').valeu
    user.postar(pensamentos)
}