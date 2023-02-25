import Chart from "react-apexcharts";
import { topRentalCars } from "../assets/data/topRentalCars";

import "../styles/dounut-chart.css";

const DounutChart = () => {
  const options = {
    chart: {
      width: "100%",
      hight: "auto",
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlwayes: true,
            },
          },
        },
      },
    },
    labels: topRentalCars.map((tr) => {
      return tr.type;
    }),
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
    },
    colors: ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
    legend: {
      formatter: function (label, opts) {
        return label + "-" + opts.w.globals.series[opts.seriesIndex];
      },
      horizontalAlign: "left",
    },
    responsive: [
      {
        breakpoint: 2000,
        options: {
          legend: {
            position: "bottom",
          },
          chart: {
            height: 400,
          },
        },
      },
    ],
  };

  const series = topRentalCars.map((tr) => {
    return tr.rentalTime;
  });

  return <Chart options={options} series={series} type="donut" />;
};

export default DounutChart;
