var logo = document.querySelectorAll('input.logo')[0]
var primeiraMsg = document.querySelectorAll('input.msg1')[0]
var segundaMsg = document.querySelectorAll('input.msg2')[0]

var corDalogo = document.querySelectorAll('input.logo')[1]
var fundoPrimeiraMsg = document.querySelectorAll('input.msg1')[1]
var fundoSegundaMsg = document.querySelectorAll('input.msg2')[1]

var estiloBadge = document.querySelector('select')

var linkHtml = document.querySelector('textarea#linkHTML')
var linkMarkdown = document.querySelector('textarea#linkMARKDOWN')

// MENSAGEM 1 E 2 PREENCHIDAS

document.querySelector('button').addEventListener('click', () => {
    if(!primeiraMsg.value == ''){
        if(fundoPrimeiraMsg.value == '') fundoPrimeiraMsg.value = 'gray'
        if(fundoSegundaMsg.value == '') fundoSegundaMsg.value = '44CC11'

        const informacoes = {
            msg1: `${primeiraMsg.value}-`,
            msg2: `${segundaMsg.value}-`,
            fundo2: fundoSegundaMsg.value,
            estilo: `?style=${estiloBadge.value}`,
            logo: `&logo=${logo.value}`,
            corLogo: `&logoColor=${corDalogo.value}`,
            fundo1: `&labelColor=${fundoPrimeiraMsg.value}`
        }

        if(logo.value == ''){
            informacoes.logo = ''
            informacoes.corLogo = ''
            corDalogo.value = ''
            corDalogo.placeholder = ''
        }else if (corDalogo.value == ''){
            corDalogo.value = 'white'
            informacoes.corLogo = '&logoColor=white'
        }
        if (segundaMsg.value == ''){
            informacoes.msg2 = ''
            informacoes.fundo1 = ''
            informacoes.fundo2 = fundoPrimeiraMsg.value
            segundaMsg.placeholder = ''
            fundoSegundaMsg.value = ''
            fundoSegundaMsg.placeholder = ''
        }else{
            fundoSegundaMsg.placeholder = '44CC11'
        }
    
        logo.placeholder = ''
        
        const badgeString = `https://img.shields.io/badge/${Object.values(informacoes).join('')}`
    
        console.log(informacoes);
    
        document.querySelector('#badge').setAttribute('src', badgeString)
    
        fetch(badgeString).then(res => {
            if(res.status != 200){
                window.alert('BADGE NÃO ENCONTRADA! verifique se as informações estão corretas e tente novamente.')
            }else{
                linkHtml.textContent = `<img src="${badgeString}">`
                linkMarkdown.textContent = `![Static Badge](${badgeString})`
            }
        })

    }else{
        window.alert('A primeira mensagem é obrigatória, tente novamente.')
        primeiraMsg.focus()
    }
})