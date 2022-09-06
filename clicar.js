var btnClick = document.getElementById("btn-click");
var dinheiro = Number(document.getElementById("dinheiro").innerHTML);
var spanDinheiro = document.getElementById("dinheiro");

btnClick.addEventListener("click", function() {
    dinheiro += 1;
    spanDinheiro.innerHTML = dinheiro;
})