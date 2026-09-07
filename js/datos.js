// Estructura de datos: Capítulos -> Artículos -> Numerales -> Conceptos
// El texto de los artículos proviene del texto oficial de la Constitución (BCN / Cámara de Diputados).
// "conceptos" son etiquetas temáticas (basadas en doctrina constitucional) para facilitar la búsqueda.

const constitucion = [
    {
        numero: "I",
        titulo: "Bases de la Institucionalidad",
        articulos: [
            {
                numero: 1,
                texto: "Las personas nacen libres e iguales en dignidad y derechos. La familia es el núcleo fundamental de la sociedad. El Estado reconoce y ampara a los grupos intermedios a través de los cuales se organiza y estructura la sociedad y les garantiza la adecuada autonomía para cumplir sus propios fines específicos. El Estado está al servicio de la persona humana y su finalidad es promover el bien común, para lo cual debe contribuir a crear las condiciones sociales que permitan a todos y a cada uno de los integrantes de la comunidad nacional su mayor realización espiritual y material posible, con pleno respeto a los derechos y garantías que esta Constitución establece.",
                conceptos: ["dignidad humana", "derechos fundamentales", "familia", "bien común", "principio de servicialidad del Estado"]
            },
            {
                numero: 2,
                texto: "Son emblemas nacionales la bandera nacional, el escudo de armas de la República y el himno nacional.",
                conceptos: ["emblemas nacionales", "símbolos patrios"]
            },
            {
                numero: 3,
                texto: "El Estado de Chile es unitario. La administración del Estado será funcional y territorialmente descentralizada, o desconcentrada en su caso, de conformidad a la ley. Los órganos del Estado promoverán el fortalecimiento de la regionalización del país y el desarrollo equitativo y solidario entre las regiones, provincias y comunas del territorio nacional.",
                conceptos: ["Estado unitario", "descentralización", "regionalización"]
            },
            {
                numero: 4,
                texto: "Chile es una república democrática.",
                conceptos: ["república", "democracia"]
            },
            {
                numero: 5,
                texto: "La soberanía reside esencialmente en la Nación. Su ejercicio se realiza por el pueblo a través del plebiscito y de elecciones periódicas y, también, por las autoridades que esta Constitución establece. Ningún sector del pueblo ni individuo alguno puede atribuirse su ejercicio. El ejercicio de la soberanía reconoce como limitación el respeto a los derechos esenciales que emanan de la naturaleza humana. Es deber de los órganos del Estado respetar y promover tales derechos, garantizados por esta Constitución, así como por los tratados internacionales ratificados por Chile y que se encuentren vigentes.",
                conceptos: ["soberanía", "derechos humanos", "tratados internacionales", "límites al poder"]
            },
            {
                numero: 6,
                texto: "Los órganos del Estado deben someter su acción a la Constitución y a las normas dictadas conforme a ella, y garantizar el orden institucional de la República. Los preceptos de esta Constitución obligan tanto a los titulares o integrantes de dichos órganos como a toda persona, institución o grupo. La infracción de esta norma generará las responsabilidades y sanciones que determine la ley.",
                conceptos: ["principio de legalidad", "supremacía constitucional", "Estado de derecho"]
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
                    "2°. La igualdad ante la ley.",
                    "3°. La igual protección de la ley en el ejercicio de sus derechos."
                ],
                conceptos: ["derechos fundamentales", "vida", "integridad física", "igualdad", "debido proceso", "tutela judicial"]
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
