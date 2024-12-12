const risks = [
  {
    id: 1,
    name: "Технические риски",
    probability: 5,
    impact: 5,
  },
  {
    id: 2,
    name: "Риски безопасности",
    probability: 4,
    impact: 5,
  },
  {
    id: 3,
    name: "Риски разработки",
    probability: 4,
    impact: 4,
  },
  {
    id: 4,
    name: "Риски управления проектом",
    probability: 3,
    impact: 4,
  },
  {
    id: 5,
    name: "Риски со стороны пользователей",
    probability: 4,
    impact: 3,
  },
  {
    id: 6,
    name: "Риски коммуникации",
    probability: 2,
    impact: 3,
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
