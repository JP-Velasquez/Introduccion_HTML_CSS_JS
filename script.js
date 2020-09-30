// Ejercicio 3
var ordenadosMenor_aMayor = [];
var numeros = [];
var btnMenor = document.getElementById("btnVerMenor");
var btnMayor = document.getElementById("btnVerMayor");
var btnCantPrimos = document.getElementById("btnCantPrimos");
var btnPromedioPares = document.getElementById("btnPromedioPares");
var resultadoParaNumeros = document.getElementById("resultadoNumeros");

function numerosOrganizados() {
  var numerosIngresados = document.getElementById("numerosIngresados").value;
  if (numerosIngresados.length == 0) {
    alert("Debe poner numeros en el campo para hacer la operación.")
  } else {
    numeros = numerosIngresados.split(", ");
    ordenadosMenor_aMayor = numeros.sort((a, b) => a - b);
    return parseInt(ordenadosMenor_aMayor);
  }
}

// Numero menor
btnMenor.addEventListener("click", numeroMenor);

function numeroMenor() {
  numerosOrganizados();
  var numMenor = ordenadosMenor_aMayor[0];
  resultadoParaNumeros.value = "El numero menor es: " + numMenor;
}

// Numero mayor
btnMayor.addEventListener("click", numeroMayor);

function numeroMayor() {
  numerosOrganizados();
  var numMayor = ordenadosMenor_aMayor[numeros.length - 1];
  resultadoParaNumeros.value = "El numero mayor es: " + numMayor;
}

// Numero de primos
btnCantPrimos.addEventListener("click", cantPrimos);

function cantPrimos() {
  numerosOrganizados();
  var numerosPrimos = [];
  var contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (primo(numeros[i])) {
      contador++;
      numerosPrimos.push(i);
    }
  }
  resultadoParaNumeros.value = "La cantidad de numeros primos son: " + contador;
}

function primo(numero) {
  var a = true;
  var aux = 2;
  if (numero == 1) {
    a = false;
  }
  while (aux < numero) {
    if (numero % aux == 0) {
      a = false;
    }
    aux++;
  }
  return a;
}

// Promedio de numeros pares
btnPromedioPares.addEventListener("click", promedioPares);

function promedioPares() {
  numerosOrganizados();
  var suma = 0;
  var promedio = 0;
  var dividendo = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      suma = parseInt(suma) + parseInt(numeros[i]);
      dividendo++;
    }
  }
  promedio = suma / dividendo;
  resultadoParaNumeros.value = "El promedio de numeros pares es: " + promedio;
}

// Ejercicio 4
var boton4 = document.getElementById("button4");
boton4.addEventListener("click", ejercicio4);

function ejercicio4() {
  var input4 = document.getElementById("textArea4").value;
  var inputLength = input4.length;
  fraseIngresada = input4.split(" ");
  if (fraseIngresada.length < 5) {
    alert("La frase ingresada debe de tener mínimo cinco palabras");
  } else {
    if (input4.charAt(inputLength - 1) == " " || input4.charAt(0) == " ") {
      textoAreaDividido = input4.split(" ");
      numeroPalabras = fraseIngresada.length - 1;
      var strResult = "Hay " + numeroPalabras + " palabras."
      document.getElementById("textAResult4").value = strResult;
      document.getElementById("textArea4").value = null;
    } else {
      textoAreaDividido = input4.split(" ");
      numeroPalabras = fraseIngresada.length;
      var strResult = "Hay " + numeroPalabras + " palabras."
      document.getElementById("textAResult4").value = strResult;
      document.getElementById("textArea4").value = null;
    }
  }
}


// Ejercicio 5
var boton5 = document.getElementById("btnContarVocales");
boton5.addEventListener("click", ejercicio5);

function ejercicio5() {
  var input = document.getElementById("fraseEje5").value;
  vector = input.toLowerCase().split("");
  var a = e = i = o = u = 0;
  for (k = 0; k < vector.length; k++) {
    if (vector[k] == "a" || vector[k] == "A") {
      a++;
    } else if (vector[k] == "e" || vector[k] == "E") {
      e++;
    } else if (vector[k] == "i" || vector[k] == "I") {
      i++;
    } else if (vector[k] == "o" || vector[k] == "O") {
      o++;
    } else if (vector[k] == "u" || vector[k] == "U") {
      u++;
    }
  }
  var letraA = "Hay " + a + " vocales a\n";
  var letraE = "Hay " + e + " vocales e\n";
  var letraI = "Hay " + i + " vocales i\n";
  var letraO = "Hay " + o + " vocales o\n";
  var letraU = "Hay " + u + " vocales u\n";
  texto = letraA + letraE + letraI + letraO + letraU;
  document.getElementById("resultadoVocales").value = texto;
}

// Ejercicio 6
var numero1;
var numero2;
var operacion;

