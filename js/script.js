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

// --- BUSCADOR ---

const inputBuscador = document.querySelector("#inputBuscador");
const contenedorResultados = document.querySelector("#resultadosBusqueda");
const contenedorCapitulos = document.querySelector(".capitulos");

inputBuscador.addEventListener("input", function () {
    const consulta = inputBuscador.value.trim().toLowerCase();

    if (consulta === "") {
        // Si el buscador está vacío, mostramos los capítulos normales
        contenedorResultados.innerHTML = "";
        contenedorCapitulos.style.display = "grid";
        return;
    }

    contenedorCapitulos.style.display = "none";

    const resultados = [];

    constitucion.forEach(function (capitulo) {
        capitulo.articulos.forEach(function (articulo) {
            const coincideNumero = String(articulo.numero) === consulta;
            const coincideTexto = articulo.texto.toLowerCase().includes(consulta);
            const coincideNumerales = (articulo.numerales || []).some(n => n.toLowerCase().includes(consulta));
            const coincideConcepto = (articulo.conceptos || []).some(c => c.toLowerCase().includes(consulta));

            if (coincideNumero || coincideTexto || coincideNumerales || coincideConcepto) {
                resultados.push({ capitulo, articulo });
            }
        });
    });

    mostrarResultados(resultados, consulta);
});

function mostrarResultados(resultados, consulta) {
    contenedorResultados.innerHTML = "";

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p class="sin-resultados">No se encontraron resultados para "${consulta}".</p>`;
        return;
    }

    resultados.forEach(function ({ capitulo, articulo }) {
        const item = document.createElement("div");
        item.classList.add("resultado-item");

        let htmlNumerales = "";
        if (articulo.numerales && articulo.numerales.length > 0) {
            htmlNumerales = '<ul class="resultado-numerales">';
            articulo.numerales.forEach(function (numeral) {
                htmlNumerales += `<li>${numeral}</li>`;
            });
            htmlNumerales += '</ul>';
        }

        item.innerHTML = `
            <h4>Artículo ${articulo.numero}</h4>
            <p class="resultado-texto">${articulo.texto}</p>
            ${htmlNumerales}
            <span class="resultado-capitulo">Capítulo ${capitulo.numero} · ${capitulo.titulo}</span>
        `;

        contenedorResultados.appendChild(item);
    });
}
