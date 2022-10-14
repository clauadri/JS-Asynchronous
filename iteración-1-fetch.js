// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.

// fetch("https://api.agify.io?name=michael")
//   .then((names) => names.json())// el nombre de names en esta linea da giau lel nombre que le pongass
//   .then((names) => console.log(names));

//   1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
//   fetch() para hacer una consulta a la api cuando se haga click en el botón,
//   pasando como parametro de la api, el valor del input.

// const baseUrl = "https://api.nationalize.io";
// const button$$ = document.querySelector('button')// seleciono el boton
// button$$.addEventListener('click', buscar);// añado un evento que coja la funcion buscar
// const input$$ = document.querySelector('input')// seleciono el input para meterlo en el fetch porque sino me dara que input no esta defnido y .value es loque escribo
// function buscar(){
//     fetch("https://api.nationalize.io/?name=" + input$$.value)// tiene que ir el valor del input osea lo qu busque para que me devuelta sus datos
//     .then((nombre) => nombre.json())
//     .then((nombre) => console.log(nombre));
// }

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

// function crearElement(nombre){
//     const div$$ = document.createElement('div');

//     for (const country of nombre.country) {

//         div$$.textContent += ['El nombre ' + input$$.value + ' tiene un ' + country.probability + ' porciento de ser de ' + country.country_id + ' '];

//         document.body.appendChild(div$$);
//     }

// }

// const baseUrl = "https://api.nationalize.io";
// const button$$ = document.querySelector('button')// seleciono el boton
// button$$.addEventListener('click', buscar);// añado un evento que coja la funcion buscar
// const input$$ = document.querySelector('input')// seleciono el input para meterlo en el fetch porque sino me dara que input no esta defnido y .value es loque escribo
// function buscar(){
//     fetch("https://api.nationalize.io/?name=" + input$$.value)// tiene que ir el valor del input osea lo qu busque para que me devuelta sus datos
//     .then((nombre) => nombre.json())
//     .then((nombre) => crearElement(nombre));

// }

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.
function crearElement(nombre) {
  const div$$ = document.createElement("div");

  for (const country of nombre.country) {
    div$$.textContent += [
      "El nombre " +
        input$$.value +
        " tiene un " +
        country.probability +
        " porciento de ser de " +
        country.country_id +
        " ",
    ];
    const button1$$ = document.createElement("button"); //añado boton cada vez que se cree el texto
    button1$$.textContent = "X"; 
    button1$$.addEventListener("click", borrarDiv(div$$)); // funcion borrar divque esta definida abajo
    div$$.appendChild(button1$$);
    document.body.appendChild(div$$);
  }
}

const baseUrl = "https://api.nationalize.io";
const button$$ = document.querySelector("button"); // seleciono el boton
button$$.addEventListener("click", buscar); // añado un evento que coja la funcion buscar
const input$$ = document.querySelector("input"); // seleciono el input para meterlo en el fetch porque sino me dara que input no esta defnido y .value es loque escribo
function buscar() {
  fetch("https://api.nationalize.io/?name=" + input$$.value) // tiene que ir el valor del input osea lo qu busque para que me devuelta sus datos
    .then((nombre) => nombre.json())
    .then((nombre) => crearElement(nombre));
}

function borrarDiv(text) {
    return function () {
        text.remove();
    }
}
