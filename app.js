//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Verifica se o nome não está vazio e se já não foi adicionado
    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista e atualiza a interface
    amigos.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    inputNome.value = "";
}

// Função para atualizar a exibição da lista na tela
function atualizarLista() {
    let ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = ""; // Limpa a lista para evitar duplicação

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ulLista.appendChild(li);
    });
}