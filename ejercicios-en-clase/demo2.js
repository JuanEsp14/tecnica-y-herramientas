class Vehiculo{
    constructor(capacidad, nombre, propietario){
        debugger;
        this.capacidad = capacidad;
        this.nombre = nombre;
        this.propietario = propietario;
    }

    getCapacidad(){
        return this.capacidad;
    }
}

let fordKa = new Vehiculo(4, "Ford Ka", "Juan");
console.log(fordKa.getCapacidad());

