/*
1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
deberá imprimir en pantalla
*/

var valor1 = 2;
var valor2 = 9;

function suma(a, b) {
  return a + b;
}
console.log("-----     Respuesta 1     -----");
console.log(
  "La suma de " + valor1 + "+" + valor2 + " Es " + suma(valor1, valor2)
);

/*
2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
*/

let examen1 = 14;
let examen2 = 12;
let examen3 = 19;
let examen4 = 12;

function promedio(a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log("-----     Respuesta 2     -----");
console.log(`El promedio de ${examen1},${examen2}, ${examen3}, ${examen4} 
Es: ${promedio(examen1, examen2, examen3, examen4)}`);

/**
 * 3. Calcular el área de un rectángulo
 */

let base = 14;
let altura = 12;

function areaRectangulo(a, b) {
  return a * b;
}
console.log("-----     Respuesta 3     -----");
console.log(`El área del rectángulo de lados a=${base} cm y b=${altura} cm 
Es de ${areaRectangulo(base, altura)} cm2`);

/**
 * 4. Calcular el área de un triángulo
 */
function areaTriangulo(a, b) {
  return (a * b) / 2;
}
console.log("-----     Respuesta 4     -----");
console.log(`El área del triangulo de lados a=${base} cm y b=${altura} cm 
Es de ${areaTriangulo(base, altura)} cm2`);

/**
 * 5. Calcular el área de una circunferencia
 */
function areaCircunferenciar(r) {
  return 3.14 * (r * r);
}
console.log("-----     Respuesta 5     -----");
console.log(`El área de la circunferencia de radio ${base} 
Es de ${areaCircunferenciar(base)}`);

/**
 * 6. Determinar el sueldo semanal de un trabajador basándose en sus horas
        trabajadas y su salario de hora hombre
 */
let horasTrabajadas = 40;
let salarioHora = 4;

function sueldoSemanal(a, b) {
  return a * b;
}
console.log("-----     Respuesta 6     -----");
console.log(`El sueldo por hora es ${salarioHora}, las horas trabajadas en la semana es ${horasTrabajadas} 
El sueldo semanal es de ${sueldoSemanal(salarioHora, horasTrabajadas)}`);

/**
 * 7 Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
resolver el problema, determinando cuantas pulgadas debe pedir con base en
los metros que requiere. Represéntelo mediante el diagrama de flujo y el
pseudocódigo (1 pulgada = 0.0254 m).
 */

let metro = 60;
let pulgada = 0.0254;

function convertirMetroaPulgadas(a) {
  return a * pulgada;
}
console.log("-----     Respuesta 7     -----");
console.log(`${metro}m en pulgadas es: ${convertirMetroaPulgadas(metro)} `);

/**
 * 8 Una empresa importadora desea determinar cuántos dólares puede adquirir
con equis cantidad de dinero peruano
 */

let soles = 60;
let tipoCambio = 3.5505;
function convertirSolesaDolares(a) {
  return soles / tipoCambio;
}

console.log("-----     Respuesta 8     -----");
console.log(
  `${soles} soles al tipo de cambio de hoy es: ${convertirSolesaDolares(
    soles
  )} dolares `
);

/**
 * 9 Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
les pregunta el año en que nacieron
 */

let annoNacimiento = 1989;
let today = new Date();
let year = today.getFullYear();
function obtenerEdad(a) {
  return year - annoNacimiento;
}
console.log("-----     Respuesta 9     -----");
console.log(
  `Su año de nacimiento es ${annoNacimiento} y su edad es: ${obtenerEdad(
    annoNacimiento
  )} `
);

/**
 * 10 Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
edad de la persona de menor edad
 */

var persons = [
  { nombre: "Bruno Sánchez ", edad: 21 },
  { nombre: "Wendy Flores ", edad: 22 },
  { nombre: "Maritza Escajadillo ", edad: 15 },
];
var keyMenor = 0;
var edadMenor = 0;
console.log("-----     Respuesta 10     -----");
for (let index = 0; index < persons.length; index++) {
  if (index == 0) {
    edadMenor = persons[index].edad;
  } else {
    if (persons[index].edad < edadMenor) {
      edadMenor = persons[index].edad;
      keyMenor = index;
    }
  }
}
console.log(
  `${persons[keyMenor].nombre} con ${persons[keyMenor].edad} es el de menor edad `
);

/**
 * 11 Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
y represéntelo ,que permita determinar el bono que recibirá un trabajador
 */

let annoAntiguedad = 2;
let annoAntiguedadMayor = 8;

function obtenerBono(a) {
  switch (a) {
    case 1:
      return 100;
    case 2:
      return 200;
    case 3:
      return 200;
    case 4:
      return 200;
    case 5:
      return 200;
    default:
      return 1000;
  }
}

console.log("-----     Respuesta 11     -----");
console.log(
  `Tengo ${annoAntiguedad} años de antiguedad mi bono es de $${obtenerBono(
    annoAntiguedad
  )}`
);
console.log(
  `Tengo ${annoAntiguedadMayor} años de antiguedad mi bono es de $${obtenerBono(
    annoAntiguedadMayor
  )}`
);

/**
 * 12 Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
en cada uno de los 6 años? Realice el algoritmo y representan la solución,
utilizando el ciclo apropiado
 */

let salarioInicial = 1500;

function incrementeoAnual() {
  for (var i = 1; i <= 6; i++) {
    salarioInicial = salarioInicial + salarioInicial * 0.1;
    console.log(`Año ${i}, su sueldo es ${salarioInicial}`);
  }
}

console.log("-----     Respuesta 12     -----");
console.log(`Sueldo actual ${salarioInicial}`);
incrementeoAnual();
/**
 * 13 Realice un algoritmo para leer las calificaciones de N alumnos y determine el
número de aprobados y reprobados
 */
let contAprob = 0;
let contDesap = 0;
let notas = [];
notas.push(8);
notas.push(12);
notas.push(20);
notas.push(16);

function resultados() {
  notas.forEach(function (valor, indice, array) {
    if (valor > 10) {
      contAprob++;
    }
    if (valor < 10) {
      contDesap++;
    }
  });
  console.log("Hay " + contAprob + " aprobados");
  console.log("Hay " + contDesap + " desaprobados");
}
console.log("-----     Respuesta 13     -----");
resultados();

/**
 * 14 Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
contabilizar, de un lote de N focos, el número de focos de cada color que hay en
existencia
 */
let cantidadVerde = 0;
let cantidadBlanco = 0;
let cantidadRojo = 0;

let lote = [
  "verde",
  "blanco",
  "blanco",
  "rojo",
  "verde",
  "verde",
  "verde",
  "verde",
  "rojo",
  "rojo",
];
for (let index = 0; index < lote.length; index++) {
  if (lote[index] == "verde") {
    cantidadVerde++;
  }
  if (lote[index] == "blanco") {
    cantidadBlanco++;
  }
  if (lote[index] == "rojo") {
    cantidadRojo++;
  }

  suma = suma + index;
}
console.log("-----     Respuesta 14     -----");
console.log("La cantidad de focos Verdes es: " + cantidadVerde);
console.log("La cantidad de focos Blanco es: " + cantidadBlanco);
console.log("La cantidad de focos Rojo es: " + cantidadRojo);
/**
 * 15 Realice un algoritmo para determinar si una persona puede votar con base en
su edad en las próximas elecciones
 */
const personasVotacion = [
  {
    name: "Bruno Sánchez",
    age: 17,
  },
  {
    name: "Wendy Flores",
    age: 19,
  },
  {
    name: "Mariella Salas",
    age: 21,
  },
];
function verificarEdad(edad) {
  if (edad > 18) {
    return true;
    console.log("No puede votar en las elecciones");
  } else return false;
}
console.log("-----     Respuesta 15     -----");

for (const key in personasVotacion) {
  verificarEdad(personasVotacion[key].age);
  if (verificarEdad(personasVotacion[key].age)) {
    console.log(
      ` ${personasVotacion[key].name} (edad ${personasVotacion[key].age})  puede votar en las elecciones`
    );
  } else {
    console.log(
      ` ${personasVotacion[key].name} (edad ${personasVotacion[key].age}) NO puede votar en las elecciones`
    );
  }
}
