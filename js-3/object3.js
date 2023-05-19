let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
})

receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
})

console.log(receta.ingredientes[0].nombre);

function sumaDeIngredientes(){
    let sumaTotalDeIngredientes = 0;
    for (i = 0; i < receta.ingredientes.length; i ++){
        cantidadDeIngrediente = receta.ingredientes[i].cantidad;
        sumaTotalDeIngredientes = sumaTotalDeIngredientes + cantidadDeIngrediente;
    }
    return sumaTotalDeIngredientes
}

console.log(sumaDeIngredientes());