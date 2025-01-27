let participantes = [];

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
};

function listarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';   // Limpa o conteúdo da lista no HTML

    for (let i = 0; i < participantes.length; i++) {
        let li = document.createElement('li');
        li.textContent = participantes[i];
        lista.appendChild(li);
    };
};

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        participantes.push(amigo);
    };

    limparCampo();
    listarAmigos();
};
