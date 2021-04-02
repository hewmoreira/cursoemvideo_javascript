function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    switch (true) {
        case (fAno.value.length == 0 || fAno.value > ano) :
            alert ('[ERRO] Verifique os dados e tente novamente!')
            break
        default :
           let fsex = document.getElementsByName('radsex')
           let idade = ano - Number(fAno.value)
           let genero = fsex[0].checked ? 'homem' : 'mulher'
           let img = document.createElement('img')
           img.setAttribute('id', 'foto')

           switch (genero) {
               case 'homem':
                   switch (true){
                       case (idade >= 0 && idade <10):
                           img.setAttribute('src', 'image/foto-bebe-m.png')
                           break
                        case (idade < 21):
                            img.setAttribute('src', 'image/foto-jovem-m.png')
                            break
                        case (idade < 50):
                            img.setAttribute('src', 'image/foto-adulto-m.png')
                            break
                        default:
                            img.setAttribute('src', 'image/foto-idoso-m.png')
                        }
                    break
               default:
                   switch (true){
                       case (idade >= 0 && idade <10):
                            img.setAttribute('src', 'image/foto-bebe-f.png')
                            break
                        case (idade < 21):
                            img.setAttribute('src', 'image/foto-jovem-f.png')
                            break
                        case (idade < 50):
                            img.setAttribute('src', 'image/foto-adulto-f.png')
                            break
                        default:
                            img.setAttribute('src', 'image/foto-idoso-f.png')
                        }                   
           }
           res.innerHTML = `Detectamos um ${genero} de ${idade} anos.` 
           res.appendChild(img)
    }
}