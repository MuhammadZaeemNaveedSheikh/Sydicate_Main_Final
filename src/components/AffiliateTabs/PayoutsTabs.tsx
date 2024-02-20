import { Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Order {
  id: number;
  name: string;
  data: string;
}
const PayoutsTabs = () => {
  const theme = useTheme();
  const orders: Order[] = [
    { id: 1, name: "Order Number", data: "232760" },
    { id: 2, name: "Created At", data: "1 Aug, 2023" },
    { id: 3, name: "Price", data: "$332" },
    { id: 4, name: "Status", data: "status" },
    { id: 5, name: "Details", data: "?" },

    // Add more orders as needed
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-12 gap-3 sm:gap-6 xl:gap-10">
        <div
          className={`w-full lg:w-[20%] flex flex-col justify-between ${
            theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
          } bg-opacity-5 p-2 md:p-4 xl:p-6`}
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

        <div className="w-full lg:w-[80%] flex flex-col gap-6">
          <div
            className={` ${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5 p-2 md:p-4`}
          >
            <div className="flex flex-col md:flex-row justify-between gap-3 xl:gap-[0px]">
              <div className="w-full xl:w-[40%]">
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  Total payouts
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                    mt: { xs: 1, md: 2 },
                  }}
                >
                  $0.00
                </Typography>
              </div>
              <div className="w-full xl:w-[40%]">
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  Last payout
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 26 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                    mt: { xs: 1, md: 2 },
                  }}
                >
                  $0.00
                </Typography>
              </div>
            </div>
          </div>

          <div
            className={`${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5 p-2 md:p-4`}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 20 },
                color: theme.palette.mode === "light" ? "black" : "#dedede",
              }}
            >
              Time Remaining
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                color: theme.palette.mode === "light" ? "black" : "#646464",
                mt: 1,
              }}
            >
              $100 minimum required withdrawal
            </Typography>
            <div className="flex flex-wrap justify-between items-center">
              {" "}
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20 },
                  color: "white",
                  mt: 2,
                }}
              >
                48 hours
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20 },
                  color: "white",
                  mt: 2,
                }}
              >
                98 Mins
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20 },
                  color: "white",
                  mt: 2,
                }}
              >
                120 Secs
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` ${
          theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
        } bg-opacity-5 p-3 md:p-6 mt-6 md:mt-12`}
      >
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 26 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Payouts
        </Typography>
        <div className="flex justify-between flex-wrap mt-6 gap-y-6">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col gap-x-6 gap-y-3">
              <div className="flex flex-row items-center gap-x-4 gap-y-6">
                <Typography
                  sx={{
                    fontSize: 16,
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  {order.name}
                </Typography>
                <ExpandMoreIcon fontSize="small" sx={{ color: "#ffffff" }} />
              </div>
              <Typography
                sx={{
                  fontSize: 16,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                {" "}
                {order.data}
              </Typography>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
              mt: 4,
            }}
          >
            Showing 1 to 1 of 1 entries
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
              mt: 4,
            }}
          >
            1
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PayoutsTabs;
