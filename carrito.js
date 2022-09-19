const carrito=[];
if(localStorage.getItem('carrito')){
    class Producto {
        constructor(prod) {
            this.id=prod.id
            this.titulo=prod.titulo;
            this.precio=parseFloat(prod.precio);
        }};   
    const carritoJSON=JSON.parse(localStorage.getItem('carrito'));
    const carroJSON=[];
    for (const prod of carritoJSON)
    carroJSON.push(new Producto(prod));
    for (const Producto of carroJSON) {
        document.getElementById('tablabody').innerHTML+=`
        <tr>
                <td>${Producto.id}</td>
                <td>${Producto.titulo}</td>
                <td>${Producto.precio}</td>
        </tr>
    `;}}

// Sumando productos al carro

function agregarAlCarrito(producto){
    carrito.push(producto);
    Swal.fire(
        'Producto: '+producto.titulo,
        'Agregado al carrito',
        'success'
    );
    document.getElementById('tablabody').innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

// Boton finalizar

let finalizar=document.getElementById('finalizar');
finalizar.onclick=()=>{
    checkOut = carrito.reduce ((ac,el) => ac + el,0);
    Swal.fire({
        title: 'Pedido confirmado!',
        text: 'Estamos preparando todo para el envio',
        imageAlt: 'ok',
      });
      document.getElementById('tablabody').remove();
      localStorage.removeItem("carrito",JSON.stringify(carrito));
    };