    const Color = document.getElementById('IP')
    const BtnSubmit = document.getElementById("Btn-Submit")
        BtnSubmit.addEventListener('click', ModifyColor)

        function ModifyColor(){
            const Background = document.querySelector('body')
            if(!IP.value){
                alert("digite uma cor")
                console.log("undefined input")
            }else{
              Background.style.backgroundColor = IP.value  
            }
            
        }