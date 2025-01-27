let participantes = [];

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
};

function sortearAmigo() {
    let resposta = document.getElementById('resultado');

    if (participantes == '') {
        resposta.innerHTML = 'Adicione novos participantes para realizar o sorteio.';
    } else {
        let indexAleatorio = Math.floor(Math.random() * participantes.length);
        console.log('index ' + indexAleatorio);
        let amigoSorteado = participantes[indexAleatorio];
        resposta.innerHTML = `Seu amigo secreto é ${amigoSorteado}`;
        participantes.splice(indexAleatorio, 1);
    };
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
