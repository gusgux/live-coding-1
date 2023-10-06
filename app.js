/* Escribe una función que reciba 2 parámetros
- Parámetro 1 - Un string
- Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
- `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
- `bigWords('bocina', myArray);`
- Output - `['insecto', 'bootcamp', 'escritorio']`
 */

const btn = document.querySelector("#btn");
const listWord = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

function bigWords(word, list) {
    const newList = list.filter(item => {
        console.log(`word ${word}, item : ${item} `);
        return word.length < item.length;
    })
    return newList

}




/* 2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior. */


function imprimirLista(strings) {
    const listElement = document.querySelector("#lista");
    strings.forEach(function (string) {
        const li = document.createElement('li');
        li.textContent = string;
        listElement.appendChild(li);
    });
}

// Ejemplo de uso
console.log(btn);
btn.addEventListener("click", evet => {
    const palabra = document.querySelector("#palabras").value;
    const newList = bigWords(palabra, listWord);
    imprimirLista(newList);
})

