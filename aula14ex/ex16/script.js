function clicar()
{
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)
    {
        alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'Contando'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        for(var c = i; c <= f; c += p)
        {
            res.innerHTML += `${c} `
        }

    }

}