let: valorInicial = 10;
const $second = document.querySelector(".button-second");

$second.addEventListener("click", handleclick);

function handleclick() {
    const $carrinho = document.querySelector(".-last");
    
    $carrinho.textContent = `Carrinho (${++valorInicial})`;

}