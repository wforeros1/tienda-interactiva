function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML =
    `
        <div>
            <h1>lista de productos</h1> 
            <h2> producto B </h2>
            <input type="number" name="nombre1" id="input1">
            <button onclick="agregarCarrito()" type="button" class="btn btn-danger">Añadir</button>
        </div>
    `
}

function agregarCarrito(){
    var nombre = document.getElementsByName("nombre1")
    var valor = document.getElementById("input1").value;
    var carrito  = document.getElementById("carrito");
    carrito = carrito.innerHTML=`<h1>nombre: ${nombre} cantidad: ${valor}</h1>`;

}