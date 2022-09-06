var btnClick = document.getElementById("btn-click");
var dinheiro = Number(document.getElementById("dinheiro").innerHTML);
var spanDinheiro = document.getElementById("dinheiro");
var clicks = Number(document.getElementById("clicks-totais").innerHTML);
var spanClicks = document.getElementById("clicks-totais");
console.log(clicks);

btnClick.addEventListener("click", function() {
    dinheiro += 1;
    spanDinheiro.innerHTML = dinheiro;

    clicks += 1;
    spanClicks.innerHTML = clicks;
})