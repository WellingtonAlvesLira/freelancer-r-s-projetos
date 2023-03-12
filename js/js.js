var descricao = document.getElementsByTagName('span');

function mudaDescricao(){
    //A palavra 'this' refere-se ao proprietário de uma função (caixa_descricao).
    this.style.color = "black";
    descricao[0].innerHTML = "Venha viver essa experiência";
    descricao[1].innerHTML = "Sempre pensando no melhor para você";
    descricao[2].innerHTML = "Assistência é conosco";

    setTimeout(() => {
        this.style.color = "gray";
        descricao[0].innerHTML = "Entrega rápida";
        descricao[1].innerHTML = "Foco no cliente";
        descricao[2].innerHTML = "Manutenção";
      }, 3000)
    
}

for (var i = 0; i < descricao.length; i++){
    descricao[i].addEventListener('mouseover', mudaDescricao, false);
}



