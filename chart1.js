var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
    
      {
        label: "Resumo de Vendas",
        data: [
          10000, 34000, 58000, 74000, 86000, 70000, 64000, 57000, 73000, 78000, 89000,
          100000,
        ],
        backgroundColor: "rgba(29,179,211)",
        borderColor: "rgba(29,179,211)",
        borderWidth: 1,
      },
    
    ],
  },
  options: {
    responsive: true,
  },
});
