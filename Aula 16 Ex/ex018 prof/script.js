let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {  // Recebe um valor (n)
    if(Number(n) >= 1 && Number(n) <= 100) { // Verifica se (n) é um número e se está entre 1 e 100.
        return true // Tem um retorno verdadeiro, não escreve nada na tela.
    } else {
        return false // Tem um retorno falso, escreve algo na tela.
    }
    
} 

function inLista(n, l) { // Recebe um valor (n) e uma lista (l)
    if (l.indexOf(Number(n)) != -1) { // Verifica se na lista (l) se o número não está na lista (-1)
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Só vai adicionar se for um número (isNumero) e não estiver na lista (isLista)
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // Limpa o resultado quando adiciona um elemento.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() // Como se voltasse a clicar o mouse dentro do input pra adicionar o numero.
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length // Total de elementos
        let maior = valores[0] // Quando começar a adicionar os valores, o menor número é o primeiro.
        let menor = valores[0] // E o maior, também é o primeiro (porque só tem 1!).
        let soma = 0
        let media = 0
        
        
        for(let pos in valores) { // Para cada posição (pos) no vetor valores (valores), farei um teste. Essa linha é um LAÇO DE PERCURSO, ela varre a array toda.
            soma += valores[pos]
            if (valores[pos] > maior) { // Se o (valores) na posição (pos) for o maior (maior) valor,
                maior = valores[pos] // Este valor deixa de ser o anterior [0] e passa a ser o valores[pos]
            } if (valores[pos] < menor) // Se o (valores) for o menor, 
                menor = valores[pos] // passa este a ser o valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p>`
        res.innerHTML += `<p>A média dos valores é ${media}.<p>`
    }
}
