function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    // let qtd = parseInt(document.getElementById('qtd').value);

    verificarTipo(tipo)
    // if(tipo == 'pista'){
    //     comprarTipo(qtd, 'qtd-pista');
    // }

    // if(tipo == 'superior'){
    //     comprarTipo(qtd, 'qtd-superior');
    // }

    // if(tipo == 'inferior'){
    //     comprarTipo(qtd, 'qtd-inferior');
    // }
}

function comprarTipo(qtd, idTipo){
    let qtdTipo = parseInt(document.getElementById(idTipo).textContent);

    if(qtdTipo >= qtd){
        qtdTipo = qtdTipo - qtd;
        document.getElementById(idTipo).textContent = qtdTipo;
        alert('Compra realizada com sucesso!');
    }else{
        alert('Quantidade indisponível');
    }
}

function verificarTipo(tipo){
    let qtd = parseInt(document.getElementById('qtd').value);
    comprarTipo(qtd, `qtd-${tipo}`);
}