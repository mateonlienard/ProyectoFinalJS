let carrito={};
if(localStorage.getItem('carrito')){
    carrito=JSON.parse(localStorage.getItem('carrito'));
}

let lista=document.getElementById('miLista');

// Muestro productos en la página

renderProductos();

function renderProductos(){
    obtenerJsonLocal();
}

// Array de productos con fetch

function obtenerJsonLocal(){
    const URLJSON='productos.json'
    fetch(URLJSON)
        .then(resp=>resp.json())
        .then(data=>{
            const productos=data.productos
            for(const producto of productos){
                    lista.innerHTML+=`<li class='bg-dark col-sm-4 list-group-item'>
                    <img src=${producto.img} style="width: 200px;" alt=''>
                    <h3 class='text-center text-white'>${producto.titulo}</h3>
                    <p><strong>Precio:$ ${producto.precio}</strong></p>
                    <button id='btn${producto.id}' class='btn btn-primary'>Comprar</button>
                    </li>`
                ;
            };
            productos.forEach(producto=>{
                document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
                    agregarAlCarrito(producto)
                });
            });
        });
};

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