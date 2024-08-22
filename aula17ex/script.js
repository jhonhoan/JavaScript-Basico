
let num = []


function adicionar()
{
    let n = Number(document.getElementById('num').value)
    let area = document.getElementById('area')
    
    
    

    if (n <= 0 || n > 100 )
    {
        alert('Adicione um valor de 1 a 100!')
    }else
    {

        
       num += n

            let item = document.createElement('option')
            item.text += `Valor ${n} adicionado, array: ${num.length}`
            area.appendChild(item)

       

       



    }
}



function fim()
{

    if (num == 0)
    {
        alert("Digite um numero")
    }else
    {
        let res = document.getElementById("res")

        res.innerHTML = `Ao todo temos ${num.length} numeros cadastrados. <br> `
        res.innerHTML += `O maior valor entre eles é ${num.} `
    }

    

}
