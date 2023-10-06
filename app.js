/* Escribe una función que reciba 2 parámetros
- Parámetro 1 - Un string
- Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
- `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
- `bigWords('bocina', myArray);`
- Output - `['insecto', 'bootcamp', 'escritorio']`
 */

const btn = document.querySelector("#btn"); //obtenemos el boton para despues darle un evento click y ejecutar el comando
const listWord = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


//funcion que devuelve las palabas con mayor longitud que las de entrada
function bigWords(word, list) {
    //se usa el metodo filter para generar una nueva cadena   sin las palabras con menor longitud
    const newList = list.filter(item => {
        console.log(`word ${word}, item : ${item} `);
        return word.length < item.length;
    })
    return newList

}




/* 2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior. */


function imprimirLista(strings) {
    const listElement = document.querySelector("#lista");//obtenemos el elemento para agregar los li
    //iteramos el array de palabras y creamos el elemento li por cada una de ellas agregandole el texto y agregandolo al elemento ul 
    strings.forEach(function (string) {
        const li = document.createElement('li');
        li.textContent = string;
        listElement.appendChild(li);
    });
}

//usamos el elemento boton para que escuche un evento click  y agregemos el contenido en el html por medio del dom
btn.addEventListener("click", evet => {
    //obtenemos el valor de input para usar en la funcion big
    const palabra = document.querySelector("#palabras").value;
    const newList = bigWords(palabra, listWord);//obtenemos la nuevas palabras ya filtradas
    imprimirLista(newList);// agregamos las palabras al html por medio del dom
})

