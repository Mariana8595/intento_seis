  /*Gallery tap*/
  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
// Botones ver mas
{// Obtener referencias a los botones y textos adicionales
var botonVerMas = document.getElementById("botonVerMas");
var botonVerMas1 = document.getElementById("botonVerMas1");
var botonVerMas2 = document.getElementById("botonVerMas2");

var masTexto = document.getElementById("masTexto");
var masTexto1 = document.getElementById("masTexto1");
var masTexto2 = document.getElementById("masTexto2");
masTexto.style.display = "none";
masTexto1.style.display = "none";
masTexto2.style.display = "none";
// Agregar event listeners para el clic de cada botón
botonVerMas.addEventListener("click", function() {
  toggleTexto(masTexto, botonVerMas);
});

botonVerMas1.addEventListener("click", function() {
  toggleTexto(masTexto1, botonVerMas1);
});

botonVerMas2.addEventListener("click", function() {
  toggleTexto(masTexto2, botonVerMas2);
});

// Función para alternar la visualización del texto adicional y actualizar el texto del botón
function toggleTexto(textoAdicional, boton) {
  if (textoAdicional.style.display === "none" ) {
    textoAdicional.style.display = "block";
    boton.textContent = "Ver menos";
  } else {
    textoAdicional.style.display = "none";
    boton.textContent = "Ver más";
  }
}}
// Función para cerrar el mensaje de cookies al hacer clic en "Cerrar"
function closeCookieMessage() {
  document.getElementById("cookieMessage").style.display = "none";
}