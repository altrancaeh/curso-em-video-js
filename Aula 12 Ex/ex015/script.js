function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-menino.jpg')
            } else if  (idade < 21) {
                // Jovem
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
               // Adulto     
               img.setAttribute('src', 'homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-menina.jpg')
                document.body.style.background = "black"
            } else if  (idade < 21) {
                // Jovem
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'mulher.jpg')     
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}