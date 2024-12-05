const risks = [
  {
    id: 1,
    name: "Недостаток времени на подготовку",
    probability: 4,
    impact: 5,
  },
  { id: 2, name: "Неуверенность в ответах", probability: 3, impact: 4 },
  { id: 3, name: "Трудность с пониманием заданий", probability: 4, impact: 4 },
  { id: 4, name: "Сложности с концентрацией", probability: 3, impact: 3 },
  { id: 5, name: "Заболевание или форс-мажор", probability: 2, impact: 5 },
  {
    id: 6,
    name: "Технические проблемы с компьютером",
    probability: 2,
    impact: 4,
  },
];

// Функция для вычисления оценки риска
function calculateRiskScore(probability, impact) {
  return probability * impact;
}

// Функция для отображения рисков в таблице
function displayRisks() {
  // Получаем тело таблицы
  const tableBody = document.querySelector("table tbody");

  // Сортируем риски по оценке риска (по убыванию)
  const sortedRisks = risks
    .map((risk) => ({
      ...risk,
      riskScore: calculateRiskScore(risk.probability, risk.impact),
    }))
    .sort((a, b) => b.riskScore - a.riskScore);

  // Очищаем таблицу перед добавлением данных
  tableBody.innerHTML = "";

  // Добавляем строки в таблицу
  sortedRisks.forEach((risk, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${risk.name}</td>
            <td>${risk.probability}</td>
            <td>${risk.impact}</td>
            <td>${risk.riskScore}</td>
        `;

    tableBody.appendChild(row);
  });
}

// Вызов функции отображения рисков при загрузке страницы
window.onload = function () {
  displayRisks();
  // Отображаем график (если он еще не отображался)
  if (!document.getElementById("chart")) {
    const ctx = document.createElement("canvas");
    ctx.id = "chart";
    document.querySelector(".canvas-container").appendChild(ctx);
    new Chart(ctx, config);
  }
};
