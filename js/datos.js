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
            },
            {
                numero: 7,
                texto: "Los órganos del Estado actúan válidamente previa investidura regular de sus integrantes, dentro de su competencia y en la forma que prescriba la ley. Ninguna magistratura, ninguna persona ni grupo de personas pueden atribuirse, ni aun a pretexto de circunstancias extraordinarias, otra autoridad o derechos que los que expresamente se les hayan conferido en virtud de la Constitución o las leyes. Todo acto en contravención a este artículo es nulo y originará las responsabilidades y sanciones que la ley señale.",
                conceptos: ["principio de juridicidad", "nulidad de derecho público", "competencia"]
            },
            {
                numero: 8,
                texto: "El ejercicio de las funciones públicas obliga a sus titulares a dar estricto cumplimiento al principio de probidad en todas sus actuaciones. Son públicos los actos y resoluciones de los órganos del Estado, así como sus fundamentos y los procedimientos que utilicen. El Presidente de la República, los Ministros de Estado, los diputados y senadores, y las demás autoridades y funcionarios que una ley orgánica constitucional señale, deberán declarar sus intereses y patrimonio en forma pública.",
                conceptos: ["probidad", "transparencia", "publicidad de los actos estatales", "declaración de intereses"]
            },
            {
                numero: 9,
                texto: "El terrorismo, en cualquiera de sus formas, es por esencia contrario a los derechos humanos. Una ley de quórum calificado determinará las conductas terroristas y su penalidad.",
                conceptos: ["terrorismo", "derechos humanos"]
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
                    "1°. El derecho a la vida y a la integridad física y psíquica de la persona. La ley protege la vida del que está por nacer. La pena de muerte sólo podrá establecerse por delito contemplado en ley aprobada con quórum calificado. Se prohíbe la aplicación de todo apremio ilegítimo. El desarrollo científico y tecnológico estará al servicio de las personas y se llevará a cabo con respeto a la vida y a la integridad física y psíquica. La ley regulará los requisitos, condiciones y restricciones para su utilización en las personas, debiendo resguardar especialmente la actividad cerebral, así como la información proveniente de ella;",
                    "2°. La igualdad ante la ley. En Chile no hay persona ni grupo privilegiados. En Chile no hay esclavos y el que pise su territorio queda libre. Hombres y mujeres son iguales ante la ley. Ni la ley ni autoridad alguna podrán establecer diferencias arbitrarias;",
                    "3°. La igual protección de la ley en el ejercicio de sus derechos. Toda persona tiene derecho a defensa jurídica en la forma que la ley señale y ninguna autoridad o individuo podrá impedir, restringir o perturbar la debida intervención del letrado si hubiere sido requerida. Tratándose de los integrantes de las Fuerzas Armadas y de Orden y Seguridad Pública, este derecho se regirá, en lo concerniente a lo administrativo y disciplinario, por las normas pertinentes de sus respectivos estatutos. La ley arbitrará los medios para otorgar asesoramiento y defensa jurídica a quienes no puedan procurárselos por sí mismos. La ley señalará los casos y establecerá la forma en que las personas naturales víctimas de delitos dispondrán de asesoría y defensa jurídica gratuitas, a efecto de ejercer la acción penal reconocida por esta Constitución y las leyes. Toda persona imputada de delito tiene derecho irrenunciable a ser asistida por un abogado defensor proporcionado por el Estado si no nombrare uno en la oportunidad establecida por la ley. Nadie podrá ser juzgado por comisiones especiales, sino por el tribunal que señalare la ley y que se hallare establecido por ésta con anterioridad a la perpetración del hecho. Toda sentencia de un órgano que ejerza jurisdicción debe fundarse en un proceso previo legalmente tramitado. Corresponderá al legislador establecer siempre las garantías de un procedimiento y una investigación racionales y justos. La ley no podrá presumir de derecho la responsabilidad penal. Ningún delito se castigará con otra pena que la que señale una ley promulgada con anterioridad a su perpetración, a menos que una nueva ley favorezca al afectado. Ninguna ley podrá establecer penas sin que la conducta que se sanciona esté expresamente descrita en ella;"
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
