import { Box, Typography, useTheme, LinearProgress } from "@mui/material";
import Chart from "../Chart";
import QuestionMarkIcon from "../QuestionMarkIcon";

const OverviewTab = () => {
  const theme = useTheme();

  return (
    <>
      <div
        id="top-stat-cards"
        className="w-full flex flex-wrap gap-y-3 mt-3 justify-center md:justify-between"
      >
        <div className="h-[97px] shadow-lg bg-white bg-opacity-5 rounded-[10px] overflow-hidden p-6 w-[310px] sm:w-[350px] xl:w-[475px]">
          <div className="flex justify-between items-center pb-1">
            <Typography
              variant="body1"
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            >
              Net Profit/Loss
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#61FF00",
              }}
            >
              +12.4%
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: 18,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            $3,100
          </Typography>
        </div>
        <div className="h-[97px] shadow-lg bg-white bg-opacity-5 rounded-[10px] overflow-hidden p-6 w-[310px] sm:w-[350px] xl:w-[475px]">
          <div className="flex justify-between items-center pb-1">
            <Typography
              variant="body1"
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            >
              Target Profit
            </Typography>
            <Typography
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#61FF00",
              }}
            >
              6%
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: 18,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            $27,000.00
          </Typography>
        </div>
        <div className="h-[97px] shadow-lg bg-white bg-opacity-5 rounded-[10px] overflow-hidden p-6 w-[310px] sm:w-[350px] xl:w-[475px]">
          <div className="flex justify-between items-center pb-1">
            <div className="flex gap-2 items-center">
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Current Equity
              </Typography>
              <QuestionMarkIcon />
            </div>
            <Typography
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#61FF00",
              }}
              variant="body2"
            >
              6%
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: 18,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            $28,100
          </Typography>
        </div>
        <div className="h-[97px] shadow-lg bg-white bg-opacity-5 rounded-[10px] overflow-hidden p-6 w-[310px] sm:w-[350px] xl:w-[475px]">
          <div className="flex justify-between items-center pb-1">
            <div className="flex gap-2 items-center">
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Previous Balance
              </Typography>
              <QuestionMarkIcon />
            </div>
            <Typography
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#61FF00",
              }}
              variant="body2"
            >
              6%
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: 18,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            $25,000
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-4 justify-center md:justify-between">
        {/* Max Loss Limit  */}
        <div className="shadow-lg rounded-[10px] overflow-hidden p-6 md:w-[50%] bg-white bg-opacity-5">
          <div className="flex gap-2 items-center">
            <Typography
              variant="body1"
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            >
              Max Loss Limit
            </Typography>
            <QuestionMarkIcon />
          </div>
          <Box sx={{ width: "100%", my: 1 }}>
            <LinearProgress
              variant="determinate"
              value={25} // Set the progress value (0 to 100)
              sx={{
                ".MuiLinearProgress-bar": {
                  bgcolor: "#5B1CD4",
                },
              }}
            />
          </Box>

          <div className="flex flex-wrap justify-between items-start mt-4 gap-4 md:gap-8 ">
            <div className="flex flex-col gap-y-2 ">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Loss Level
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Balance Start Of Day
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
                }}
              >
                $24,578.2
              </Typography>
            </div>
          </div>
        </div>
        {/* Time Remaining  */}
        <div
          id="time-remaining"
          className="shadow-lg rounded-[10px] overflow-hidden p-6 md:w-[45%] bg-white bg-opacity-5"
        >
          <Typography
            variant="body1"
            sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
          >
            Time Remaining
          </Typography>

          <Typography sx={{ fontSize: 12, color: "#646464", mt: 1 }}>
            Daily Drawdown Reset Time
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
            }}
          >
            No Time Restriction
          </Typography>
        </div>
      </div>
      <div className="h-[362px] mt-6">
        <Chart />
      </div>
    </>
  );
};

export default OverviewTab;
