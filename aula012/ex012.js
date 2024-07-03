var agora = new Date()
var hora = agora.getHours()
console.log(`Agora é ${hora} horas`)
if (hora >= 5 && hora <= 12)
    {
        console.log(`Bom dia! são exatamente ${hora} horas da manhã`)
    }else if (hora < 18 && hora > 12)
        {
            console.log(`Boa tarde! são exatamente ${hora} horas da tarde`)
        }else if (hora > 18 && hora <= 23) 
        {
            console.log(`Boa noite! são exatamente ${hora} horas da noite`)
        }else
        {
            console.log('Madrugada')
        }

        