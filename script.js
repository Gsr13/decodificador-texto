document.querySelector(".botao-copiar").style.display = 'none';

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.innerText = textoCriptografado;
    textArea.value = "";
    document.querySelector(".botao-copiar").style.display = 'inline';
    document.querySelector(".mensagem").style.justifyContent = 'flex-start';
}

function criptografar(stringCripto) {

    let matrizCripto = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCripto = stringCripto.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
        if(stringCripto.includes(matrizCripto[i][0])) {
            stringCripto = stringCripto.replaceAll(matrizCripto[i][0], matrizCripto[i][1]);
        }
    }
    return stringCripto;

}

function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.innerText= textoDescriptografado;
    textArea.value = "";
    document.querySelector(".botao-copiar").style.display = 'inline';
    document.querySelector(".mensagem").style.justifyContent = 'flex-start';
}

function descriptografar(stringDescripto) {

    let matrizCripto = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescripto = stringDescripto.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
        if(stringDescripto.includes(matrizCripto[i][1])) {
            stringDescripto = stringDescripto.replaceAll(matrizCripto[i][1], matrizCripto[i][0]);
        }
    }
    return stringDescripto;

}

function copiar() {
    window.navigator.clipboard
    .writeText(document.querySelector(".mensagem").innerText);
}


