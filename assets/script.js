const poema = [
    "Serei aquele que vai sussurrar o seu nome em seu ouvido,",
    "e vai te colocar na cama todas as noites,",
    "que vai te acordar todas as manhãs...",
    "Eu serei o seu anjo da guarda."
].join('\n');

const poemaElement = document.getElementById("poema");
const coracaoElement = document.getElementById("coracao");
const musicaElement = document.getElementById("musica");
let index = 0;

coracaoElement.addEventListener("click", function () {
    // coracaoElement.style.display = "none";
    poemaElement.style.display = "block";
    musicaElement.play();
    const intervalId = setInterval(function () {
        if (index < poema.length) {
            poemaElement.innerHTML += poema[index];
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100); // Altere este valor para ajustar a velocidade de digitação
});