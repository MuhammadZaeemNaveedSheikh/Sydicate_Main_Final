import { Typography, useTheme } from "@mui/material";

import { stylesMui } from "./styles";

const TestTable = () => {
  const theme = useTheme();
  const data = [
    [" ", "Phase 1", "Phase 2", "Funded"],
    ["Max Trading Days", "Unlimited", "Unlimited", "N/A"],
    ["Virtual Profit Target", "8%", "8%", "8%"],
    ["Virtual Performance Fee", "N/A", "N/A", "80%"],
    ["Max Drawdown", "8% ($ Value)", "8%", "8%"],
    ["Max Daily Drawdown", "4%", "4%", "4%"],
    ["Max Virtual Capital Growth", "$2,000,000", "$2,000,000", "$2,000,000"],
    ["Minimum Trading Days", "N/A", "N/A", "N/A"],
    ["0% Commission", "YES", "YES", "YES"],
    ["Trade Through News", "NO", "NO", "NO"],
    ["Hold Over The Weekend", "YES", "YES", "YES"],
    ["Account Price", "$699", "$799", "$999"],
  ];

  return (
    <div className={`w-full md:w-11/12 border border-white border-opacity-10 ${
      theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
    } bg-opacity-5 rounded-xl py-8 px-2 md:px-10 overflow-x-auto`}>
    <table
      className="w-full table-auto"
    >
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-white border-opacity-10 last:border-b-0">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`py-5 px-3 ${
                  cellIndex === 0 ? "text-left" : "text-center"
                }`}
              >
                {cell === "Phase 1" ||
                cell === "Phase 2" ||
                cell === "Funded" ? (
                  <div
                    className="bg-[#986AEB] text-white py-4 px-6 rounded !min-w-[120px]"
                    style={{
                      minWidth: "100%",
                    }}
                  >
                    <Typography
                      sx={stylesMui.testTableColumns}
                      className="text-base"
                    >
                      {cell}
                    </Typography>
                  </div>
                ) : (
                  <Typography
                    sx={stylesMui.testTableColumns}
                    className="text-base"
                  >
                    {cell}
                  </Typography>
                )}
              </td>
            ))}
          </tr>
        ))}
    </table>
    </div>
  );
};

export default TestTable;
