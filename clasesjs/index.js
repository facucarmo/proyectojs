
let nombre = prompt ("Ingrese su nombre").toLowerCase() ;   

    switch (nombre) {
        case "juan": 
        alert ("Bienvenido Juan");
        break;
        
        case "marta": 
        alert ("Bienvenido Marta");
        break; 

        case "pedro": 
        alert ("Bienvenido Pedro");
        break;

        default: 
        alert ("Bienvenido desconocido");
    }

let opcion = prompt ("Quiere comprar o alquilar?"). toLowerCase ();

    if (opcion == "alquilar") {
        let alquiler = prompt ("Que producto desea alquilar?")
        alert ("Usted desea alquilar " + alquiler)
    }
    else (opcion == "comprar");{
        let comprar = prompt ("Que producto desea comprar?")
        alert ("Usted desea comprar " + comprar)
    }
       

    
    

