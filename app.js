let participantes = [];

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
};

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        participantes.push(amigo);
    };

    limparCampo();
};
