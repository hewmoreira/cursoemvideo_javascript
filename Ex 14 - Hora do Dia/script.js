function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}min`
    if (hora > 5 && hora < 12){
        //BOM DIA!
        img.src = 'image/manha.png'  
        document.body.style.background = '#F6EADF'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'image/tarde.png'  
        document.body.style.background = '#FBBA84'
    } else {
        //BOA NOITE!!
        img.src = 'image/noite.png'
        document.body.style.background = '#A5749A'
    }
}
