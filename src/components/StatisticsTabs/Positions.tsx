import { Typography, useTheme } from "@mui/material";
import BarChart1 from "../BarChart1";
import BarChart2 from "../BarChart2";

// interface Statistic {
//   label: string;
//   value: string | number;
// }
const Positions = () => {
  const theme = useTheme();
  // const statistics: Statistic[] = [
  //   { label: "Best Trades", value: "$1285.65" },
  //   { label: "Worst Trade", value: "$1285.65" },
  //   { label: "No Of Trades", value: 285 },
  //   { label: "Lots", value: 498 },
  //   { label: "Win Rate", value: "56.67%" },
  // ];

  // const statistics1: Statistic[] = [
  //   { label: "Avg Trades", value: "$1285.65" },
  //   { label: "Average Loss", value: "$1285.65" },
  //   { label: "Average RRR", value: 285 },
  //   { label: "Recorded Drawdown", value: 498 },
  //   { label: "Profit Fac", value: "56.67%" },
  // ];
  return (
    <div>
      <div
        className={`${
          theme.palette.mode === "light"
            ? "bg-gray-100 "
            : "bg-white bg-opacity-5"
        } p-3 rounded-xl md:p-6`}
      >
        <div className="flex flex-wrap justify-start items-start gap-4 lg:gap-[0px] lg:justify-between ">
          {/* {statistics.map((statistic, index) => ( */}
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              Best Trades
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}$1285.65
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              Worst Trade
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}-$1285.65
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              No Of Trades
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}285
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              Lots
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}498
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              Win Rate
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}56.67%
            </Typography>
          </div>
          {/* ))} */}
        </div>
        <div className="border-t border-solid border-white border-opacity-20 w-full my-6"></div>
        <div className="flex flex-wrap justify-start items-start gap-4 lg:gap-[0px] lg:justify-between">
          {/* {statistics.map((statistic, index) => ( */}
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              {/* {statistic.label} */}
              Avg Wins
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}$1285.65
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              Average Loss
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              -$1285.65
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              Average RRR
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}285
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              Recorded Drawdown
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}498
            </Typography>
          </div>

          <img src="/Icons/verticalLine.svg" />
          <div className="flex flex-col gap-y-2">
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                color: "#646464",
              }}
            >
              Profit Fac
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {/* {statistic.value} */}56.67%
            </Typography>
          </div>
          {/* ))} */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-6">
        <div className="w-full md:w-1/2">
          <BarChart1 />
        </div>
        <div className="w-full md:w-1/2">
          {" "}
          <BarChart2 />
        </div>
      </div>
    </div>
  );
};

export default Positions;
