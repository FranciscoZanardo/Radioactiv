const productos = [
    {
        marca: "Remera",
        nombre: "Oversize",
        precio: 11000,
    },
    {
        marca: "Remera",
        nombre: "Lisas",
        precio: 8500,
    },
    {
        marca: "Buzos",
        nombre: "oversize",
        precio: 20000,
    },
    {
        marca: "Buzos",
        nombre: "crewneck",
        precio: 18000,
    },
    {
        marca: "nike",  
        nombre: "Air Max",
        precio: 55000
    },
    { 
        marca: "nike",
        nombre: "Air Force 1",
        precio: 75500
    },
    { 
        marca: "nike",
        nombre: "Nike Blazer",
        precio: 62000
    },
    {
        marca: "adidas",
        nombre: "Adidas NMD",
        precio: 80000
    },
    {
        marca: "Adidas",
        nombre: "Adidas Superstar",
        precio: 39000
    },
    {
        marca: "Adidas",
        nombre: "Adidas Yeezy",
        precio: 75000
    },
    {
        marca: "vans",
        nombre: "Vans Old Skool",
        precio: 57000
    },
    {
        marca: "Vans",
        nombre: "Vans Sk8-Hi",
        precio: 74000
    },
    {
        marca: "Vans",
        nombre: "Vans Authentic",
        precio: 24000
    },
    {
        marca: "DC",
        nombre: "DC Trase",
        precio: 15900
    },
    {
        marca: "DC",
        nombre: "DC Pure",
        precio: 54500
    },
    {
        marca: "DC",
        nombre: "DC Manteca",
        precio: 84000
    }
];


let carrito;

localStorage.getItem("carrito") ? carrito = JSON.parse(localStorage.getItem("carrito")) : carrito = [];

const container = document.getElementById("container");

function botonAgregarCarrito (productos) {
    if (carrito.some(el => el.nombre === productos.nombre)) {
        const sumarCantidad = carrito.findIndex(el => el.nombre === productos.nombre);
        carrito[sumarCantidad].cantidad += 1;
        carrito[sumarCantidad].subtotal = carrito[sumarCantidad].cantidad * carrito[sumarCantidad].precio;
        Toastify({
            text: `${productos.nombre} se agrego al carrito`,
            gravity: "bottom",
            duration: 3000
            }).showToast();
    } else {
        const nuevoProducto = {
            ...productos,
            cantidad: 1,
        };
        carrito.push(nuevoProducto);
        Toastify({
            text: `${productos.nombre} se agrego al carrito`,
            gravity: "bottom",
            duration: 3000
            }).showToast();
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

function cardsDeProdcutos (productos) {
    const card = document.createElement("div");
    card.className = "card";

    const imagen = document.createElement("img");
    imagen.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
    imagen.className = "img";

    const tituloMarca = document.createElement("h3");
    tituloMarca.innerText = productos.marca;

    const parrafoProducto = document.createElement("p");
    parrafoProducto.innerText = productos.nombre;

    const parrafoPrecio = document.createElement("p");   
    parrafoPrecio.innerText = `$${productos.precio}`;

    const botonAgregar = document.createElement("button");
    botonAgregar.innerText = `AGREGAR AL CARRITO`;
    botonAgregar.onclick = () => {botonAgregarCarrito(productos)};
    
    card.append(tituloMarca);
    card.append(imagen)
    card.append(parrafoProducto);
    card.append(parrafoPrecio);
    card.append(botonAgregar)

    container.append(card);
};

const hojaCarrito = document.getElementById("hoja-carrito")
const fondoCarrito = document.getElementById("carrito")

function cardParaCarrito (productos) {
    const card = document.createElement("div");
    card.className = "card";
    
    const tituloMarca = document.createElement("h3");
    tituloMarca.innerText = productos.marca;
    
    const imagen = document.createElement("img");
    imagen.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
    imagen.className = "img";
    
    const parrafoProducto = document.createElement("p");
    parrafoProducto.innerText = productos.nombre;
    
    const cantidades = document.createElement("p");
    cantidades.innerText = productos.cantidad;

    const subtotales = document.createElement("p");
    if (productos.cantidad > 1) {
        subtotales.innerText = `$${productos.subtotal}`;
    }

    const parrafoPrecio = document.createElement("p");   
    parrafoPrecio.innerText = `$${productos.precio}`;
    
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = `ELIMINAR PRODUCTO`;
    botonBorrar.onclick = () => {
        carrito = carrito.filter(el => el.nombre !== productos.nombre);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    
    card.append(tituloMarca);
    card.append(imagen);
    card.append(parrafoProducto);
    card.append(parrafoPrecio);
    card.append(cantidades)
    card.append(subtotales)
    card.append(botonBorrar);
    
    fondoCarrito.append(card)
};

productos.forEach(el => {cardsDeProdcutos(el);});

const mostrarCarrito = document.createElement("button");
mostrarCarrito.innerText = `MOSTRAR MI CARRITO`;
mostrarCarrito.onclick = () => {
    fondoCarrito.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach(el => {cardParaCarrito(el)})
    } else {
        Toastify({
            text: `El carrito esta vacio`,
            gravity: "bottom",
            duration: 3000
        }).showToast();
    }
};
mostrarCarrito.className = "menu-carrito";

const h1 = document.createElement("h1");
h1.innerText = "Radioacitv";

hojaCarrito.append(h1);
hojaCarrito.append(mostrarCarrito);
