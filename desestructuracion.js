
const ikaro = {
    nombre: 'Juan',
    apellidos: 'camilo',
    poder: 'Volar',
    getNombre () { 
        return `${this.nombre} ${this.apellidos} ${this.poder}`
    }

}

//const nombre = ikaro.nombre;
//const apellidos = ikaro.apellidos;
//const poder = ikaro.poder;

const {nombre, apellidos, poder} = ikaro;

console.log(nombre, apellidos, poder);

function imprimirHeroe({nombre , apellidos, poder, edad = 0}){
    nombre = 'Juan Camilo';
    console.log(nombre, apellidos, poder, edad);
}

//imprimeHeroe (ikaro);

const heroes = ['Ikaro', 'Superman', 'Batman']

//const h1 = heroes [0];
//const h2 = heroes[1];
//const h3 = heroes[2];

//console.log(h1, h2, h3);

const [ , , h3] = heroes;

console.log( h3 );