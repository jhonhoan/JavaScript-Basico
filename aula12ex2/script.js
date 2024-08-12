function clicar()
{
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById("ano")
    const res = document.getElementById("res")
    
    if (fano.value.length == 0 || fano.value > ano )
    {
        window.alert("[ERRO] Tente novamente")
    }else
    {
        const fsex = document.getElementsByName("sex")
        const idade = ano - Number(fano.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked)
        {
            gen = 'Homem'

            if (idade >= 0 && idade <= 9)
            {
                // crianca
                img.setAttribute('src', 'imagens/criança.png')

            }else if (idade <= 15)
            {
                // crianca jovem
                img.setAttribute('src', 'imagens/criança_jovem.png')


            }else if (idade <= 19)
            {
                // jovem
                img.setAttribute('src', 'imagens/Jovem.png')


            }else if (idade <= 29)
            {
                // jovem adulto
                img.setAttribute('src', 'imagens/jovem-adulto.png')


            }else if (idade <= 40)
            {
                // adulto
                img.setAttribute('src', 'imagens/adulto.png')


            }else if (idade <= 70)
            {
                // velho
                img.setAttribute('src', 'imagens/velho.png')

            }

        }else if (fsex[1].checked)
        {
            gen = 'Mulher'

            if (idade >= 0 && idade <= 9)
                {
                    // crianca femninina
                    img.setAttribute('src', 'imagens/criança_feminina.png')
    
    
                }else if (idade <= 15)
                {
                    // jovem femnina
                    img.setAttribute('src', 'imagens/jovem_feminina.png')
                
    
                }else if (idade <= 19)
                {
                    // adolecente
                    img.setAttribute('src', 'imagens/adolecente.png')
    
    
                }else if (idade <= 29)
                {
                    // jovem adulta
                    img.setAttribute('src', 'imagens/jovem_adulta.png')
    
    
                }else if (idade <= 40)
                {
                    // adulta
                    img.setAttribute('src', 'imagens/adulta.png')
    
                    
                }else if (idade <= 70)
                {
                    // idosa
                img.setAttribute('src', 'imagens/idosa.png')

                }
        }

        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }

}