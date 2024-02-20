import { Typography, useTheme } from "@mui/material";

import { stylesMui } from "./styles";

const TestTable = () => {
  const theme = useTheme();
  const data = [
    ["Syndicate Funded", "Phase 1", "Phase 2", "Funded"],
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
    <div className="flex justify-center overflow-x-auto">
      <table
        className={`w-[90vw] table-auto border border-white ${
          theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
        } bg-opacity-5`}
      >
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-white border-opacity-20 py-5 px-8 ${
                    cellIndex === 0 ? "text-left" : "text-center"
                  }`}
                  colSpan={
                    cellIndex === 3 && rowIndex === data.length - 1 ? 3 : 1
                  }
                >
                  {cell === "Phase 1" ||
                  cell === "Phase 2" ||
                  cell === "Funded" ? (
                    <div
                      className="bg-[#986AEB] text-white py-4 px-6 rounded"
                      style={{
                        minWidth: "100%",
                      }}
                    >
                      <Typography sx={stylesMui.testTableColumns}>
                        {cell}
                      </Typography>
                    </div>
                  ) : (
                    <Typography sx={stylesMui.testTableColumns}>
                      {cell}
                    </Typography>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
