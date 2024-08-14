function tabuada()
{
    let n = Number(document.getElementById("num").value)
    let seltab = document.getElementById("seltab")

    if (n <= 0)
    {
        alert("Nao é possivel contar")
    }else
    {
        seltab.innerHTML = " "
        for (let c = 1; c <= 10; c++)
            {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                seltab.appendChild(item)
                
            }
        
    }
    
}