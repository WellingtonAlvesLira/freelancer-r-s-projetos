function mudaDescricao(e) {
    DescricaoNova(e);
    DescricaoPadrao(e);


}

var descricao = document.getElementsByClassName('descricao');
for (var i = 0; i < descricao.length; i++) {
    descricao[i].addEventListener('mouseover', mudaDescricao, false);
}

function DescricaoNova(e){
    /*Para determinar com qual elemento o mouse interagiu, a função utiliza a propriedade target
    do objeto event*/
    e.target.style.color = 'yellow';

    if (e.target.id == 0) {
        descricao[0].innerHTML = "Venha viver essa experiência";

    }
    if (e.target.id == 1) {
        descricao[1].innerHTML = "Sempre pensando no melhor para você";

    }
    if (e.target.id == 2) {
        descricao[2].innerHTML = "Assistência é conosco";

    }
}

function DescricaoPadrao(e){
    setTimeout(() => {
        e.target.style.color = "";
        descricao[0].innerHTML = "Entrega rápida";
        descricao[1].innerHTML = "Foco no cliente";
        descricao[2].innerHTML = "Manutenção";
    }, 3000)
}

function anoAtual(){
    var dataHoje = new Date()
    var diaMesAno = ((dataHoje.getDate())) + "/" + ((dataHoje.getMonth() + 1)) + "/" + dataHoje.getFullYear();
    document.getElementById('data_atual').innerHTML = diaMesAno;
}

anoAtual();


