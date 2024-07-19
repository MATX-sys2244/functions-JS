const IP = document.getElementById('IP')
const BtnSubmit = document.getElementById('Btn')
 BtnSubmit.addEventListener('click', SubmitText)

function SubmitText(){

    // verificação se o valor é false (!) ou seja, se posssui algo dentro do input
        //quando quiser pegar o valor do input, use o (.value) dessa forma igual no código
        
       if(!IP.value){ 
         alert(undefined + "\nescreva algo")
        }else{
            alert(IP.value)
        }
}
