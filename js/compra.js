const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.querySelector('#carrito1');
const procesarCompraBtn = document.getElementById('procesar-compra');

cargarEventos();


function cargarEventos() {

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


    compra.calcularTotal();

    

    procesarCompraBtn.addEventListener('click', procesarPedido);
}

function procesarPedido(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        alert("Carrito vacio");
        window.location = "DiadelaMadre.html";
    }
    else if (cliente.value === '' || correo.value === '') {
        alert("Todos los campos son requeridos")
    }
    else {
         const cargando = document.querySelector('#cargando');
         cargando.style.display = 'block';

         const enviando = document.createElement('img');
         enviando.src = '../img/pago/mail.gif';
         enviando.style.display = 'block';
         enviando.width = '150';

         setTimeout(() => {
            cargando.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviando);
            setTimeout(() => {
                enviando.remove();
                compra.vaciarLocalStorage();
                window.location = "index.html";
            }, 2000);
         }, 3000);
    }
}
