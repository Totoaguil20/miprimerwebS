

document.addEventListener("DOMContentLoaded", function() {
   function mostrarAlerta() {
    alert("Hola, esto es una alerta de JavaScript");
  }
  
  const form = document.getElementById("myForm");
  
    
  
  function validateForm() {
    const input = document.getElementById("email");
    const inputValue = input.value;
  
    if (validateEmail(inputValue)) {
       alert('Correo electrónico enviado correctamente');
     
      console.log("Error al ingresar");
    } else {
       alert('Error al ingresar');
      
    }
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
  }
  
  if(form){
   form.addEventListener("submit", function (event) {
     event.preventDefault();
     validateForm();
 
  })
 }
  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
      document.querySelector(".nav-links")
        .classList.toggle("nav-links-responsive");
    });
});