const BtnModify = document.getElementById('modify-Btn')
    BtnModify.addEventListener("click", ModifyFunction)

function ModifyFunction(){
    const H1 = document.querySelector('h1')
    const back = document.querySelector('body')

    back.style.backgroundColor = "#33c7c3"
    H1.style.color = '#490c0c'
    H1.innerText = 'Text Modify'
}