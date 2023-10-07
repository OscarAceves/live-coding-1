// Escribe tu código aquí.

let parametro1 = "string";
let parametroArray= ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


function comparador (palabra, arreglo){
    let nuevoArray = [];
    for(i=0; i<=5; i++){
        if(palabra.length < arreglo[i].length){
            nuevoArray.push(parametroArray[i]);
        }
    }
    return nuevoArray;
}
console.log(comparador(parametro1, parametroArray));

let nuevoArray = comparador(parametro1, parametroArray);

let lista = document.createElement('ul');

function imprimirArray(arreglo) {
    for (i = 0; i < arreglo.length; i++) {
        let palabra = arreglo[i];
        let nuevaPalabra = document.createElement('li');
        nuevaPalabra.innerHTML = palabra;
        lista.appendChild(nuevaPalabra);
    }
}

imprimirArray(nuevoArray);
document.body.appendChild(lista);


// function imprimirArray (arreglo){
//     for(i=0;i>=arreglo.length; i++){
//         let palabra = arreglo[i];
//         let nuevaPalabra = document.createElement('div')  
//         nuevaPalabra.innerHTML = `<li><p> ${palabra} </p></li>`;
//         // lista.innerHTML = `<li><p> ${palabra} </p></li>`;
//         console.log(palabra);
//     }
// }

// imprimirArray(nuevoArray);