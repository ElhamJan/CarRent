import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { topRentalCars } from "../assets/data/topRentalCars";

const DounutChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    labels: topRentalCars.map((tr) => {
      return tr.type;
    }),
    datasets: [
      {
        label: "Rental car",
        data: topRentalCars.map((tr) => {
          return tr.rentalTime;
        }),
        backgroundColor: [
          "#0d3559",
          "#175D9C",
          "#2185DE",
          "#63A9E8",
          "#A6CEF2",
        ],
        borderColor: ["#0d3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, arcs, pluginOptions) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = "bolder 30px";
      ctx.fillStyle = "#596780";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText("Rental car", xCoor, yCoor + 15);

      ctx.font = "18px";
      ctx.fillStyle = "#eee";
      ctx.fillText("Rental car", xCoor, yCoor - 10);
    },
  };

  return (
    <div
      style={{ width: "100%", height: "100%", margin: "auto", padding: "10px" }}
    >
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[textCenter]}
      />
    </div>
  );
};

export default DounutChart;
