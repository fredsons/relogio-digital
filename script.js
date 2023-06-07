// Função responsável por atualizar o relógio
function updateClock() {
  // Seleciona os elementos HTML que exibirão as horas, minutos e segundos
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  // Obtém a data e hora atual
  const date = new Date();

  // Obtém as horas, minutos e segundos formatados com dois dígitos
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Chama a função updateClock a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);
