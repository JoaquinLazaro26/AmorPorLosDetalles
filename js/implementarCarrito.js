const carro = new Carrito();
const carrito = document.getElementById('carrito');
const listaProductos = document.getElementById('productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const ProcesarPedidoBtn = document.querySelector('#procesar-compra');

cargarEventos();

function cargarEventos(){
  if (listaProductos) listaProductos.addEventListener('click' , (e)=>{carro.comprarProducto(e)});  
  if (carrito) carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
  if (vaciarCarritoBtn) vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
  document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
  if (ProcesarPedidoBtn) ProcesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}