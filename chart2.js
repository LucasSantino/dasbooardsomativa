var ctx2 = document.getElementById("doughnut").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Café Torrado", "Café Torrado em Grãos", "Café Estantaneo", "Capsulas de Café Expresso"],

    datasets: [
      {
        label: "Produção (Proporção)",
        data: [27350, 22900, 4450, 2548],
        backgroundColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(250, 127, 114)",
          "rgba(100,52,240)",
          "rgba(31,144,229)",
        ],
        borderColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
