// Variables para el icono en pantallas pequeñas
let iconoMenu = document.querySelector("#icono-menu");
let barraNavegacion = document.querySelector(".barra-navegacion");

// Evento al hacer clic en el boton de menu
iconoMenu.onclick = () => {
  iconoMenu.classList.toggle("bx-x");
  barraNavegacion.classList.toggle("seleccion");
};

// Variables para obtener todas las secciones del header y enlaces del header.
let secciones = document.querySelectorAll("section");
let linksNavegacion = document.querySelectorAll("header nav a");

// Evento al hacer scroll en la pagina
window.onscroll = () => {
  // Bucle para cada seccion
  secciones.forEach((sec) => {
    // Obtenemos las pociones donde se encuentra el scroll de la pagina actaual
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    // Obtener el id de la seccion donde nos encontremos
    let id = sec.getAttribute("id");
    // Comprobar si la posición vertical actual de desplazamiento está dentro del rango de la sección actual
    if (top >= offset && top < offset + height) {
      // Si la sección actual está en la vista, activar el enlace correcto
      linksNavegacion.forEach((links) => {
        // Quitamos el estilo a la anterior seccion
        links.classList.remove("seleccion");
        // Asignamos al nuevo id el estilo de la seccion seleccionada
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("seleccion");
      });
    }
  });

  // Mantenemos statico el header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Quitar barra de navegacion al seleccionar una seccion
  iconoMenu.classList.remove("bx-x");
  barraNavegacion.classList.remove("seleccion");
};
