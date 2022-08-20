function calcular() {
    var numero = window.document.querySelector('input#txtnumero')
    var tab = window.document.querySelector('select#seltab')

    if (numero.value == null || numero.value == "") {
        window.alert ('[ERRO] Você precisa informar um número.')
    } else {
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''

        /* Resolução do Professor com WHILE  
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
      */
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
