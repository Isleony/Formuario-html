document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B deve ser maior que A.");
    }
});
