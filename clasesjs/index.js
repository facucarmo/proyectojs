let nombre = prompt ("Ingrese su nombre aqui!").toLowerCase();

    if (nombre != "") {
        alert ("Bienvenido " + nombre);
    }

alert ("Que producto desea comprar?")

let productos = parseInt (prompt("1-.Anillos: $250, 2-.Aros: $500, 3-.Collares: $350 4-.Pulseras: $200 5-.ToteBags: $750"))
let anillos = 250;
let aros = 500;
let collares = 350;
let pulseras = 200;
let totebags = 750;


switch (productos) {
    case 1:
    alert ("Usted sera redireccionado a la pagina de anillos")
    let unidadesAnillos = prompt ("Cuantos anillos desea comprar?")
    console.log(unidadesAnillos);
    if (unidadesAnillos > 0) {
        alert ("Usted compro " + unidadesAnillos + " unidades")
        alert ("El precio final es de $" + anillos * unidadesAnillos);
    }
    break;

    case 2:
    alert ("Usted sera redireccionado a la pagina de aros")
    let unidadesAros = prompt ("Cuantos aros desea comprar?")
    console.log(unidadesAros);
    if (unidadesAros > 0) {
        alert ("Usted compro " + unidadesAros + " unidades")
        alert ("El precio final es de $" + aros * unidadesAros);
    }
    break;

    case 3:
    alert ("Usted sera redireccionado a la pagina de collares")
    let unidadesCollares = prompt ("Cuantos collares desea comprar?")
    console.log(unidadesCollares);
    if (unidadesCollares > 0) {
        alert ("Usted compro " + unidadesCollares + " unidades")
        alert ("El precio final es de $" + collares * unidadesCollares);
    }
    break;

    case 4:
    alert ("Usted sera redireccionado a la pagina de pulseras")
    let unidadesPulseras = prompt ("Cuantas pulseras desea comprar?")
    console.log(unidadesPulseras);
    if (unidadesPulseras > 0) {
        alert ("Usted compro " + unidadesPulseras + " unidades")
        alert ("El precio final es de $" + pulseras * unidadesPulseras);
    }
    break;

    case 5:
    alert ("Usted sera redireccionado a la pagina de totebags")
    let unidadesTotebags = prompt ("Cuantas totebags desea comprar?")
    console.log(unidadesTotebags);
    if (unidadesTotebags > 0) {
        alert ("Usted compro " + unidadesTotebags + " unidades")
        alert ("El precio final es de $" + totebags * unidadesTotebags);
    }
    break;

    default:
    alert ("Lo sentimos aun no contamos con ese producto")
}

alert("Elija su medio de pago")
let pagos = parseInt(prompt("1-Efectivo, 2-Transferencia/Deposito, 3-Tarjeta de Credito/Debito, 4-MercadoPago" ));

switch (pagos) {
    case 1: 
    alert ("Gracias por su compra lo esperamos en el local para realizar el pago en efectivo")
    break;

    case 2:
    alert ("Gracias por su compra adjuntamos CBU para que realice la transferencia/deposito, enviar comprobante por email")
    alert ("CBU= 000000000000")
    break;

    case 3:
    alert ("Gracias por su compra sera redireccionado para completar los datos de su tarjeta y realizar el pago")
    break;

    case 4: 
    alert ("Gracias por su compra sera redireccionado al sitio de MercadoPago para realizar el pago")
    break;
}

