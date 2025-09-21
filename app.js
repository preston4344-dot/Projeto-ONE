let listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Adiciona à lista
    listaAmigos.push(nome);

    // Atualiza a lista visível
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Atualiza a lista na tela
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpa antes de renderizar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Exibe o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong> 🎉</li>`;
}