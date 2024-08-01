
const arrayPantalones = [
    {
    nombre: "Pantalones Cargo",
    precio: 20800,
    },
    {
    nombre: "Pantalónes Chinos",
    precio: 19500,
    },
    {
    nombre: "Pantalones Joggers",
    precio: 20000,
    }
]

const arrayRemeras = [
    {
    nombre: "Remeras Oversize",
    precio: 11000,
    },
    {
    nombre: "Remeras estilo Polo",
    precio: 15900,
    },
    {
    nombre: "Remeras Lisas",
    precio: 8500,
    }
]

const arrayBuzos = [
    {
    nombre: "Buzos hoodie",
    precio: 20000,
    },
    {
    nombre: "Buzos crewneck",
    precio: 18000,
    },
    {
    nombre: "Buzos oversize con capucha",
    precio: 25500,
    }
]

const arrayZapatillas = [
        {
        marca: "nike",
        modelo: [
            {
                nombre: "Air Max",
                precio: 55000
            },
            { 
                nombre: "Air Force 1",
                precio: 75500
            },
            { 
                nombre: "Nike Blazer",
                precio: 62000
            }
            ]
        },
        {
        marca: "Adidas",
        modelo: [
            { 
                nombre: "Adidas NMD",
                precio: 80000
            },
            {
                nombre: "Adidas Superstar",
                precio: 39000
            },
            {
                nombre: "Adidas Yeezy",
                precio: 75000
            }
            ]
        },
        {
        marca: "Vans",
        modelos: [
            {
                nombre: "Vans Old Skool",
                precio: 57000
            },
            {
                nombre: "Vans Sk8-Hi",
                precio: 74000
            },
            {
                nombre: "Vans Authentic",
                precio: 24000
            }
            ]
        },
        {
        marca: "DC",
        modelos: [
            {
                nombre: "DC Trase",
                precio: 15900
            },
            {
                nombre: "DC Pure",
                precio: 54500
            },
            {
                nombre: "DC Manteca",
                precio: 84000
            }
        ]
    }
]

const carrito = []

let nombre = prompt("Ingrese su nombre por favor.")

function nombreLlamado(){
    alert("Bienvenidos "+ nombre + " a Radioactiv, tu tienda de ropa.\nEn nuestra tiendas vas a encontra lo que estes buscando con la mejor calidad.")
}

nombreLlamado(nombre)

let menu

do{
    menu = prompt("Menu de inicio\n\nNuestro catalogo de ropa por el momento solo tiene 4 productos a la venta, para ver mas en detalle cada uno de ellos ingresa alguna de las siguientes palabras:\n\nPantalones\nRemeras\nBuzos\nZapatillas\n\nSalir, si no desea ver mas.").toLowerCase()

if (menu === "salir") {
alert("gracias " + nombre + " vuelva pronto.")

} else if(menu === "pantalones"){
    let pantalon = arrayPantalones.map ((arrayPantalones) => arrayPantalones.nombre + " $" + arrayPantalones.precio) 
    alert(pantalon.join("\n"))

} else if (menu === "remeras") {
    let remeras = arrayRemeras.map ((arrayRemeras) => arrayRemeras.nombre + " $" + arrayRemeras.precio)
    alert(remeras.join("\n"))

} else if (menu === "buzos") {
    let buzos = arrayBuzos.map ((arrayBuzos) => arrayBuzos.nombre + " $" + arrayBuzos.precio)
    alert(buzos.join("\n"))

} else if (menu === "zapatillas") {
    let zapatillas = parseInt(prompt("Las marcas de zapatillas que manejamos son: Nick, Adidas, Vans y DC.\nIngresa cualquiera de los numero idicados aca abajo para saber mas sobre los productos.\n1 Para saber mas sobre las zapatilas Nick y sus estilos.\n2 Para saber mas sobre las zapatillas Adidas y sus estilos.\n3 Para saber mas sobre las zapatillas Vans y sus estilos.\n4 Para saber mas sobre las zapatillas DC y sus estilos."))

    do {
        switch (zapatillas) {
            case 0:
                break;
            case 1:
                alert("Air Max: Conocidas por su unidad de aire visible en la suela. Precio: $55.000\nAir Force 1: Un clásico del estilo urbano. Precio $75.500\nNike Blazer: Un clásico retro que combina estilo y comodidad. Precio $62.000");
                break;
            case 2:
                alert("Adidas NMD: Una combinación de estilo urbano y tecnología Boost, populares en la moda streetwear. Precio: $80.000\nAdidas Superstar: Famosas por su estilo icónico en la moda urbana y el baloncesto. Precio: $39.000\nAdidas Yeezy: Diseñadas en colaboración con Kanye West, destacan por su estilo único y su gran demanda en el mercado. Precio: $75.000");
                break;
            case 3:
                alert("Vans Old Skool: Con la icónica banda lateral, son conocidas por su durabilidad y estilo clásico. Precio: $57.000\nVans Sk8-Hi: Unas zapatillas altas que ofrecen mayor soporte y protección, populares en el mundo del skate. PRecio $74.000\nVans Authentic: El diseño original de Vans, simple y versátil, ideal para cualquier ocasión. Precio $24.000");
                break;
            case 4:
                alert("DC Trase: Simples y elegantes, perfectas para el uso diario con un estilo casual. PRecio $15.900\nDC Pure: Con una construcción robusta y protección adicional, son ideales para el skateboarding. Precio $54.500\nDC Manteca: Diseñadas para la comodidad y el estilo, ofrecen una buena amortiguación y soporte para el skate urbano. Precio $84.000");
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