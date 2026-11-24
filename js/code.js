
let contenedor = document.querySelector("#contenedor-disenadoras");


fetch("js/disenadoras.json")
  .then(respuesta => respuesta.json())
  .then(disenadoras => {
    disenadoras.forEach(disenadora => {
      contenedor.innerHTML += `
        <div class="col">
          <div class="card h-100 border border-dark">
            <img
              src="${disenadora.imagen}"
              class="card-img-top img-fluid"
              alt="Foto de ${disenadora.nombre}"
            >
            <div class="card-body d-flex flex-column align-items-start">
              <span class="etiqueta-pais mb-3">
                ${disenadora.pais} · ${disenadora.rol}
              </span>
              <h3 class="card-title">${disenadora.nombre}</h3>
              <p class="card-text">${disenadora.descripcion}</p>
              <a
                href="${disenadora.destino}"
                target="_blank"
                class="btn btn-dark mt-auto"
              >
                Conocer más
              </a>
            </div>
            <div class="card-footer text-secondary">
              Año de nacimiento: ${disenadora.nacimiento}
            </div>
          </div>
        </div>
      `;
    });
  });
