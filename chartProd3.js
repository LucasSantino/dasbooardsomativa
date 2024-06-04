document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("producaoGraph").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Dia 1",
      "Dia 2",
      "Dia 3",
      "Dia 4",
      "Dia 5",
      "Dia 6",
      "Dia 7",
      "Dia 8", 
      "Dia 9",
      "Dia 10",
      "Dia 11",
      "Dia 12",
      "Dia 13",
      "Dia 14",
      "Dia 15",
      "Dia 16",
      "Dia 17",
      "Dia 18",
      "Dia 19",
      "Dia 20",
      "Dia 21",
      "Dia 22",
      "Dia 23",
      "Dia 24",
      "Dia 25",
      "Dia 26",
      "Dia 27",
      "Dia 28",
      "Dia 29",
      "Dia 30",
      "Dia 31"],
      datasets: [
        {
          label: "Produção Mensal (kg)",
          data: [260.000, 358.000, 150.000, 230.000, 245.000, 410.000, 320, 348.000, 199.000, 222.000, 310.000, 315.000, 320.000, 345.000, 336.000, 
            289.000, 300.000, 303.000, 785.000, 780.00, 410.000, 420.000, 450.000, 430.000, 480.000, 410.000, 430.000, 410.000, 470.000, 450.000
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
