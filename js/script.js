// Esperamos a que toda la página esté cargada antes de hacer cualquier cosa
document.addEventListener("DOMContentLoaded", function () {
    mostrarCapitulos();
});

// Genera las tarjetas de capítulos a partir de los datos de datos.js
function mostrarCapitulos() {
    const contenedor = document.querySelector(".capitulos");
    contenedor.innerHTML = ""; // Borramos las tarjetas fijas que había antes

    constitucion.forEach(function (capitulo) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-capitulo");

        tarjeta.innerHTML = `
            <h3>Capítulo ${capitulo.numero}</h3>
            <p>${capitulo.titulo}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}
