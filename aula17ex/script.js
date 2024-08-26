
let num = document.getElementById('num')
let area = document.getElementById('area')
let res = document.getElementById("res")
let valores = []

function isnumber(n)
{
    if ( Number(n) <= 0 || Number(n) > 100)
    {
        return false
    }else
    {
        return true
    }
}

function lista(n, l)
{
    if (l.indexOf(Number(n)) != -1)
    {
        return true
    }else
    {
        return false
    }
}

function adicionar()
{
    

    if (isnumber(num.value) && !lista(num.value, valores) )
    {
        alert('tudo ok')

        
    }else
    {

        alert('Adicione um valor de 1 a 100!')
        
       



    }
}





function fim()
{

    if (valores == 0)
    {
        alert("Digite um numero")
    }else
    {
        

        res.innerHTML = `Ao todo temos ${valores.length} numeros cadastrados. <br> `
     
    }

    

}
