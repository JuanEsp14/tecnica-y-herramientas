class Viaje{
    constructor(origen, destino, fechaHora, costo, conductor){
        this.origen = origen;
        this.destino = destino;
        this.fechaHora = fechaHora;
        this.costo = costo;
        this.pasajeros = [];
        this.conductor = conductor;
        this.finalizado = false;
    }

    registrarPasajero(pasajero){
        if(!this.finalizado && pasajero.creditos >= this.costo && this.conductor.auto.getCapacidad() > this.pasajeros.length){
            console.log("Se subio al viaje "+pasajero.nombre);
            this.pasajeros.push(pasajero);
        }else{
            console.log("No tiene créditos");
        }        
    }

    cobrarViaje(){
        this.pasajeros.forEach(p => {
            p.descontarCreditos(this.costo);
        });
        this.finalizado = true;
    }
}

class Vehiculo{
    constructor(capacidad, nombre){
        this.capacidad = capacidad;
        this.nombre = nombre;
    }

    getCapacidad(){
        return this.capacidad;
    }
}

class Usuario{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.creditos = 0;
        this.auto = null;
    }

    vincularVehiculo(auto){
        this.auto = auto;
    }

    crearViaje(origen, destino, fechaHora, costo){
        if(this.auto){
            console.log("Viaje creado");
            return new Viaje(origen, destino, fechaHora, costo, this);
        }
        console.log("No tiene auto registrado");
    }

    descontarCreditos(costo){
        console.log("Se descontarán "+ costo + " créditos");
        this.creditos -= costo;
    }

    cargarCreditos(creditos){
        this.creditos += creditos;
    }
}

let usuario1 = new Usuario("Pedro", "Galvez", 37111111);
let usuario2 = new Usuario("Enrique", "Balbuena", 37222222);
let usuario3 = new Usuario("Marcelo", "Avit", 37333333);
let usuario4 = new Usuario("Claudio", "Gonzalez", 37444444);

let fordKa = new Vehiculo(4, "Ford Ka");

usuario1.vincularVehiculo(fordKa);
usuario2.cargarCreditos(25);
usuario3.cargarCreditos(10);
usuario4.cargarCreditos(20);

let viaje = usuario1.crearViaje("Buenos Aires", "La Plata", new Date(), 15);

viaje.registrarPasajero(usuario2);
viaje.registrarPasajero(usuario3);
viaje.registrarPasajero(usuario4);

console.log("<--------- VIAJANDO ---------->");

viaje.cobrarViaje();

console.log("<--------- VIAJE FINALIZADO ---------->");