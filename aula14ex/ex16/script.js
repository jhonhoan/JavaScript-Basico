function clicar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passos = document.getElementById('passos');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = "Não é possível contar! Por favor, preencha todos os campos.";
    } else {
        res.innerHTML = "Contando: <br>";

        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passos.value);

        if (p <= 0) {
            alert("Passo inválido! Considerando passo 1.");
            p = 1;
        }

        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `;
            }
        } else {
            // Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `;
            }
        }
    }
}