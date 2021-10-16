console.log(`okgracia`);
// let cantGato = 4;
// const gato1 = 'misuMadre';
// const gato2 = 'negritaLoca';
// const gato3 = 'blandoTranquilo';
// const gato4 = 'flonflonAmarillo';

// let gatoRobaCarne = 'gato6';

// if (gatoRobaCarne ===  gato1 || gatoRobaCarne === gato3 ){
//     console.log("dale su pecosa")

// }
// else{
//     console.log('seran los ratones')
// }

// let gatos = ['misuMadre','negrita','gatoTiguere','amarillo'];

// gatos.push('el negro padre de la negrita')
// console.log(gatos)
// gatos.pop()
// console.log(gatos)
// gatos.unshift('gato de la vecina')
// console.log(gatos)
// gatos.shift()
// console.log(gatos);

// let dishesToDo = []
// dishesToDo.unshift('holla');
// dishesToDo.unshift('bowul');
// console.log(dishesToDo)
// dishesToDo.unshift('plato hondo')
// console.log(dishesToDo);
// dishesToDo.shift();
// console.log(dishesToDo)

// console.log(gatos.concat(dishesToDo))

// let gatos =['mamaGato','gatoBlanco','gataNegrita','gatoAmarillo'];
// consol
// gatos.forEach(gatos) (
//     console.log(`mis gatos son :${gatos}`)

// )
// gatos.forEach( animal => (  {console.log('misgatos son')}

//     // console.log(animal)

// )

// const loto = {
//     lunes: [344, 3434,23434, 3434],
//     martes: [ 45,23,56,43],
//     miercoles: [ 12,34,54,90],
//     bancas: ['los mina', 'la villa','la loteria']
// }

// for (let i = 0; i < loto.bancas.length; i++) {
//     // const element = array[i];
//     console.log(i)

// }

// for (let tabla = 1; tabla <= 12; tabla++){
//     // const element = array[tabla];
//     let numero=6;
//     console.log(`${numero} X ${tabla} = ${numero*tabla} `)
// }

// function checkPassword(username, password) {
//     if(password.length > 8 && password.indexOf(' ') == -1 )
//     {
//        if( (!password.includes(username)) ) {

//            return true

//        }
//        else {
//            console.log('contiene el nombre de usuario')
//        }

//     }
//    return false

// }

// function avg(numeros){
//     let average = 0;
//     for (const num of numeros) {

//         average += num;
//     }
//     numeros.forEach(num => {
//         average += num;
//     });
//     return average/numeros.length;
// }
// const texto = 'the five boxing wizards jump quickly';
// function isPamgram(text) {
//     const alfa =['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
//     const alfa2 = ['qwertyuiopasdfghjklzxcvbnm ']
//     //itereacion 1
//     for (const letra of alfa) {
//         if(texto.indexOf(letra) == -1){
//             // console.log('no')
//             return false
//         }
//         // console.log('si')

//     }
//     return true

//     //iteracion2
//     // alfa.forEach(letra =>{
//     //     if(texto.indexOf(letra) == -1){
//     //         console.log('no contiene')
//     //     return false;

//     //     }
//     //     console.log('contieen')
//     //     return true;

//     // })
//     // console.log('contiene')

//     //iteracion3
// //     for (let i = 0; i < texto.length; i++) {
// //         if
// // console.log(texto[i])
// //     }
// }
// console.log(isPamgram(texto))

//--------funtion expressions

// function pik(){
//     const picks1 = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const  picks2 = ['clubs','spades','hearts','diamonds']

//     let ramdomNumer = Math.floor((Math.random()*picks1.length))
//     let ramdomNumer2 = Math.floor((Math.random()*picks2.length))
//     // let displayMesaje = `su  es  carta ${picks1[ramdomNumer]} de la clase ${picks2[ramdomNumer2]}`

//     return {value:picks1[ramdomNumer],suit: picks2[ramdomNumer2]};
// }

// function add(x,y) {
//     return x+y;
// }

// const rest = function (x,y){
//     return x-y;
// }

// function divede(x,y){
//     return x/y;
// }

// const multiplys =  function (x,y){
//     return x*y;
// }

// function dividendo (x){
//     return x % 2;
// }
// const operations = [add, rest, divede  , multiplys ]

// for(let op of operations){
//     let result = op(2,3);
//     console.log(`${op.name}  ${result}`)
// }

