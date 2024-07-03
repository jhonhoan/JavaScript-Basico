function clicar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var dados = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)
        {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }else{
            var fsex = document.getElementsByName('radiosex')
            var idade = ano - Number(fano.value)
            var gen = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

            if (fsex[0].checked){

                
                if (idade >= 0 && idade <= 7)
                    {
                        gen = 'Criança'
                        img.setAttribute('src', 'imagens/criança.png')

                    }else if (idade < 15 )
                        {
                            gen = 'Criança-jovem'
                            img.setAttribute('src', 'imagens/criança_jovem.png')

                        }else if (idade < 20)
                            {
                                gen = 'jovem'
                                img.setAttribute('src', 'imagens/jovem.png')
                            }else if(idade < 27)
                                {
                                    gen = 'Jovem-Adulto'
                                    img.setAttribute('src', 'imagens/jovem-adulto.png')
                                }else if (idade < 50)
                                    {
                                        gen = 'Adulto'
                                        img.setAttribute('src', 'imagens/adulto.png')
                                    }else 
                                    {
                                        gen = 'Idoso'
                                        img.setAttribute('src', 'imagens/velho.png')

                                    }


            }else if (fsex[1].checked)
                {

                    if (idade >= 0 && idade <= 7)
                        {
                            gen = 'Criança'
                            img.setAttribute('src', 'imagens/criança_feminina.png')
    
                        }else if (idade < 15 )
                            {
                                gen = 'Criança-jovem'
                                img.setAttribute('src', 'imagens/jovem_feminina.png')
    
                            }else if (idade < 20)
                                {
                                    gen = 'jovem'
                                    img.setAttribute('src', 'imagens/adolecente.png')
                                }else if(idade < 27)
                                    {
                                        gen = 'Jovem-Adulta'
                                        img.setAttribute('src', 'imagens/jovem_adulta.png')
                                    }else if (idade < 50)
                                        {
                                            gen = 'Adulta'
                                            img.setAttribute('src', 'imagens/adulta.png')
                                        }else 
                                        {
                                            gen = 'Idosa'
                                            img.setAttribute('src', 'imagens/idosa.png')
                                            
                                        }


                }
                    dados.style.textAlign = 'center'
                    dados.innerHTML = `Detectamos ${gen} com ${idade} anos.`
                    dados.appendChild(img)
        }

}