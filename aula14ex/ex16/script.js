function clicar()
{
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passos = document.getElementById("passos")
    let res = document.getElementById("res")

    if (passos.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0)
    {
       res.innerHTML = "Impossivel contar "

    }else
    {

        

        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0)
            {
                res.innerHTML = "Passos invalidos considerando passo 1"
                p = 1
            }


        if (i < f)
        {
            for(let ind = i; ind <= f; ind += p)
                {
                    res.innerHTML += `${ind} `
                }
        }else if (i > f)
        {
            for (let c = i; c >= f; c -= p)
            {
                res.innerHTML += `${c} `
            }
        }
       
    }
}