// const operaciones ={
//     suma: add,
//     resta: rest,
//     divicion: divede,
//     multipicacion: multiplys
// }

// const operando =  dividendo;

// higher order functions, funciones como argumentos
/**
 *
 * son funciones que aceptan otras funciones como argumentos. y hacen algo  o return otras funciones , se pueden usar como una 'fabrica de funciones'
 * sea que se pueden hacer funciones que hagan algo y se peudan usar por multiples funciones.
 */

//ejemplo 1 aceptar funciones como imput
// function callTwice(func){
//     func()
//     func()
// }
// function callThreeTimes(f){
//     f();
//     f();
//     f();
// }

// function risa(){
//     console.log('ajjajajaaj')
// }
// function hola(){
//     console.log('hola viejo')
// }

// function callNtimes(action,times){
//     for (let i = 0; i < times; i++) {
//         action()

//     }

// }

// function pickOne(f1,f2) {
//     let random = Math.random();
//     console.log(random)
//     if(random <= 0.5){
//         return f1()
//     }
//     return f2()

// }

//ejemplo 2 retornar funciones
/*en esta funcion se prefijan los valores min y max cuando se asigna la funcion a la variable inAgeRange, el valor a evaluar (val) es el valor que 
pasamos cuando ejecutamos inAgeRange */
// function makeBetweenFunc(min,max){
//     return function (val){
//         return val >= min && val <= max;
//     }
// }
// const inAgeRange = makeBetweenFunc(18,100);// aqui se pasan los valores fijos y cuando se llama la funcion se pasa el valor que  se va a evaluar o efectuar el calculo.

/*en el sigt usarmos una funcion que multiplica por el valor asignado (que pueden ser diferentes)*/
// function multiplyBy(num){
//     return function(x){
//         return x *num;
//     }
// }

// const tiple = multiplyBy(3);// aqui se pasan los valores fijos y cuando se llama la funcion se pasa el valor que  se va a evaluar o efectuar el calculo.
// const double = multiplyBy(2);
// const mitad = multiplyBy(0.5);

//Array callbacks methods

//Foreach

/*acepta un callback function, call the function one per element in the array */
//  const nums = [9,8,7,10,20,40]

//  nums.forEach(function(n){
//      console.log(n * 2 )
//  })
//  function printtriple(n){
//      console.log(n*3)
//     return n*3
//  }
//  nums.forEach(printtriple)

//MAP
/*create a new array with the results of colling a callback on every element un the array */
// const numbers = [20,21,22,23,24,25];
// const words = ['asap','byob','rsvp','diy'];

// const doubles = numbers.map(function(n){
//     return n * 2;
// });

// const numDetail = numbers.map(function(n){
//     return{
//         value: n,
//         isEven: n % 2 === 0

//     }
// })
// const abbrevs = words.map(function(word){
//     return word.toUpperCase().split('').join('.')
// })

//FIND
/*return the value of the first element in the array that satisfies the provided testing function, la validacion tiene que ser boolian */
// ejemplo 1
// let muvies = [
//     'The Fantastic Mr.Fox',
//     'Mr. and Mrs. Smith',
//     'Mrs. doubtfire',
//     'Mr. Deeds'
// ]
// const muvie = muvies.find(movie =>{
//     return movie.includes('Mrs');//validacion boolian
// })
// const movie2 = muvies.find(m => m.indexOf('Mrs') === 0)

//FILTER
/*CREATE a new array woth all elements that pass the test implemented by the provided function */
//ejemplo1
// const nums =[9,8,3,5,6,7,4]
// const odds = nums.filter(n =>{
//     return n % 2 === 1;// retorna true or false
//     // si retorna true, n es agregado a un nuevo array filtrado
// })
// const smallNums = nums.filter(n => n > 5)

//otros ejemplos

// const books = [
//     {
//         title: ' Lord of the flies',
//         authors: ['william Golding'],
//         rating: 3.67,
//         genres: ['fiction']
// },
// {
//     title: ' Los gatos me tiene jarto',
//     authors: ['jean Golding'],
//     rating: 4.65,
//     genres: ['fantasy']
// },
// {
//     title: 'que hay para comer',
//     authors: ['joshua nunez'],
//     rating: 2.65,
//     genres: ['reality']
// }
// ]

// const goodBooks = books.filter(book =>{
//    return book.rating > 2.5 & book.rating < 3.9
// })

