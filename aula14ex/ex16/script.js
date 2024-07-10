function clicar()
{
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 )
    {
        res.innerHTML = ' [ERRO] Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        if(p <= 0)
        {
            alert('Passo Invalido! Passo recebe "1"')
            p = 1
        }

        if(i < f)
        {   //contagem crescente
            for(var c = i; c <= f; c +=p)
                {
                    res.innerHTML += `${c} `
                    
                }
        }else
        { //contagem regressiva
            for(var c = i; c >= f; c -= p)
            {
                res.innerHTML += `${c} `
            }
        }
        
    }
}