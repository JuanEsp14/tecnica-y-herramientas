class Vehiculo{
    constructor(capacidad, nombre, propietario){
        this.capacidad = capacidad;
        this.nombre = nombre;
        this.propietario = propietario;
    }

    getCapacidad(){
        return this.capacidad;
    }

    getPropietario(){
        return this.propietario;
    }
}

class Usuario{
    constructor(nombre){
        this.creditos = 1000;
        this.nombre = nombre;
    }

    sumarCreditos(cantidad){
        this.creditos = this.creditos + cantidad;
    }

    descontarCreditos(cantidad){
        this.creditos = this.creditos - cantidad;
    }
}

class Viaje{
    constructor(costo, vehiculo, origen, destino){
        this.costo = costo;
        this.vehiculo = vehiculo;
        this.origen = origen;
        this.destino = destino;
        this.pasajeros = [];
        this.finalizado = false;
    }

    hayLugar(){
        return this.vehiculo.getCapacidad() > this.pasajeros.length;
    }

    agregarPasajero(pasajero){
        if (this.hayLugar() & !this.finalizado){
            this.pasajeros.push(pasajero);
            return true;
        }
        return false;
    }

    calcularCosto(){
        return this.costo / (this.pasajeros.length + 1);
    }
    
    conductor(){
        return this.vehiculo.getPropietario();
    }

    finalizarViaje(){
        if (!this.finalizado){
            let costo = this.calcularCosto();
            this.pasajeros.forEach(pasajero => pasajero.descontarCreditos(costo));
            this.conductor().descontarCreditos(costo);
            this.finalizado = true;
        }
    }
}

let juan = new Usuario("Juan");
let pedro = new Usuario("Pedro");
let fordKa = new Vehiculo(4, "Ford Ka", juan);
debugger;
let viajeLPBuenosAires = new Viaje(350, fordKa, "La Plata", "Buenos Aires");
viajeLPBuenosAires.agregarPasajero(pedro);
viajeLPBuenosAires.finalizarViaje();
viajeLPBuenosAires.finalizarViaje();