// EVERY
/*test whether all elements in the  array pass the provided function. It returns a Boolean Value. todo lo que se evalua  tiene  que ser verdadero para que every return true de lo contrario return false */

//ejemplo 1
// const words = ['dog','dig','log','bag of cake','wag']

// const tresLetras = words.every(word =>{
//     return word.length >= 3
// })

// const terminaEnG = words.every(word =>{
//     return word.indexOf('g') === word.length -1
// })
// const otroTerminaG = words.every(word =>{
//     let ultimaLetra = word[word.length -1];
//     return ultimaLetra === 'g'
// })

// const primeraLetraD = words.every(word =>{
//     return word[0] === 'd'
// })

//SOME
/*similar to every, but returns true if ANY of the array elements pass the test function  */
//ejemplo
// const masTressL = words.some(word =>{
//     return word.length > 3
// })

// const starZ = words.some(word =>{
//     let primera =  word.indexOf('z') === 0
//     return primera
// })
// const contiene = words.some(word =>{
//     return word.indexOf('cake') != -1;
// })
// const contien2 = words.some(word =>{
//     return word.includes('cake')
// })

//SORT
/*es una funcion de ordenamiento pero ordena de acuardo al valor unicode , se puede pasar una funcion para que ordene de una manera diferente(compareFunction)
compare.sort(a,b=>{
    if(a-b y devuelve un valor negativo ){
        a va antes que b
    }
    if(a-b y devuelve 0 ){
        no se cambian los valores
    }
    if (a-b debuelve positivo ){
        b va antes que a
    }
})
*/
//ejemplo 1
// const prices = [400.5,3000,99.99,35.99,12.00,9500];

// const normal = prices.slice().sort();

// const menorAmayor = prices.slice().sort((a,b)=>{
//     return a-b;
// })
// const mayorAmenor = prices.slice().sort((a,b)=>{
//     return b-a;
// })

//REDUCE
/*Executes a reducer function on each element of the array resulting in a single value  */
//la funcion necesita dos parametros, el primero es que inicio o acumulador y el 2do es el sumando
// tambien se le puede pasar un valor inicial despues de declarar la funcion y antes de salir {},aqui.
// ejempleo 1
const numero = [2, 3, 4, 5, 6, 7];
const numoeroSuma = numero.reduce((acumulator, current) => {
  return acumulator + current;
});

const grades = [60, 90, 70, 89, 55, 68, 79, 96, 9];
const maxgrade = grades.reduce((max, currnt) => {
  if (max < currnt) return currnt;
  return max;
});
const maxgrade2 = grades.reduce((max, current) => {
  return Math.max(max, current);
});
const mingrade = grades.reduce((min, current) => {
  return Math.min(min, current);
});
const mingrade2 = grades.reduce((min, currnt) => {
  if (min > currnt) return currnt;
  return min;
});
//ejemplo 2 con valor inicial y creando un array o object
const tally = ["y", "n", "y", "n", "y", "n", "n", "n", "y", "y", "n"];
/*en este ejemplo se verifica si hay algun identificador si lo hay se le agrega 1 pero si no se crea y se devulve tall creando o sumando al objeto inicial */
const result = tally.reduce((tall, currentVote) => {
  if (tall[currentVote]) {
    tall[currentVote]++;
  } else {
    tall[currentVote] = 1;
  }
  return tall;
}, {});

const result2 = tally.reduce((tall, currentVote) => {
  tall[currentVote] = (tall[currentVote] || 0) + 1;
  return tall;
}, {});

// Default Parameters
/*son parametros que podemos definir en las funciones por si no entra el valor necesario entonces utilizamos el valor defaul */
//ejemplo1
//  const multipicacion = function (x=1,y=1) {//el valor 1 solo se utiliza si no llega un valor  asi no da error
//      return x*y;
//  }

//SPREAD
/*es una syntaxys  que permite que un elemento iterable sea EXTENDIDO cuando es llamado dentro de una funncion, otro elemento iterable o un objeto  que espere 0 o mas elementos */

//SPREAD FOR FUNCTIONS CALLS
//expand an iterable (array,string,etc.) into a list of arguments

const nums = [9, 0, 4, 3, 2];
const maxn = Math.max(...nums); //se extiende con (...)

