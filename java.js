var productos = [
    { id:1, nombre: "Shampoo", categoria: "2", precio: 20000 },       
    { id:2, nombre: "Acondicionador", categoria: "2", precio: 22000 },
    { id:3, nombre: "Serum Facial", categoria: "3", precio: 26000 },   
    { id:4, nombre: "Crema Hidratante", categoria: "3", precio: 30000 },
    { id:5, nombre: "Scrunchie", categoria: "4", precio: 2000 },      
    { id:6, nombre: "Brochas", categoria: "4", precio: 50000 },
    { id:7, nombre: "Labial Rojo", categoria: "5",precio: 10000 },    
    { id:8, nombre: "Base de Maquillaje", categoria: "5", precio: 30000 },
    
]

var carrito = []

function init(){
    filtrarCategoria()
}



function filtrarCategoria(){
    let opcion = document.getElementById("opcion").value
    
    
    let productosFiltrados = []

    switch (opcion){
        case "1":
            productosFiltrados = productos
            break
        case "2":
            productosFiltrados = productos.filter(p => p.categoria== 2)
            break
        case "3":
            productosFiltrados = productos.filter(p => p.categoria== 3)
            break
        case "4":
            productosFiltrados = productos.filter(p => p.categoria== 4)
            break
        case "5":
            productosFiltrados = productos.filter(p => p.categoria== 5)
            break
        default:
            productosFiltrados = [];
            break;
    }
    
    mostrarProductos(productosFiltrados)
}

function mostrarProductos(listaProductos){
    let contenedor = document.getElementById("card1")
    contenedor.innerHTML =""

    listaProductos.forEach(producto => {
        contenedor.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.precio.toLocaleString()}</p>
                    <button onclick="agregarCarrito(${producto.id})" type="button" class="btn btn-danger boton">Añadir</button>
                </div>
            </div>
        </div>
        `
    })
}
