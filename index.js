document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
  
    formulario.addEventListener("submit", function () {  
      if (!validarFormulario()) {
        console.log("Formulario no válido. Por favor, verifica los campos.");
      } else {
        console.log("Formulario válido. Enviando...");
        formulario.submit();
      }
    });
  
    function validarFormulario() {  
      const nombre = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellidos").value;
      const correo = document.getElementById("correo").value;
      const nacimiento = document.getElementById("nacimiento").value;
  
      //Validaciones para campos obligatorios
      if (nombre.trim() === "" || apellidos.trim() === "" || correo.trim() === "" || nacimiento.trim() === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return false;
      }
  
      //Validación de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
      }
  
      //Validación de fecha de nacimiento (mayores de edad)
      const fechaNacimiento = new Date(nacimiento);
      const fechaActual = new Date();
      const edadMinima = 18;
  
      if (isNaN(fechaNacimiento.getTime()) || fechaActual.getFullYear() - fechaNacimiento.getFullYear() < edadMinima) {
        alert("Debes ser mayor de 18 años para enviar el formulario.");
        return false;
      }
    
      return true; //Devuelve true si el formulario es válido
    }
  });
  