let nombre = prompt("Bienvenido a nuestra pagina WEB! Aca podras comprar la casa de juguete ideal para tu niño/a. ¿Cual es su nombre?"); 
alert("Un gusto " + nombre + "! gracias por confiar en nosotros, a continuacion te preguntaremos la edad del niño.");
alert("¡Atencion, la ventas de las casas de juguetes estan disponibles para menores de maximo hasta 12 años de edad");

 let edad = prompt("Ingrese la edad del niño:");

 while(edad > 12){
    alert("Ups! ocurrio un problema... su hijo ya supera el limite de edad propuesto para comprar los juguetes.");
    edad = prompt("Ingrese la edad del niño:");
  }

  alert("¿Que tamaño de casa estas interesado comprar? te dejo los precios para que pienses y observes! "); 
  alert("Para ver mas informacion de las casas u otras, coloca `Casa grande`, `Casa mediana`, `Casa pequeña` `Pack juguetes`")

const productos = [
  { id: 1, nombrejuguete: "Casa grande", precio: 7500 },
  { id: 2, nombrejuguete: "Casa mediana", precio: 4500 },
  { id: 3, nombrejuguete: "Casa pequeña", precio: 2000 },
  { id: 4, nombrejuguete: "Pack juguetes", precio: 500 },
];

let continuar = true;

while (continuar) {
  let nombrejuguete = prompt("Ingrese el nombre de la casa o juguete a consultar");
  let producto;

  for (const item of productos) {
    if (item.nombrejuguete === nombrejuguete) {
    producto = item;
    }
  }

  if (producto) {
    let mensaje = `
    ID: ${producto.id}
   Nombre: ${producto.nombrejuguete}
    $${producto.precio}
    `;

    alert(mensaje);
  } else {
    alert("La casa o juguete no se ha encontrado en la lista");
  }

  productos.sort((a, b) => b.precio - a.precio);

alert("A continuación, te mostramos las casas u otros productos ordenados por precio de mayor a menor:");
for (const producto of productos) {
  alert(`
    ID: ${producto.id}
    Nombre: ${producto.nombrejuguete}
    Precio: $${producto.precio}
  `);
}

productos.sort((a, b) => a.precio - b.precio);

alert("A continuación, te mostramos las casas u otros productos por precio de menor a mayor:");
for (const producto of productos) {
  alert(`
    ID: ${producto.id}
    Nombre: ${producto.nombrejuguete}
    Precio: $${producto.precio}
  `);
}

  let respuesta1 = prompt("¿Desea consultar otra casa u objeto? (si/no)");
  if (respuesta1.toLowerCase() !== "si") {
    continuar = false;
  }
}

function juguete(selector) {
    switch (selector) {
        case "1":
            return { nombre: "Casa Grande", precio: 7500 };
        case "2":
            return { nombre: "Casa Mediana", precio: 4500 };
        case "3":
            return { nombre: "Casa Pequeña", precio: 2000 };
        case "4":
            return { nombre: "Pack de Juguetes", precio: 500 };
        default:
            return;
    }
}

function obtenerDatosComprador() {
    let nombre = prompt("Ingrese su nombre:");
    let direccion = prompt("Ingrese su dirección:");
    let telefono = prompt("Ingrese su número de teléfono:");

    return {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono
    };
}

let seguirComprando = true;
let totalGasto = 0;
let compras = [];

while (seguirComprando) {
    alert("¿Qué tal? ¡Ya estamos por finalizar tu compra! Selecciona el que más te interesó para tu niño/a.");
    let selector = prompt("Si estás interesado en elegir la casa más grande, coloca '1'. Si, en cambio, estás interesado en la casa mediana, coloca '2'. Si te interesa algo más pequeño, coloca '3'. Por último, si deseas comprar el pack de juguetes, coloca '4'.");

    let producto = juguete(selector);
    if (producto !== null) {
        alert(`Usted escogió ${producto.nombre} por $${producto.precio} para su niño/a. ¡Gracias por su compra!`);
        totalGasto += producto.precio;
        compras.push(producto);

        let respuesta = prompt("¿Desea comprar otro juguete? (si/no)");
        if (respuesta.toLowerCase() !== "si") {
            seguirComprando = false;
        }
    } else {
        alert("Juguete no encontrado");
    }
}

if (compras.length > 0) {
    let datosComprador = obtenerDatosComprador();

    alert("Resumen de su compra:");
    for (let compra of compras) {
        alert(`Producto: ${compra.nombre} - Precio: $${compra.precio}`);
    }

    alert(`Total gastado: $${totalGasto}`);
    alert(`Datos del comprador:\nNombre: ${datosComprador.nombre}\nDirección: ${datosComprador.direccion}\nTeléfono: ${datosComprador.telefono}`);
} else {
    alert("No se realizaron compras.");
}
