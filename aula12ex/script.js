

function carregar()
{
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var msg = document.getElementById('hora')
    var img = document.getElementById('img')
    var titulo = document.getElementsByTagName('h1')

    if (hora >= 5 && hora < 12)
        {
            msg.innerText = `Agora são ${hora} horas e ${minutos} minutos`
            document.body.style.backgroundColor = 'yellow'
            img.src = 'dia.jpeg'

        }else if (hora >= 12 && hora <= 18)
        {
            msg.innerText = `Agora são ${hora} horas e ${minutos} minutos`
            document.body.style.backgroundColor = 'orange'
            img.src = 'tarde.jpeg'
            
        }else if (hora >= 19 && hora <= 23)
            
        {
            img.src = 'noite.jpeg'
          
            msg.innerText = `Agora são ${hora} horas e ${minutos} minutos`
            document.body.style.backgroundColor = 'slategray'
        }else
        {
            img.src = 'noite.jpeg'
            msg.innerText = `Agora são ${hora} horas e ${minutos} minutos`
            document.body.style.backgroundColor = 'slategray'
        }
}

