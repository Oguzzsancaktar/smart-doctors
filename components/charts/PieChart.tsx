import React from "react";
import dynamic from "next/dynamic";

import { ApexOptions } from "apexcharts";
import { themeColors } from "../../constants";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const chartSeries = [160, 25, 15];
  const pieChartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["General Examination", "OP", "Other"],
    colors: [themeColors.matisse, themeColors.regentStBlue, themeColors.feijoa],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "75%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: "2.2rem",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "4.1rem",
              fontFamily: "Ubuntu-Bold",
              fontWeight: 400,
              offsetY: 16,
              color: themeColors.matisse,
              formatter: function (val) {
                const total = chartSeries.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                return ((+val / total) * 100).toFixed() + "%";
              },
            },
            total: {
              show: false,
              showAlways: false,
              label: "Total",
              fontSize: "2.2rem",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#373d3f",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "1.4rem",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 2,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="pieChart" className="h-full">
      <Chart
        height={"100%"}
        width={"100%"}
        options={pieChartOptions}
        series={chartSeries}
        type="donut"
      />
    </div>
  );
};

export default PieChart;
