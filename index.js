// Crea un nuevo proyecto de Node

// - Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)

// - Crea un fichero index.html (utiliza el comando "!")

// - Crea un fichero index.js

// - Integra el fichero index.js en el html

// - Crea un botón en html (<button>Botón</button>)

// - Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"

// - Crea un script para lanzar un servidor de desarrollo con http-server

// - Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente

// - Integra jQuery a través del CDN (https://releases.jquery.com/)

// - En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"

const new_button = document.getElementById("nuevo-boton");

new_button.addEventListener("click", (event) => {
  new_button.style.color = "blue";
  showAlert();
});

function showAlert() {
    alert("click en el botón");
}

$(() => {
  $("#nuevo-boton").click((button) => {
    // document.getElementById("nuevo-boton").innerText ="Hola, estoy utilizando jQuery";
    console.log("Hola, estoy utilizando jQuery");
    $(button.target).html("Hola, estoy utilizando jQuery")
  });
});
