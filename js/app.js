let amigos = [];

function adicionar (){
    //obtém o nome do amigo digitado
    const entradaNome = document.getElementById('nome-amigo');
    const nome = entradaNome.value;

    //verifica se nome não é vazio
    if(nome == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    //verifica se há elementos repetidos
    if (amigos.includes(nome)){
        alert('Não é possível haver nomes de amigos repetidos!');
        return;
    }

    //adiciona o nome ao array
    amigos.push(nome);   

    //adiciona nome do amigo a lista de amigos incluídos
    const listaAmigos = document.getElementById('lista-amigos');
    if (listaAmigos.textContent.trim() === ''){
        listaAmigos.textContent = nome;
    } else {
        listaAmigos.textContent += ', ' + nome;
    }

    //limpa campo de entrada de nome
    entradaNome.value = '';
}

function sortear (){
    //verifica o número mínimo de participantes (deve ser no mínimo 3)
    if (amigos.length < 3){
        alert('O número mínimo de participantes deve ser 3!');
        return;
    }

    //limpa lista de sorteio
    const listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';

    //embaralha o array
    embaralhar(amigos);

    // mostra o sorteio na lista
    for (let i=0; i < amigos.length - 1; i++){
        listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i+1]}<br>`;
    }
    listaSorteio.innerHTML += `${amigos[amigos.length-1]} --> ${amigos[0]}`;
}

function reiniciar(){
    //limpa array amigos
    amigos = [];

    //limpa campo de entrada de nome
    document.getElementById('nome-amigo').value = '';

    //limpa lista de amigos incluídos
    document.getElementById('lista-amigos').textContent = '';

    //limpa lista de sorteio
    document.getElementById('lista-sorteio').innerHTML = '';
}


function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos nas posições i e j
        [array[i], array[j]] = [array[j], array[i]]; // Destruturação para troca
    }
}