const entrada = document.getElementById('input-line');
const output = document.getElementById('output');
const comandosBox = document.getElementById('comandos');
const ventana = document.getElementById('ventana-tecnologias');
const neofetch = document.getElementById('neofetch');
const clearBtn = document.getElementById('clear-btn');
comandosBox.style.opacity = '1';
ventana.style.display = 'none';
neofetch.style.display = 'none';

// Bienvenida tipo máquina de escribir
function escribirTexto(texto, elemento, velocidad, callback) {
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto[i];
    i++;
    if (i === texto.length) {
      clearInterval(intervalo);
      if (callback) callback();
    }
  }, velocidad);
}

const bienvenida =
  "Bienvenido a mi portafolio terminal 🧠\n" +
  "Escribe 'help' para ver los comandos disponibles.\n\n";

escribirTexto(bienvenida, output, 40, () => {
  comandosBox.style.display = 'block';
});

// Comandos
entrada.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = entrada.value.trim().toLowerCase();
    output.innerHTML += `wandy@portfolio:~$ ${input}\n`;

    switch (input) {
      case 'help':
        comandosBox.style.opacity = '1';
        break;
      case 'skills':
        ventana.style.display = 'block';
        break;
      case 'neomi':
        neofetch.style.display = 'flex';
        break;

        case 'projects':
  document.getElementById('ventana-proyectos').style.display = 'block';
  break;

      default:
        output.innerHTML += `❌ Comando no reconocido: "${input}"\n`;
    }

    entrada.value = '';
    output.scrollTop = output.scrollHeight;
  }
});

// Botón limpiar
clearBtn.addEventListener('click', () => {
  document.getElementById('ventana-proyectos').style.display = 'none';
  comandosBox.style.display = 'none';
  ventana.style.display = 'none';
  neofetch.style.display = 'none';
});
