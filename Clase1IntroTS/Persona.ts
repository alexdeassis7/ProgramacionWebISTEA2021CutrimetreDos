export class Persona {
    //atributo de la clase 
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(nombre: string, apellido: string, edad: number, kilometros: number) {
        this.kilometros = kilometros;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    caminar(): string {
        console.log("soy " + this.nombre + " y camino " + this.kilometros + " km por mes");
        return "hola";
    }
}
