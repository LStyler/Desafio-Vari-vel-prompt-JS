function validarEntrada(mensagem) {
    let entrada;
    do {
        entrada = prompt(mensagem);
        if (entrada === null || entrada.trim() === '') {
            alert("Por favor, insira um valor válido.");
        }
    } while (entrada === null || entrada.trim() === '');
    return entrada;
}

function validarIdade(mensagem) {
    let idade;
    do {
        idade = prompt(mensagem);
        if (isNaN(idade) || idade === null || idade.trim() === '') {
            alert("Por favor, insira uma idade válida.");
        }
    } while (isNaN(idade) || idade === null || idade.trim() === '');
    return idade;
}

function questionario() {
    let nomeUsuario = validarEntrada("Qual é o seu nome?");
    let idadeUsuario = validarIdade("Qual é a sua idade?");
    let linguagemUsuario = validarEntrada("Qual linguagem você está estudando?");

    let questaoUsuario;
    let introducao = `Olá ${nomeUsuario}, sua idade é: ${idadeUsuario} e você está estudando ${linguagemUsuario}`;

    if (confirm(`Você gosta de estudar ${linguagemUsuario}?`)) {
        questaoUsuario = `Que bom que você está gostando, continue estudando!`;
    } else {
        questaoUsuario = `Que pena que você não gostou de ${linguagemUsuario}! Tente outras linguagens.`;
    }

    document.getElementById("nome").textContent = `Nome: ${nomeUsuario}`;
    document.getElementById("idade").textContent = `Idade: ${idadeUsuario} Anos`;
    document.getElementById("linguagem").textContent = `Linguagem de programação: ${linguagemUsuario}`;
    document.getElementById("apresentacao").textContent = introducao;
    document.getElementById("questao").textContent = questaoUsuario;
}
