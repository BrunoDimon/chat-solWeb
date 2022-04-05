const botaoEnviar = document.getElementById('botaoEnviar');
botaoEnviar.addEventListener('click', function(event){
    const inputMensagem = document.getElementById('inputMensagem');
    if (inputMensagem.value != "") {
        mensagem(inputMensagem.value);
        inputMensagem.value = "";
        const main = document.getElementById("main");
        main.scrollTop = main.scrollHeight;
    }
})

function mensagem(inputMensagem) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = 'chatE';
    const usuario = document.createElement('h5');
    usuario.innerText = 'Bruno';
    const mensagemH4 = document.createElement('h4');
    mensagemH4.innerText = inputMensagem;
    mensagemDiv.appendChild(usuario);
    mensagemDiv.appendChild(mensagemH4);
    
    const listMensagens = document.getElementById('main');
    listMensagens.appendChild(mensagemDiv);
}