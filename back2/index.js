// No cambies los nombres de las funciones.

// =================== EJERCICIO 1 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * "x" e "y" son números enteros (int).
 * Devuelve el número más grande
 * Si son iguales, devuelve cualquiera de los dos
 * 
 */
function obtenerMayor(x, y) {
    // Tu código:
    if (x > y) return x;
    return y;
}

// =================== EJERCICIO 2 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * Determinar si la persona según su edad puede ingresar a un evento.
 * Si tiene 18 años ó más, devolver --> "Allowed"
 * Si es menor, devolver --> "Not allowed"
 * 
 */
function mayoriaDeEdad(edad) {
    // Tu código
    if (edad < 18) return "Not allowed";
    return "Allowed";
}

// =================== EJERCICIO 3 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Recibimos un estado de conexión de un usuario representado por un valor numérico.
 * Cuando el estado es igual a 1, el usuario está "Online"
 * Cuando el estado es igual a 2, el usuario está "Away"
 * De lo contrario, presumimos que el usuario está "Offline"
 * Devolver el estado de conexión de usuario en cada uno de los casos.
 * 
 */
function conection(status) {
    // Tu código   
    switch (status) {
        case 1:
            return "Online";
        case 2:
            return "Away";
        default:
            return "Offline";
    }
}

// =================== EJERCICIO 4 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 *  Devuelve un saludo en tres diferentes lenguajes:
 *  Si "idioma" es "aleman", devuelve "Guten Tag!"
 *  Si "idioma" es "mandarin", devuelve "Ni Hao!"
 *  Si "idioma" es "ingles", devuelve "Hello!"
 *  Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
 * 
 */
function saludo(idioma) {
    // Tu código:
    switch (idioma) {
        case "aleman":
            return "Guten Tag!";
        case "mandarin":
            return "Ni Hao!";
        case "ingles":
            return "Hello!";
        default:
            return "Hola!";
    }
}

// =================== EJERCICIO 5 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * Si "numero" es divisible entre 3, devuelve "fizz"
 * Si "numero" es divisible entre 5, devuelve "buzz"
 * Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
 * De lo contrario, devuelve el numero
 * 
 */
function fizzBuzz(numero) {
    // Tu código
    let modulo3 = numero % 3 == 0 ? "fizz" : "";
    let modulo5 = numero % 5 == 0 ? "buzz" : "";
    let respuesta = "" + modulo3 + modulo5;
    if (respuesta != "") return respuesta;
    else return numero;

}

// =================== EJERCICIO 6 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * La función recibe tres números distintos.
 * Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
 * Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
 * Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
 * 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
 * Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
 * 
 */
function operadoresLogicos(num1, num2, num3) {
    // Tu código
    if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
    if (num1 == 0 || num2 == 0 || num3 == 0) return "Error";

    let max = Math.max(num1, num2, num3);
    if (max == num1) return "Número 1 es mayor y positivo";
    if (max == num3) return num3 + 1;

    return false;

}

// =================== EJERCICIO 7 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Devuelve "true" si "numero" es primo
 * De lo contrario devuelve "falso"
 * Pista: un número primo solo es divisible por sí mismo y por 1
 * Pista 2: Puedes resolverlo usando un bucle `for`
 * Nota: Los números 0 y 1 NO son considerados números primos
 * 
 */
function esPrimo(numero) {
    // Tu código
    //descartar 0, 1 y numeros pares
    if(numero==0 || numero==1 || numero%2 == 0) return false;

    //descartar 2 y 3 (primos) para entrar al for
    if(numero==2 || numero==3) return true;
    
    for(let divisor = 3; divisor < numero; divisor+2)
        if(numero%divisor == 0) return false;
    
    // si sale del for es porque no fue divisible por ningun numero (primo)
    return false;
}

// =================== EJERCICIO 8 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
 * Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
 * 
 */
function multiplicarArgumentos() {
    // Escribe tu código aquí:
    let length = arguments.length;

    if(length == 0) return 0;
    if(length == 1) return arguments[0];

    let result = 1;
    for(let i = 0; i < length; i++)
        result *= arguments[i];
}


// =================== EJERCICIO 9 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
 * inicia con 9 y false en otro caso.
 * 
 */
function empiezaConNueve(n) {
    //Escribe tu código aquí
    let str = toString(n);
    if(str.charAt(0) == '9') return true;
    else return false;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    multiplicarArgumentos,
    empiezaConNueve
};