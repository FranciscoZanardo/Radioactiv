let carrito;

localStorage.getItem("carrito") ? carrito = JSON.parse(localStorage.getItem("carrito")) : carrito = [];

const container = document.getElementById("container");
const visible = document.getElementsByClassName("visible")

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
    imagen.src = productos.img;
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
    botonAgregar.className = "boton-agregar"
    
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
    imagen.src = productos.img;
    imagen.className = "img";
    
    const parrafoProducto = document.createElement("p");
    parrafoProducto.innerText = productos.nombre;
    
    const cantidades = document.createElement("p");
    cantidades.innerText = productos.cantidad;

    const subtotales = document.createElement("p");
    if (productos.cantidad > 1) {
        subtotales.innerText = `$${productos.subtotal}`
    };

    const parrafoPrecio = document.createElement("p");   
    parrafoPrecio.innerText = `$${productos.precio}`;
    
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = `ELIMINAR PRODUCTO`;
    botonBorrar.className = "boton-agregar";
    botonBorrar.onclick = () => {
        carrito = carrito.filter(el => el.nombre !== productos.nombre);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        card.remove();
    };
    
    card.append(tituloMarca);
    card.append(imagen);
    card.append(parrafoProducto);
    card.append(parrafoPrecio);
    card.append(cantidades)
    card.append(subtotales)
    card.append(botonBorrar);
    
    fondoCarrito.append(card);
};

fetch('./data.json')
    .then(Response => Response.json())
    .then(data => {
        data.forEach(el => {cardsDeProdcutos(el);});
    })
    .catch(error => console.log(error))
    .catch(error => console.log(error))
    
const mostrarCarrito = document.createElement("button");
mostrarCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>`;
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