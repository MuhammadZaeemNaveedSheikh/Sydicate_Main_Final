import { Typography, useTheme } from "@mui/material";
import SystemBarChart from "../SystemBarChart";

const SystemTab = () => {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full xl:w-[40%] bg-white bg-opacity-5 p-3 md:p-6 rounded-[8px]">
          <Typography
            sx={{
              fontSize: 22,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Daily Returns
          </Typography>
          <SystemBarChart />
        </div>
        <div
          className={`w-full xl:w-[60%] p-3 md:p-6 rounded-[8px] ${
            theme.palette.mode === "light"
              ? "bg-white bg-opacity-10"
              : "bg-white bg-opacity-5"
          }`}
        >
          <Typography
            sx={{
              fontSize: 22,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Daily Summary
          </Typography>

          <div className="relative overflow-x-auto mt-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-none ">
                <tr className=" border-b border-[#646464] dark:border-gray-700">
                  <th scope="col" className="py-3">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      Date
                    </Typography>
                  </th>
                  <th scope="col" className="py-3">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      Trades
                    </Typography>
                  </th>
                  <th scope="col" className="py-3">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      Lots
                    </Typography>
                  </th>
                  <th scope="col" className="py-3">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      Results
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b border-[#646464] dark:border-gray-700">
                  <td className="py-4">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      20-08
                    </Typography>
                  </td>
                  <td className="py-4">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      0.00
                    </Typography>
                  </td>
                  <td className="py-4">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      0.00
                    </Typography>
                  </td>
                  <td className="py-4">
                    <Typography
                      sx={{
                        fontSize: 16,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
                        textTransform: "capitalize",
                      }}
                    >
                      $0.00
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemTab;
