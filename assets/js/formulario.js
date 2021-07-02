var email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("errores");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML= ""
   

   
    if (!regexEmail.test(email.value)) {
        alert(" El email no es valido");
        entrar = true
    }
   
    if(entrar){
        parrafo.innerHTML = erorres
        
    } else {
        alert("Se subscribio correctamente!");
        parrafo.innerHTML = "Formulario Enviado"

    
    }
   
})


