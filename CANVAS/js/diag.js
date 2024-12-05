let chartInstance = null; // Ссылка на текущий экземпляр графика

document.getElementById("calculate-btn").addEventListener("click", function () {
  // Получаем значения из полей ввода
  const high = parseFloat(document.getElementById("high").value);
  const low = parseFloat(document.getElementById("low").value);
  const steps = parseInt(document.getElementById("steps").value);
  const accuracy = parseInt(document.getElementById("accuracy").value);

  // Проверяем, что все данные корректны
  if (
    isNaN(high) ||
    isNaN(low) ||
    isNaN(steps) ||
    isNaN(accuracy) ||
    high <= low ||
    steps <= 0
  ) {
    alert("Пожалуйста, заполните все поля корректно.");
    return;
  }

  // Генерация данных для графика
  const xValues = [];
  const yValues = [];

  for (let i = 0; i <= steps; i++) {
    const x = low + (high - low) * (i / steps);
    const y = Math.random(); // Здесь можно заменить на реальную зависимость
    xValues.push(x.toFixed(accuracy));
    yValues.push(y);
  }

  // Если график уже существует, уничтожаем его
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Создание нового графика
  const ctx = document.getElementById("chart").getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "Кол-во пройденных тестов за год",
          data: yValues,
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Период",
          },
        },
        y: {
          title: {
            display: true,
            text: "Пройденные тесты",
          },
        },
      },
    },
  });
});
