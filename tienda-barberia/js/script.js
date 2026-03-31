let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(nombre + " agregado");
}