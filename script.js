const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
let colorIndex = 0;
const colors = ["red", "green", "blue", "orange", "purple"]; // Puedes agregar más colores según tus preferencias

// function changeColors() {
//   logo.style.color = colors[colorIndex];
//   container.style.color = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
// }

// // Cambia los colores cada 2 segundos (2000 milisegundos)
// setInterval(changeColors, 2000);

// Función para activar o desactivar el modo oscuro
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Guardar el estado del modo oscuro en localStorage
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  }

  // Verificar el estado del modo oscuro en localStorage al cargar la página
  window.addEventListener("DOMContentLoaded", function () {
    var darkModeState = localStorage.getItem("dark-mode");
    if (darkModeState === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });

  // Llamar a toggleDarkMode() cuando se haga clic en un botón o elemento de cambio
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

// Función para agregar el botón "Copy to Clipboard" en la parte superior del bloque de código
function addCopyButtonsToCodeBlocks() {
  const codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach((codeBlock) => {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = '<i class="fas fa-clipboard"></i>'; // Agrega el icono de Font Awesome

    copyButton.classList.add("copy-button");

    copyButton.addEventListener("click", () => {
      const textArea = document.createElement("textarea");
      textArea.value = codeBlock.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      copyButton.innerHTML = '<i class="fas fa-check"></i>'; // Cambia el icono a un icono de confirmación
      setTimeout(() => {
        copyButton.innerHTML =
          '<i class="fas fa-clipboard"></i>'; // Restaura el icono "Copy to Clipboard" después de 2 segundos
      }, 2000);
    });

    // Insertar el botón antes del bloque de código
    codeBlock.parentElement.insertBefore(copyButton, codeBlock);
  });
}

// Llamar a la función para agregar los botones después de que la página se cargue
window.addEventListener("DOMContentLoaded", addCopyButtonsToCodeBlocks);