//SPREAD IN ARRAY LITERALS
//Create a new array using an existing array. Spreads the elements from one array into a new array.
//tambien lo podmeos usar para hacer una copia, pero no copia nested array o objetos.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const union = [...nums1, ...nums2]; // une dos array en uno nuevo, el orden cuenta.

["a", "b", ...nums1]; // podemos agregar otros datos antes y despues
[...nums1, "a", "b", ...nums2]; //

//Spread in object litereals
//copies properties from one object into another object literal
//si los dos objeteos tienen la misma propiedad se sobreescribe porque el orden importa.
// no se puede usar spread de un objeto para spread in a array pero si de un array  a un objeto
//no => [...catdog] pero si {...nums} o [...nums, {...catdog}]

const feline = { legs: 4, family: "Felidae" };
const caniene = { family: "Caninae", furry: true };

const dog = { ...caniene, ispet: true };

const lion = { ...feline, geneus: "Panthera" };

const catDog = { ...feline, ...caniene };

//Rest and the argument object..
/*Rest hace lo contrario que spread osea que condensa varios parametros(...) en un solo array, se usa para aceptar una cantidad indefinida de argumentos o variables*/
/*the argument object(esta disponible en todos las funciones) es un array-like objet , tiene length pero no tiene los demas metodos como pop/push,
 contiene todos los argumentos pasados a la function y no esta disponible en las arraw functions */

//ejemplo arguments object
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
//debemos tener cuidado pork argument contiene todos los argumentos que se pasan aunque halla otros parametros o argumentos  definidos
function sumAl() {
  const argumenArray = [...arguments]; //como argument no es un array verdadero tenemos que convertirlo en uno antes de iterar.
  return argumenArray.reduce((total, current) => {
    return total + current;
  });
}
//ejemplo rest
// si hay otros parametros antes del rest , solo recoje los que no esten asignados (rest tiene que ir de ultimo si hay mas parametros)
function product(...nums) {
  // ponemos la sintaxis (...nums) para colectar todos los argumentos  y los convierte automaticamente a un array
  return nums.reduce((total, current) => {
    return total * current;
  });
}
// const fullName = function(first,last,...titles){
//   console.log(`First:${first}`)
//   console.log(`First:${last}`)
//   console.log(`First:${[...titles]}`)
// }

//// Destructuring  Array
/*A short, clean syntax to 'unpack':
*values forn arrays
*Properties from objects
Into distinct variables

>> la posiscion de como se crean las variables para desctructurar importa pues sera el mismo orden de donde salen los valores
para saltar un valor solo ponemos extra comas.
Tambien podemos usar spread dentro del destructuring
*/

//ejemplo
const raceResults = [
  "juean de la papa",
  "gato de abajo",
  "alberto pop",
  "maria la del barrio",
  "el pana que no me acuerdo",
];
//old way de destructuring
// const  gold = raceResults[0]
// const  silver = raceResults[1]
// const  bronce = raceResults[2]

//new way en un array
const [gold, silver, broce, ...otros] = raceResults;

//new way en un object
//se destructura en base a los key del objeto y la variable toma el valor .
const runner = {
  first: "jean",
  last: "nunez",
  country: "Rep.Dom",
  title: "ya kisiera tu",
};

const { first, last, country } = runner;

//podemos cambiar el nombre de la variable tambien , primero ponemos el key y seguido el  valor nuevo de la variable.
const { country: pais, title: condecoracion } = runner;

//destructuring  parametros
//forma mas resumida
function print(person) {
  const { first, last, title } = person;
  return `${first} ${last} ${title}`;
}
const fullName = ({ first, last, title }) => {
  return `${first} ${last} ${title}`;
};

//envents
//forma 1-agregar el evento(ver documentacion)  inline en el elemento html NO RECOMENDABLE, regularmente el evento llama a una function.
//patron on(element)EVENTNAME='hace algo'
// <button onclick='alert("click")'>click</button>

//forma 2: seleccionamos el elemento al que queremos agregar un evento. y despues le agregamos el evneto con el (.) y eso lo definimos con una funcion pork si lo hacemos sin funcions va a correr desde que carge.
//patron  ejemplo const btn=document.queryselector("#btn");  btn.onclick= function()=>{alert('click')}

//forma 3 y recomendable> seleccionamos el elemento y agregamos el evneto  usando (.adEventListener) y ejecutamos la funtcion
//ejemplo y patron > bta.addEventListener('click',()=>{});
