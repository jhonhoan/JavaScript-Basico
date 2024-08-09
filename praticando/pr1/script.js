
const agora = new Date().getHours()
const p = document.getElementsByTagName("p")[0]
const h = document.getElementsByTagName("h1")[0]
let i = document.getElementsByTagName("img")[0]


if (agora >= 5 && agora <= 12) 
{

    i.src = 'dia.jpeg'
    p.innerHTML = `Agora são ${agora} horas da manhã`
    document.body.style.background = "rgb(255, 241, 118)"

}
else if (agora >= 0 && agora < 5)
{
    p.innerHTML = `Agora são ${agora} horas da madrugada`
    i.src = 'noite.jpeg'
    document.body.style.background = "rgb(51, 51, 51)"
    h.style.color = "white"

}else if (agora <= 18)
{
    p.innerHTML = `Agora são ${agora} horas da tarde`
    i.src = 'tarde.jpeg'
    document.body.style.background = "rgb(255, 209, 110)"

}else if (agora <= 23)
{
    p.innerHTML = `Agora são ${agora} horas da noite`
    i.src = 'noite.jpeg'
    document.body.style.background = "rgb(51, 51, 51)"
    h.style.color = "white"

}