var boton_ej6_1 = document.getElementById("boton1");
var boton_ej6_2 = document.getElementById("boton2");
var boton_ej6_3 = document.getElementById("boton3");
var boton_ej6_mas = document.getElementById("botonMas");
var boton_ej6_4 = document.getElementById("boton4");
var boton_ej6_5 = document.getElementById("boton5");
var boton_ej6_6 = document.getElementById("boton6");
var boton_ej6_menos = document.getElementById("botonMenos");
var boton_ej6_7 = document.getElementById("boton7");
var boton_ej6_8 = document.getElementById("boton8");
var boton_ej6_9 = document.getElementById("boton9");
var boton_ej6_por = document.getElementById("botonPor");
var boton_ej6_0 = document.getElementById("boton0");
var boton_ej6_reset = document.getElementById("botonReset");
var boton_ej6_igual = document.getElementById("botonIgual");
var boton_ej6_dividir = document.getElementById("botonDividr");

var resultado = document.getElementById("resultadoCalculadora");
var mostrarOperacion = document.getElementById("spanOperacion");

boton_ej6_1.onclick = function(e) {
  resultado.textContent = resultado.textContent + "1";
  mostrarOperacion.textContent = "";
}
boton_ej6_2.onclick = function(e) {
  resultado.textContent = resultado.textContent + "2";
  mostrarOperacion.textContent = "";
}
boton_ej6_3.onclick = function(e) {
  resultado.textContent = resultado.textContent + "3";
  mostrarOperacion.textContent = "";
}
boton_ej6_4.onclick = function(e) {
  resultado.textContent = resultado.textContent + "4";
  mostrarOperacion.textContent = "";
}
boton_ej6_5.onclick = function(e) {
  resultado.textContent = resultado.textContent + "5";
  mostrarOperacion.textContent = "";
}
boton_ej6_6.onclick = function(e) {
  resultado.textContent = resultado.textContent + "6";
  mostrarOperacion.textContent = "";
}
boton_ej6_7.onclick = function(e) {
  resultado.textContent = resultado.textContent + "7";
  mostrarOperacion.textContent = "";
}
boton_ej6_8.onclick = function(e) {
  resultado.textContent = resultado.textContent + "8";
  mostrarOperacion.textContent = "";
}
boton_ej6_9.onclick = function(e) {
  resultado.textContent = resultado.textContent + "9";
  mostrarOperacion.textContent = "";
}
boton_ej6_0.onclick = function(e) {
  resultado.textContent = resultado.textContent + "0";
  mostrarOperacion.textContent = "";
}
boton_ej6_reset.onclick = function(e) {
  resetear();
}
boton_ej6_mas.onclick = function(e) {
  numero1 = resultado.textContent;
  operacion = "+";
  limpiar();
  mostrarOperacion.textContent = "+";
}
boton_ej6_menos.onclick = function(e) {
  numero1 = resultado.textContent;
  operacion = "-";
  limpiar();
  mostrarOperacion.textContent = "-";
}
boton_ej6_por.onclick = function(e) {
  numero1 = resultado.textContent;
  operacion = "*";
  limpiar();
  mostrarOperacion.textContent = "*";
}
boton_ej6_dividir.onclick = function(e) {
  numero1 = resultado.textContent;
  operacion = "/";
  limpiar();
  mostrarOperacion.textContent = "/";
}
boton_ej6_igual.onclick = function(e) {
  numero2 = resultado.textContent;
  mostrarOperacion.textContent = "";
  resolver();
}

// Poner vacio el resultado
function limpiar() {
  resultado.textContent = "";
  mostrarOperacion.textContent = "";
}

// Resetar las variables operandoA, operandoB y operacion
function resetear() {
  resultado.textContent = "";
  mostrarOperacion.textContent = "";
  numero1 = 0;
  numero2 = 0;
  operacion = "";
}

function resolver() {
  var respuesta = 0;
  switch (operacion) {
    case "+":
      respuesta = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      respuesta = parseFloat(numero1) - parseFloat(numero2);
      break;
    case "*":
      respuesta = parseFloat(numero1) * parseFloat(numero2);
      break;
    case "/":
      respuesta = parseFloat(numero1) / parseFloat(numero2);
      break;
  }
  resetear();
  resultado.textContent = respuesta;
}

// Ejercicio 7
var boton7 = document.getElementById("btnEnviarEje7");
boton7.addEventListener("click", ejercicio7);

function ejercicio7() {
  var nombre = document.getElementById("Nombres").value;
  var apellido = document.getElementById("Apellidos").value;
  var identificacion = document.getElementById("Identificacion").value;
  var carrera = document.getElementById("carreras").value;
  if (nombre.length == 0 || apellido.length == 0 || identificacion.length > 10 || carrera == "Seleccione su carrera" || identificacion.length < 6) {
    alert("Debe completar todos los campos.\nRecuerde que la identificacion debe tener entre 6 y 10 digitos.")
  } else {
    texto = "Nombre: " + nombre + "\nApellidos: " + apellido + "\nIdentificacion: " + identificacion + "\nCarrera: " + carrera;
    document.getElementById("ventana").style.display = "block";
    document.getElementById("resultadoDatos").value = texto;
  }
}

function cerrar() {
  document.getElementById("ventana").style.display = "none";
}
