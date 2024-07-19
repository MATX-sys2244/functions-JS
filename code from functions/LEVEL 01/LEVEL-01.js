// primeiro vamos criar algumas variáveis 
const Btn = document.getElementById('modify')
    Btn.addEventListener('click', ModifyPage)

//criando uma função para o botão
function ModifyPage(){
    const Background = document.querySelector('body')
    Background.style.backgroundColor = "red"
}
// ao clicar no botão a página irá mudar de cor de fundo.