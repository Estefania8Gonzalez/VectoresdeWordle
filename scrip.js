<script>

var palabraSecreta = ''; 
var intentos = 3; 
var juegoIniciado = false; 

// Función para generar una palabra aleatoria
function generarPalabraAleatoria() {
  var palabras = ['manzana', 'pera', 'fresa', 'uva', 'kiwi'];
  var indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

// Función para iniciar el juego
document.getElementById('iniciar').addEventListener('click', function() {
  if (!juegoIniciado) {
    palabraSecreta = generarPalabraAleatoria();
    intentos = 3; // Restablecer el número de intentos
    document.getElementById('resultado').textContent = ''; // Limpiar resultado anterior
    juegoIniciado = true; // Marcar el juego como iniciado
   }


// Función para verificar la palabra ingresada
document.getElementById('palabra').addEventListener('input', function() 
{
  if (juegoIniciado) {
    var palabraIngresada = this.value.toLowerCase();

    if (palabraIngresada === palabraSecreta) {
      document.getElementById('resultado').textContent = '¡Ganaste!';
      juegoIniciado = false; // Marcar el juego como no iniciado
    } else {
      intentos--;

      if (intentos <= 0) {
        document.getElementById('resultado').textContent = '¡Perdiste! La palabra era: ' + palabraSecreta;
        juegoIniciado = false; // Marcar el juego como no iniciado
      } else {
        document.getElementById('resultado').textContent = 'Intentos restantes: ' + intentos;
      }
    }
  }
});
</script>