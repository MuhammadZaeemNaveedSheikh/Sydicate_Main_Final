import { FormControl, TextField, Typography, useTheme } from "@mui/material";

const DashboardTab = () => {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-12 lg:mx-6 mt-12">
        <div
          className={`w-full md:w-[60%] ${
            theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
          } bg-opacity-5 p-3 md:p-6 rounded-[10px]`}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Your Unique Link
          </Typography>

          <div className="flex flex-row gap-4 mt-4">
            <FormControl fullWidth>
              <TextField
                placeholder="link"
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.mode === "light" ? "black" : "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    // height: 44,

                    "& fieldset": {
                      borderRadius: "6px",
                    },
                  },

                  "& input::placeholder": {
                    color: theme.palette.mode === "light" ? "black" : "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
                //   onChange={handleChange}
              />
            </FormControl>

            <button className=" bg-[#5B1CD4] text-white font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
              COPY
            </button>
          </div>
        </div>
        <div
          className={`w-full md:w-[40%] ${
            theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
          } bg-opacity-5 p-3 md:p-6 rounded-[10px]`}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Your Unique Code
          </Typography>

          <div className="flex flex-row gap-4 mt-4">
            <FormControl fullWidth>
              <TextField
                placeholder="exotic"
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.mode === "light" ? "black" : "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    // height: 44,

                    "& fieldset": {
                      borderRadius: "6px",
                    },
                  },

                  "& input::placeholder": {
                    color: theme.palette.mode === "light" ? "black" : "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
                //   onChange={handleChange}
              />
            </FormControl>

            <button className=" bg-[#5B1CD4] text-white font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
              COPY
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6 p-3 md:p-8">
        <div
          className={`w-full lg:w-[22%] flex flex-col justify-between ${
            theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
          } bg-opacity-5 p-2 md:p-4`}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26, mt: 2 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Request Payout
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16 },
              color: "#646464",
              mt: 4,
            }}
          >
            Available for payout
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 26 },
              color: "#D6C3F8",
              mt: 3,
            }}
          >
            $0.00
          </Typography>
          <button className=" bg-[#5B1CD4] text-white font-medium text-sm font-[Montserrat] cursor-pointer w-full py-3 rounded-md mt-6">
            Request Payout
          </button>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 10 },
              color: "#646464",
              mt: 1,
            }}
          >
            $100 minimum required withdrawal
          </Typography>
        </div>
        <div className="w-full flex flex-col md:w-1/2 lg:w-[78%] gap-6">
          <div
            className={`${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5 p-3 md:p-6`}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 26 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Your Level:
            </Typography>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col gap-2">
                <Typography
                  sx={{
                    fontSize: { xs: 9, md: 10 },
                    color: "#646464",
                  }}
                >
                  Current commission
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  10%
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography
                  sx={{
                    fontSize: { xs: 9, md: 10 },
                    color: "#646464",
                  }}
                >
                  Current commission
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  15%
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography
                  sx={{
                    fontSize: { xs: 9, md: 10 },
                    color: "#646464",
                  }}
                >
                  Next Commission
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  20%
                </Typography>
              </div>
            </div>
          </div>
          <div
            className={`${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5 p-3 md:p-6`}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 26 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Info
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: "#646464",
                mt: 1,
              }}
            >
              You will receive 8% of all purchases that are made through your
              affiliate link once you have a total of $100, you can request a
              payout by clicking on the REQUEST PAYOUT button below
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTab;
