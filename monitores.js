let lista=document.getElementById('miLista');

// Muestro productos en la página

renderProductos();

function renderProductos(){
    obtenerJsonLocal();
}

function obtenerJsonLocal(){
    const URLJSON='productos.json'
    fetch(URLJSON)
        .then(resp=>resp.json())
        .then(data=>{
            const productos=data.productos.filter((producto)=>producto.categoria.includes('Monitores'))
            for(const producto of productos){
                lista.innerHTML+=`<li class='bg-dark col-sm-4 list-group-item'>
                <img src=${producto.img} style="width: 200px;" alt=''>
                <h3 class='text-center text-white'>${producto.titulo}</h3>
                <p><strong>Precio:$ ${producto.precio}</strong></p>
                <button id='btn${producto.id}' class='btn btn-primary'>Comprar</button>
                </li>`
        };
            productos.forEach(producto=>{
                document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
                    agregarAlCarrito(producto)
                });
            });
        });
};