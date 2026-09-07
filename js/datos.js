// Estructura de datos: Capítulos -> Artículos -> Numerales
// El texto de los artículos proviene del texto oficial de la Constitución (BCN / Cámara de Diputados).

const constitucion = [
    {
        numero: "I",
        titulo: "Bases de la Institucionalidad",
        articulos: [
            {
                numero: 1,
                texto: "Las personas nacen libres e iguales en dignidad y derechos. La familia es el núcleo fundamental de la sociedad. El Estado reconoce y ampara a los grupos intermedios a través de los cuales se organiza y estructura la sociedad y les garantiza la adecuada autonomía para cumplir sus propios fines específicos. El Estado está al servicio de la persona humana y su finalidad es promover el bien común, para lo cual debe contribuir a crear las condiciones sociales que permitan a todos y a cada uno de los integrantes de la comunidad nacional su mayor realización espiritual y material posible, con pleno respeto a los derechos y garantías que esta Constitución establece."
            },
            {
                numero: 4,
                texto: "Chile es una república democrática."
            }
        ]
    },
    { numero: "II", titulo: "Nacionalidad y Ciudadanía", articulos: [] },
    {
        numero: "III",
        titulo: "De los Derechos y Deberes Constitucionales",
        articulos: [
            {
                numero: 19,
                texto: "La Constitución asegura a todas las personas:",
                numerales: [
                    "1°. El derecho a la vida y a la integridad física y psíquica de la persona.",
                    "2°. La igualdad ante la ley."
                ]
            }
        ]
    },
    { numero: "IV", titulo: "Gobierno", articulos: [] },
    { numero: "V", titulo: "Congreso Nacional", articulos: [] },
    { numero: "VI", titulo: "Poder Judicial", articulos: [] },
    { numero: "VII", titulo: "Ministerio Público", articulos: [] },
    { numero: "VIII", titulo: "Tribunal Constitucional", articulos: [] },
    { numero: "IX", titulo: "Justicia Electoral", articulos: [] },
    { numero: "X", titulo: "Contraloría General de la República", articulos: [] },
    { numero: "XI", titulo: "Fuerzas Armadas, de Orden y Seguridad Pública", articulos: [] },
    { numero: "XII", titulo: "Consejo de Seguridad Nacional", articulos: [] },
    { numero: "XIII", titulo: "Banco Central", articulos: [] },
    { numero: "XIV", titulo: "Gobierno y Administración Interior del Estado", articulos: [] },
    { numero: "XV", titulo: "Reforma de la Constitución y Procedimiento para Elaborar una Nueva Constitución", articulos: [] }
];
