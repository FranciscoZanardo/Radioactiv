let nombre= prompt("Ingrese su nombre por favor.")
function nombreLlamado(persona){
    alert("Bienvenidos "+ nombre + " a Radioactiv, tu tienda de ropa.\nEn nuestra tiendas vas a encontra lo que estes buscando con la mejor calidad.")
}
nombreLlamado(nombre)
let menu
do{
    menu = prompt("Menu de inicio\n\nNuestro catalogo de ropa por el momento solo tiene 4 productos a la venta, para ver mas en detalle cada uno de ellos ingresa alguna de las siguientes palabras:\n\nPantalones\nRemeras\nBuzos\nZapatillas\n\nSalir, si no desea ver mas.").toLowerCase()
if (menu === "salir") {
alert("gracias " + nombre + " vuelva pronto.")
} else if(menu === "pantalones"){
    let pantalon = parseInt(prompt("Los estilos de pantalones que tenemos son: Pantalones cargo, Pantalones chinos y pantalones Joggers.\npara saber mas de cada uno de los tipos de pantalones, ingresar la palabra.\n1 Para saber mas sobre los pantalones cargo.\n2 Para saber mas sobre los pantalones chinos.\n3 Para saber mas sobre los pantalones Joggers.\n0 Para volver al menu de inicio."))
    do {
        switch (pantalon) {
            case 0:
                break;
            case 1:
                alert("Los pantalones ‘cargo’. Convertidos en un referente estético de nuestra epoca, estos controvertidos tipos de pantalones para hombre vuelven a colarse en el armario de los hombres con más estilo. Los podes encontrar en blanco, caqui, negro y verde.\nPrecio: $20.800");
                break;
            case 2:
                alert("La alternativa perfecta a un vaquero es un pantalón ‘chino’ así llamado por el tipo de tejido con el que tradicionalmente se realizaban. El color más común es el caqui, aunque el abanico de opciones que se encuentra disponible ahora mismo son el negro, marron y blanco.\nPrecio: $19.500");
                break;
            case 3:
                alert("Hay prendas atemporales que no deberían faltar en tu armario y los ‘joggers’ son uno de los mejores ejemplos. Aportan comodidad y un giro de tendencia a cualquier outfit y lo mejor es que son extraordinariamente confortables. Los podes encontrar en sus colores negro, blanco, marron y beige.\nPrecio: $22.000");
                break;
            default:
                alert("No está esa categoria, vuelva a intentarlo.");
                break;
        }
        if (pantalon !== 0) {
            pantalon = parseInt(prompt("Los estilos de pantalones que tenemos son: Pantalones cargo, Pantalones chinos y pantalones Joggers.\nPara saber mas de cada uno de los tipos de pantalones, ingresar la palabra.\n1 para saber mas sobre los pantalones cargo.\n2 para saber mas sobre los pantalones chinos.\n3 para saber mas sobre los pantalones Joggers.\n0 para volver al inicio."))
        }
    } while (pantalon !== 0);
} else if (menu === "remeras") {
    let remeras = parseInt(prompt("Los estilos de remeras que tenemos son: Remeras Polo, estilo Oversize y Lisas\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre las remeras Oversize.\n2 Para saber mas sobre las remeras estilo Polo.\n3 Para saber mas sobre las remeras Lisas.\n0 para vovler al menu de inicio."))
    do {
        switch (remeras) {
            case 0:
                break;
            case 1:
                alert("Las remeras oversize son prendas de vestir diseñadas con un corte holgado y amplio, conocidas por su estilo cómodo y casual que proporciona una apariencia relajada y moderna. las tenemos en muchos colores, pero se venden mas en negro, beige, marron, blancas y rosadas.\nPrecio: $11.000");
                break;
            case 2:
                alert("Las remeras estilo polo son prendas clásicas que se caracterizan por su cuello tipo solapa y botones en el cuello, ofreciendo un equilibrio entre casualidad y formalidad, ideales para un look deportivo o semiformal. Se encuentran en colores, blanco, negro, verde, gris, marron y azul.\nPrecio: $15.900");
                break;
            case 3:
                alert("Las remeras estilo liso son prendas básicas y versátiles, generalmente sin estampados ni diseños complejos, ideales para crear looks minimalistas y elegantes, adecuadas para diversas ocasiones informales. Con variedad de colores a elecion.\nPrecio: $8.500");
                break;
            default:
                alert("No está esa categoria, vuelva a intentarlo.");
                break;
        }
        if (remeras !== 0) {
        remeras = parseInt(prompt("Los estilos de remeras que tenemos son: Remeras Polo, estilo Oversize y lisas\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre las remeras Oversize.\n2 Para saber mas sobre las remeras estilo Polo.\n3 Para saber mas sobre las remeras Lisas.\n0 para vovler al menu de inicio."))
        }
    } while (remeras !== 0)

} else if (menu === "buzos") {
    let buzos = parseInt(prompt("Los estilos de buzos que tenemos son: Buzo con capucha (hoodie), Buzo con cuello redondo (crewneck), Buzos oversize con capucha.\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre los buzos hoodie.\n2 Para saber mas sobre los buzos crewneck.\n3 Para saber mas sobre los buzos oversize con capucha.\n0 Para vovler al menu de inicio."))
    do {
        switch (buzos) {
            case 0:
                break;
            case 1:
                alert("Los buzos hoodie tienen una capucha ajustable y bolsillos frontales, ideal para un look casual y cómodo. se puede encontrar en colores como blanco, negro, gris, azul y violeta\nPrecio: $20.000");
                break;
            case 2:
                alert("Los buzos crewneck son sin capucha y con un cuello redondo, clásico y versátil para usar en diversas ocasiones. Se encuentrar en variedad de colores.\nPrecio: $18.900");
                break;
            case 3:
                alert("Similar a los hoodies tradicionales pero con un corte más amplio y holgado, a menudo con mangas más largas y una capucha más grande para un estilo más relajado.\nPRecio: $25.500");
                break;
            default:
                alert("No está esa categoria, vuelva a intentarlo.");
                break;
        }
        if (buzos !== 0) {
            buzos = parseInt(prompt("Los estilos de buzos que tenemos son: Buzo con capucha (hoodie), Buzo con cuello redondo (crewneck), Buzos oversize con capucha.\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre los buzos hoodie.\n2 Para saber mas sobre los buzos crewneck.\n3 Para saber mas sobre los buzos oversize con capucha.\n0 Para vovler al menu de inicio."));
        }
    } while (buzos !== 0);

} else if (menu === "zapatillas") {
    let zapatillas = parseInt(prompt("Las marcas de zapatillas que manejamos son: Nick, Zdidas, Vans y DC.\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre las zapatilas Nick y sus estilos.\n2 Para saber mas sobre las zapatillas Adidas y sus estilos.\n3 Para saber mas sobre las zapatillas Vans y sus estilos.\n4 Para saber mas sobre las zapatillas DC y sus estilos."))
    do {
        switch (zapatillas) {
            case 0:
                break;
            case 1:
                alert("Las zapatillas Nike destacan por su combinación de estilo innovador y tecnología avanzada, proporcionando comodidad y rendimiento tanto para actividades deportivas como para el uso diario. De Nick tenemos:\nAir Max: Conocidas por su unidad de aire visible en la suela\nAir Force 1: Un clásico del estilo urbano\nNike Blazer: Un clásico retro que combina estilo y comodidad");
                break;
            case 2:
                alert("Las zapatillas Adidas son reconocidas por su diseño moderno y su avanzada tecnología de confort, siendo una elección popular tanto para el deporte como para el uso diario. De Adidas tenemos:\n\nAdidas NMD: Una combinación de estilo urbano y tecnología Boost, populares en la moda streetwear. Precio: $80.000\nAdidas Superstar: Famosas por su estilo icónico en la moda urbana y el baloncesto. Precio: $39.000\nAdidas Yeezy: Diseñadas en colaboración con Kanye West, destacan por su estilo único y su gran demanda en el mercado. Precio: $75.000");
                break;
            case 3:
                alert("Las zapatillas Vans se destacan por su estilo clásico y durabilidad, siendo un icono en la cultura skate y urbana. Su diseño atemporal y comodidad las hacen una elección popular para el uso diario y deportivo. De Vans tenemos:\n\nVans Old Skool: Con la icónica banda lateral, son conocidas por su durabilidad y estilo clásico. Precio: $57.000\nVans Sk8-Hi: Unas zapatillas altas que ofrecen mayor soporte y protección, populares en el mundo del skate. PRecio $74.000\nVans Authentic: El diseño original de Vans, simple y versátil, ideal para cualquier ocasión. Precio $24.000");
                break;
            case 4:
                alert("Las zapatillas DC destacan por su diseño robusto y comodidad, siendo una elección popular entre los skaters por su durabilidad y tracción superior. Su estilo moderno y funcionalidad las hacen ideales tanto para el deporte como para el uso diario. De DC tenemos:\n\nDC Trase: Simples y elegantes, perfectas para el uso diario con un estilo casual. PRecio $15.900\nDC Pure: Con una construcción robusta y protección adicional, son ideales para el skateboarding. Precio $54.500\nDC Manteca: Diseñadas para la comodidad y el estilo, ofrecen una buena amortiguación y soporte para el skate urbano. Precio $84.000");
                break;
            default:
                alert("No está esa categoria, vuelva a intentarlo.");
                break;
        }
        if (zapatillas !== 0) {
            zapatillas = parseInt(prompt("Las marcas de zapatillas que manejamos son: Nick, Adidas, Vans y DC.\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre las zapatilas Nick y sus estilos.\n2 Para saber mas sobre las zapatillas Adidas y sus estilos.\n3 Para saber mas sobre las zapatillas Vans y sus estilos.\n4 Para saber mas sobre las zapatillas DC y sus estilos.\n0 Para vovler al menu de inicio."));
        }
    } while (zapatillas !== 0);
} else{
    alert("no tenemos ese producto")
}
} while(menu !== "salir")