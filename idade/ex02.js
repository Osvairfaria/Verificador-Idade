function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        let fotoPessoa = document.getElementById('foto-pessoa')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'bebeboy.jpg' )
            } else if (idade < 13) {
                // Criança
                img.setAttribute('src', 'menino.jpg' )
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.jpg' )
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.jpg' )
            } else {
                // Idoso
                img.setAttribute('src', 'homem-velho.jpg' )
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'bebemenina.jpg' )
            } else if (idade < 13) {
                // Criança
                img.setAttribute('src', 'menina.jpg' )

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.jpg' )
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher-adulta.jpg' )
            } else {
                // Idosa
                img.setAttribute('src', 'mulher-velha.jpg' )
            }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    fotoPessoa.appendChild(img)
    
}

}
