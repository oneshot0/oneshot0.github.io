const mensajes = [
  "Inicializando magia...",
  "Cargando creatividad...",
  "Listo para construir algo increíble."
];

const objetivo = document.getElementById("texto-dinamico");
let indice = 0;

if (objetivo) {
  setInterval(() => {
    indice = (indice + 1) % mensajes.length;
    objetivo.textContent = mensajes[indice];
  }, 2200);
}

const enlacesMenu = document.querySelectorAll(".menu-link");
const secciones = document.querySelectorAll("main .seccion");
const encabezado = document.querySelector(".encabezado");

function activarEnlace(idSeccion) {
  enlacesMenu.forEach((enlace) => {
    const objetivoEnlace = enlace.getAttribute("href")?.slice(1);
    enlace.classList.toggle("activo", objetivoEnlace === idSeccion);
  });
}

if (secciones.length && enlacesMenu.length) {
  const obtenerOffset = () => (encabezado?.offsetHeight || 0) + 24;

  const actualizarMenuActivo = () => {
    const limite = obtenerOffset();
    let idActivo = secciones[0].id;

    secciones.forEach((seccion) => {
      const top = seccion.getBoundingClientRect().top;
      if (top - limite <= 0) {
        idActivo = seccion.id;
      }
    });

    activarEnlace(idActivo);
  };

  let enEspera = false;
  const actualizarConRaf = () => {
    if (enEspera) {
      return;
    }

    enEspera = true;
    requestAnimationFrame(() => {
      actualizarMenuActivo();
      enEspera = false;
    });
  };

  window.addEventListener("scroll", actualizarConRaf, { passive: true });
  window.addEventListener("resize", actualizarMenuActivo);

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const idDestino = enlace.getAttribute("href")?.slice(1);
      if (idDestino) {
        activarEnlace(idDestino);
      }
    });
  });

  actualizarMenuActivo();
}