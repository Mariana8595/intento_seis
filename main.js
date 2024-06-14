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
  // Función para abrir, cerrar o minimizar el chat
  function toggleForm() {
    var chatPopup = document.getElementById("myForm");
    var chatTitle = document.getElementById("chatTitle");
    var chatButton = document.querySelector(".container.c8 button");
    var enviarBtn = document.getElementById("enviarBtn");

    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
        chatPopup.style.display = "block";
        chatTitle.innerHTML = "Chat";
        chatButton.style.display = "none"; // Ocultar el botón "Chat" cuando la ventana de chat está abierta
        enviarBtn.style.display = "block"; // Mostrar el botón "Enviar" cuando la ventana de chat está abierta
    } else {
        chatPopup.style.display = "none";
        chatTitle.innerHTML = "¿Tienes alguna duda? Chatea conmigo";
        chatButton.style.display = "block"; // Mostrar el botón "Chat" cuando la ventana de chat está minimizada
        enviarBtn.style.display = "none"; // Ocultar el botón "Enviar" cuando la ventana de chat está minimizada
    }
}
