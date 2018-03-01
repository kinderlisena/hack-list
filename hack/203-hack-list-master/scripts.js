let caixa = document.querySelector('input');
let lista = document.querySelector('ul');

function inserir(){
    
    lista.innerHTML += 
    //ele me da opçao de escrever na caixa
    `<li>${caixa.value}</li>`;
    // ele retira o que escreveu na caixa 
        caixa.value = '';
}
