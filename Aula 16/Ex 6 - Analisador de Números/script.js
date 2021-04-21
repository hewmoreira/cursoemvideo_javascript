let inNumero = document.getElementById('inNumero')
let caixaDeNumeros = document.getElementById('caixaDeNumeros')
let res = document.getElementById('res')
let caixa = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inCaixa (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(inNumero.value) && !inCaixa(inNumero.value, caixa)){
        caixa.push(Number(inNumero.value))
        let item = document.createElement('option')
        item.text = `Valor ${inNumero.value} adicionado.`
        caixaDeNumeros.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    inNumero.value = ''
    inNumero.focus()
}

function finalizar(){
    if (caixa.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = caixa.length
        let maior = caixa[0]
        let menor = caixa[0]
        let soma = 0
        let media = 0

        for (let pos in caixa){
            soma += caixa[pos]
            if (caixa[pos] > maior){
                maior = caixa[pos]
            }
            if (caixa[pos] < menor){
                menor = caixa[pos]
            }
        }
        
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limparDados () {
    caixaDeNumeros.innerHTML = ''
    res.innerHTML = ''
    caixa = []
}