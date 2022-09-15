const carrito=[];
if(localStorage.getItem('carrito')){
    carrito=JSON.parse(localStorage.getItem('carrito'));
}

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
      localStorage.removeItem("carrito",JSON.stringify(carrito));
    };