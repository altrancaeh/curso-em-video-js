var numAd = [] // Aqui, criei um array para receber os novos numeros.

function adicionar() {
    var num = window.document.querySelector('input#numtxt')
    var tab = window.document.querySelector('select#seltab')
        
    if (num.value < 1 || num.value > 100) {
        window.alert(`[ERRO] Você não adicionou ou o número informado não é válido.`)
    } else {
        var item = document.createElement('option') // Cria uma option na select #seltab
        item.text = `Valor ${num.value} adicionado.` // Adiciona o valor na nova option criada.
        tab.appendChild(item) // coloca o texto na tabela #seltab
        numAd.push(num.value) // Adiciona os novos valores no array NumAd já como números
    }
}

function finalizar() {
    var res = window.document.querySelector('div#res')


    res.innerHTML=`Nosso vetor é composto pelos valores <strong>${numAd.sort(function(a, b){return a-b})}</strong>, 
    totalizando <strong>${numAd.length}</strong> elementos. <br> Deste(s), o menor valor é <strong>${numAd[0]}</strong>
    e o maior é <strong>${numAd[numAd.length-1]}</strong>. <br>
    A média dos valores é ${numAd}` 

/*   if (tab == "") {
        
    }
     res.innerHTML=`Nosso vetor tem ${numAd.length} elementos.`
*/
    }

function resetar() {
    location.reload()
}