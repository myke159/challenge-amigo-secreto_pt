//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// nomes
let amigos = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);

    }
    gerarListaAmigos()
}


function gerarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)
    })

}
