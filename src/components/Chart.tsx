import { Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  // Define the chart options
  options: {
    dataLabels: {
      enabled: boolean;
    };
    chart: {
      type: string;
      height?: number; // Make height optional
      stacked?: boolean;
      toolbar?: {
        show?: boolean;
      };
      zoom?: {
        enabled?: boolean;
      };
    };
    xaxis: {
      type: string;
      categories: string[];
      labels: {
        style: {
          colors: string;
        };
      };
    };
    yaxis;

    responsive?: Array<{
      breakpoint: number;
      options: {
        legend?: {
          show: boolean;
          position?: string;
          offsetX?: number;
          offsetY?: number;
        };
      };
    }>;
    plotOptions?: {
      bar?: {
        columnWidth: string;
        horizontal?: boolean;
        borderRadius?: number;
        dataLabels?: {
          total?: {
            enabled?: boolean;
            style?: {
              fontSize?: string;
              fontWeight?: number;
            };
          };
        };
      };
    };
    legend?: {
      position?: string;
      offsetY?: number;
    };
    grid?: {
      show: boolean;
    };

    fill?: {
      opacity?: number;
    };
  };

  // Define the series data
  series: {
    name: string;
    data: number[];
    color?: string;
  }[];
}

const Chart: React.FC = () => {
  const theme = useTheme();
  const options: ChartProps["options"] = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "60%",
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#000000" : "#ffffff",
        },
      },
      // Set x-axis type to category
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
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#000000" : "#ffffff",
        },
      },
    },
    legend: {
      position: "top",
      offsetY: 5,
    },
    grid: {
      show: false, // Hide both vertical and horizontal grid lines
    },
    fill: {
      opacity: 1,
    }
  };

  const series: ChartProps["series"] = [
    {
      name: "Equity",
      data: [12, 3, 41, 21, 10, 12, 32, 22, 31, 20, 5, 30],
      color: "#5B1CD4",
    },
    {
      name: "Balance",
      data: [13, 23, 20, 8, 13, 23, 20, 8, 13, 23, 20, 8],
      color: "#986AEB",
    },
    {
      name: "HIgh Watermark",
      data: [11, 17, 5, 15, 11, 17, 15, 15, 11, 17, 15, 15],
      color: "#D6C3F8",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width in the state
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); 

  return (
    <>
      <div className="bg-none">
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Trading Growth Curve
        </Typography>
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={series}
          type="bar"
          height={windowWidth<=1900 ? 300:600}
        />
      </div>
    </>
  );
};

export default Chart;
