/*NUMEROS
    toFixed(numero de decimales deseado)= para redondear al decimal que desee
    typeof = para saber que tipo de variable es 
    parseInt, parseFloat= para convertir la variable a la variable deseada
*/
/*array
    array.forEach(function(valores del array,indice)){

    }
*/
/* objetos 
    Object.keys(objeto)= muestra todos los metodos del objeto y las lista, solo las llaves
    Object.values(objeto)= muestra todos los metodos del objeto y las lista, solo los valores
    objeto.hasOwnProperty("netodo a buscar"); = devuelve falso o verdadero si no encuentra;
    
*/
const luis=["luis","lu","ma"]
 
const enrique={

    nombre:"enr",
    apeliido:"rae"
}

for (const l in enrique) {
    console.log(`${l} valor:${enrique[l]}`);
}
// ...parametro por si no sabemos cuantos parametros va a poner el usuario tambien para juntar dos arrays
const saludar= (nombre)=>{
    console.log(`hola soy ${nombre}`);
}
saludar("irma");

console.dir(window)
console.log(window)
