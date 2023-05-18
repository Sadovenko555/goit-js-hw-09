// Отримуємо посилання на кнопки "Start" і "Stop"
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId; // Оголошуємо змінну на глобальному рівні

// Додаємо обробники подій для кнопок
startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);

function startColorSwitch() {
  startButton.disabled = true; // Вимикаємо кнопку "Start"
  intervalId = setInterval(changeBackgroundColor, 1000); // Запускаємо зміну кольору кожну секунду
}

function stopColorSwitch() {
  startButton.disabled = false; // Активуємо кнопку "Start"
  clearInterval(intervalId); // Зупиняємо зміну кольору
}

function changeBackgroundColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
