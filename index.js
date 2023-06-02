let boton = document.getElementById('miBoton');

boton.addEventListener("click", function() {
	alert(" Haz hecho click en el miBoton")
});


const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

function invertirTexto() {
  var inputElement = document.getElementById('inputTexto');
  var resultadoElement = document.getElementById('resultado');

  var texto = inputElement.value;
  var textoInvertido = invertirString(texto);

  resultadoElement.value = textoInvertido;
}

function invertirString(texto) {
  return texto.split('').reverse().join('');
}
