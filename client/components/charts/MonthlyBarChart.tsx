import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
import { themeColors } from "../../constants";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyBarChart = () => {
  const chartSeries = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const barChartOptions: ApexOptions = {
    colors: [themeColors.matisse],
    chart: {
      height: "100%",
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "bottom", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toString();
      },
      offsetY: 0,
      style: {
        fontSize: "12px",
        colors: [themeColors.white],
      },
    },

    xaxis: {
      categories: [
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
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val.toString();
        },
      },
    },
  };

  return (
    <div id="barChart" className="h-full">
      <Chart
        height={"100%"}
        width={"100%"}
        options={barChartOptions}
        series={chartSeries}
        type="bar"
      />
    </div>
  );
};

export default MonthlyBarChart;
