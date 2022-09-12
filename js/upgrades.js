var botaoCompra = document.getElementsByClassName("btn-comprar");
var valorUpgrade = document.getElementsByClassName("upg-custo-valor");
console.log(valorUpgrade);

function comprar(idUpgrade) {
    console.log("oi");
    var custoUpgrade = Number(valorUpgrade[idUpgrade].innerHTML);
    if(dinheiro >= custoUpgrade) {
        dinheiro -= custoUpgrade
        comprarUpgrade(idUpgrade);
        spanDinheiro.innerHTML = dinheiro;
    } else {
        window.alert("Erro! Sem dinheiro o suficiente!")
    }
}