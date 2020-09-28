// Ejercicio 3
var boton5 = document.getElementById("btnContarVocales");
var boton7 = document.getElementById("btnEnviarEje7");
function ejercicio3() {
  alert("Htpa, porfin funcione como debe ser");
}

// Ejercicio 5

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

//Ejercicio 7
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
