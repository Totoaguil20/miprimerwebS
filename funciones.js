

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






    //Galeria de Fotos


    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguente");
    const imageSlider = document.querySelector(".imageSlider");
    const galleryImages = document.querySelector(".gallery-images");
    const switchButton = document.getElementById("switchButton");
    const contenedorSlider = document.querySelector(".slider-container");
    
    const imagenes = [
      'img/imagen1.jpg',
      'img/imagen2.jpg',
      'img/imagen3.jpg',
      'img/imagen4.jpg'
    ];
    var currentImageIndex = 0;
    var isGalleryView = false;
   
    
    anterior.addEventListener("click", anteriorImagen);
    siguiente.addEventListener("click", proximaImagen);
    switchButton.addEventListener("click", toggleView);

    function anteriorImagen() {
      console.log("anterior");
      currentImageIndex = (currentImageIndex - 1 + imagenes.length) % imagenes.length;
      updateSlider();
    }

    function proximaImagen() {
      console.log("siguiente");
      currentImageIndex = (currentImageIndex + 1) % imagenes.length;
      updateSlider();
    }

    function updateSlider() {
      const currentImage = imagenes[currentImageIndex];
      imageSlider.querySelector('img').src = currentImage;
    }
    function toggleView() {
      if (isGalleryView) {
        switchButton.textContent = "Ver vista galería de imágenes";
        contenedorSlider.style.display = "block";
        galleryImages.style.display = "none";
      } else {
        switchButton.textContent = "Ver vista deslizador de imágenes";
        contenedorSlider.style.display = "none";
        galleryImages.style.display = "block";
      }

      isGalleryView = !isGalleryView;
    }
  });
