// Ejercicio 3
var ordenadosMenor_aMayor = [];
var numeros = [];
var btnMenor = document.getElementById("btnVerMenor");
var btnMayor = document.getElementById("btnVerMayor");
var btnCantPrimos = document.getElementById("btnCantPrimos");
var btnPromedioPares = document.getElementById("btnPromedioPares");
var resultadoParaNumeros = document.getElementById("resultadoNumeros");

function numerosOrganizados(){
  var numerosIngresados = document.getElementById("numerosIngresados").value;
  if (numerosIngresados.length==0) {
    alert("Debe poner numeros en el campo para hacer la operación.")
  }else{
    numeros = numerosIngresados.split(", ");
    ordenadosMenor_aMayor = numeros.sort((a,b) => a-b);
    return parseInt(ordenadosMenor_aMayor);
  }
}

// Numero menor
btnMenor.addEventListener("click", numeroMenor);
function numeroMenor(){
  numerosOrganizados();
  var numMenor = ordenadosMenor_aMayor[0];
  resultadoParaNumeros.value = "El numero menor es: " + numMenor;
}

// Numero mayor
btnMayor.addEventListener("click", numeroMayor);
function numeroMayor(){
  numerosOrganizados();
  var numMayor = ordenadosMenor_aMayor[numeros.length-1];
  resultadoParaNumeros.value = "El numero mayor es: " + numMayor;
}

// Numero de primos
btnCantPrimos.addEventListener("click", cantPrimos);
function cantPrimos(){
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
  if(numero == 1){
    a = false;
  }
  while (aux < numero ){
    if(numero % aux == 0){
      a=false;
    }
    aux++;
  }
  return a;
}

// Promedio de numeros pares
btnPromedioPares.addEventListener("click", promedioPares);
function promedioPares(){
  numerosOrganizados();
  var suma = 0;
  var promedio = 0;
  var dividendo = 0;
  for (var i=0; i < numeros.length; i++){
    if(numeros[i]%2 == 0){
      suma = parseInt(suma) + parseInt(numeros[i]);
      dividendo++;
    }
  }
  promedio = suma/dividendo;
  resultadoParaNumeros.value = "El promedio de numeros pares es: " + promedio;
}

// Ejercicio 4
var boton4 = document.getElementById("button4");
boton4.addEventListener("click", ejercicio4);

function ejercicio4() {
  var input4 = document.getElementById("textArea4").value;
  fraseIngresada = input4.split(" ");
  if (fraseIngresada.length < 5) {
    alert("La frase ingresada debe de tener mínimo cinco palabras");
  } else {
    textoAreaDividido = input4.split(" ");
    numeroPalabras = fraseIngresada.length;
    var strResult = "Hay " + numeroPalabras + " palabras."
    document.getElementById("textAResult4").value = strResult;
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
