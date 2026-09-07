// Estructura de datos: Capítulos -> Artículos -> Numerales
// El texto de los artículos proviene del texto oficial de la Constitución (BCN).

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
    }
];
