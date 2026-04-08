let cds = JSON.parse(localStorage.getItem("cds")) || [];
let carrito = [];

// PANTALLAS
function irATienda() {
  document.getElementById("inicio").classList.remove("activa");
  document.getElementById("tienda").classList.add("activa");
  mostrarCDs();
}

function volverInicio() {
  document.getElementById("tienda").classList.remove("activa");
  document.getElementById("inicio").classList.add("activa");
}

// STORAGE
function guardarEnStorage() {
  localStorage.setItem("cds", JSON.stringify(cds));
}

// MOSTRAR
function mostrarCDs() {
  const tabla = document.getElementById("tablaCDs");
  tabla.innerHTML = "";

  cds.forEach((cd, index) => {
    tabla.innerHTML += `
      <div class="card">
        <img src="${cd.imagen}" class="img-cd">
        <h3>${cd.nombre}</h3>
        <p>${cd.artista}</p>
        <p>$${cd.precio}</p>

        <button onclick="agregarAlCarrito(${index})">🛒</button>
        <button onclick="editarCD(${index})">✏️</button>
        <button onclick="eliminarCD(${index})">❌</button>
      </div>
    `;
  });
}

// AGREGAR
function agregarCD() {
  const nombre = document.getElementById("nombre").value;
  const artista = document.getElementById("artista").value;
  const precio = document.getElementById("precio").value;

  if (!nombre || !artista || !precio) {
    alert("Completa todos los campos");
    return;
  }

  cds.push({ nombre, artista, precio });
  guardarEnStorage();
  mostrarCDs();

  document.getElementById("nombre").value = "";
  document.getElementById("artista").value = "";
  document.getElementById("precio").value = "";
}

// ELIMINAR
function eliminarCD(index) {
  if (confirm("¿Seguro que quieres eliminar este CD?")) {
    cds.splice(index, 1);
    guardarEnStorage();
    mostrarCDs();
  }
}

// EDITAR
function editarCD(index) {
  const cd = cds[index];

  document.getElementById("nombre").value = cd.nombre;
  document.getElementById("artista").value = cd.artista;
  document.getElementById("precio").value = cd.precio;

  cds.splice(index, 1);
  guardarEnStorage();
  mostrarCDs();
}

// BUSCAR
tabla.innerHTML += `
  <div class="card">
    <img src="${cd.imagen}" class="img-cd">
    <h3>${cd.nombre}</h3>
    <p>${cd.artista}</p>
    <p>$${cd.precio}</p>

    <button onclick="agregarAlCarrito(${index})">🛒</button>
    <button onclick="editarCD(${index})">✏️</button>
    <button onclick="eliminarCD(${index})">❌</button>
  </div>
`;
  

// FILTROS
tabla.innerHTML += `
  <div class="card">
    <img src="${cd.imagen}" class="img-cd">
    <h3>${cd.nombre}</h3>
    <p>${cd.artista}</p>
    <p>$${cd.precio}</p>

    <button onclick="agregarAlCarrito(${index})">🛒</button>
    <button onclick="editarCD(${index})">✏️</button>
    <button onclick="eliminarCD(${index})">❌</button>
  </div>
`;

// CARRITO
function agregarAlCarrito(index) {
  carrito.push(cds[index]);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carritoLista");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((cd, index) => {
    total += Number(cd.precio);

    lista.innerHTML += `
      <li>
        ${cd.nombre} - $${cd.precio}
        <button onclick="eliminarDelCarrito(${index})">❌</button>
      </li>
    `;
  });

  totalSpan.textContent = total;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

// COMPRAR
function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío 🛒");
    return;
  }

  let total = 0;
  carrito.forEach(cd => total += Number(cd.precio));

  alert("Compra realizada con éxito 🎉\nTotal pagado: $" + total);

  carrito = [];
  mostrarCarrito();
}

// CARGAR CDs
function cargarEjemplos() {
  cds = [
  { nombre: "Wonderwall", artista: "Oasis", precio: 15, imagen: "img/wonderwall.jpeg" },
  { nombre: "Losing My Religion", artista: "R.E.M.", precio: 14, imagen: "img/losing.jpeg" },
  { nombre: "I Want It That Way", artista: "Backstreet Boys", precio: 13, imagen: "img/backstreet.jpeg" },
  { nombre: "Shape of You", artista: "Ed Sheeran", precio: 18, imagen: "img/shape.jpeg" },
  { nombre: "Uptown Funk", artista: "Bruno Mars", precio: 17, imagen: "img/uptown.jpeg" },

  { nombre: "Oye Mi Amor", artista: "Maná", precio: 12, imagen: "img/mana.jpeg" },
  { nombre: "Matador", artista: "Los Fabulosos Cadillacs", precio: 13, imagen: "img/matador.jpeg" },
  { nombre: "Persiana Americana", artista: "Soda Stereo", precio: 14, imagen: "img/soda.jpeg" },
  { nombre: "Hawái", artista: "Maluma", precio: 16, imagen: "img/hawai.jpeg" },
  { nombre: "Bichota", artista: "Karol G", precio: 17, imagen: "img/bichota.jpeg" },

  { nombre: "Zombie", artista: "The Cranberries", precio: 14, imagen: "img/zombie.jpeg" },
  { nombre: "Blue (Da Ba Dee)", artista: "Eiffel 65", precio: 13, imagen: "img/blue.jpeg" },
  { nombre: "Levitating", artista: "Dua Lipa", precio: 18, imagen: "img/levitating.jpeg" },
  { nombre: "Alors on danse", artista: "Stromae", precio: 16, imagen: "img/stromae.jpeg" },
  { nombre: "Take On Me", artista: "a-ha", precio: 15, imagen: "img/takeonme.jpeg" }
];


  guardarEnStorage();
  mostrarCDs();
}