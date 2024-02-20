// import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material";
import { useState } from "react";
import OverviewTab from "./StatisticsTabs/OverviewTab";

import SystemTab from "./StatisticsTabs/SystemTab";
import Dropdown from "./Dropdown/Dropdown";
import Accounts from "./StatisticsTabs/Accounts";
import Orders from "./StatisticsTabs/Orders";

import Positions from "./StatisticsTabs/Positions";
const Statistics = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="my-16 sm:my-[0px] sm:m-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 my-8">
        <div className="flex gap-6 items-center">
          <Dropdown />
        </div>

        {value === 0 && (
          <div className="flex flex-wrap lg:flex-row gap-6 items-center px-4 sm:px-[0px]">
            <button
              className="bg-[#0B0919] text-[#DEDEDE] cursor-pointer h-[40px] w-[130px] md:w-[90px] xl:h-[54px] lg:w-[90px] xl:w-[150px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid #DEDEDE" }}
            >
              Withdrawal
            </button>
            <button
              className={`bg-[#61FF00] bg-opacity-60 ${
                theme.palette.mode === "light" ? "text-black" : "text-white"
              } cursor-pointer font-medium font-[Montserrat] text-sm xl:text-lg h-[40px] w-[134px] md:w-[90px] lg:w-[90px] xl:h-[54px] xl:w-[134px] rounded-md`}
            >
              Passed
            </button>
            <button
              className="bg-[#0B0919] text-[#DEDEDE] cursor-pointer h-[40px] w-[120px] md:w-[90px] lg:w-[95px] xl:h-[54px] xl:w-[134px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid #DEDEDE" }}
            >
              Credentials
            </button>
          </div>
        )}
        {(value === 1 || value === 2 || value === 3 || value === 4) && (
          <div className="flex flex-wrap lg:flex-row gap-6 items-center px-4 sm:px-[0px]">
            <button className="bg-[#FF0000] bg-opacity-60 text-white cursor-pointer font-medium font-[Montserrat] text-sm xl:text-lg h-[40px] w-[120px] xl:h-[54px] xl:w-[134px] rounded-md">
              Failed
            </button>
            <button
              className="bg-[#0B0919] text-[#DEDEDE] cursor-pointer h-[40px] w-[120px] lg:w-[95px] xl:h-[54px] xl:w-[160px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid #DEDEDE" }}
            >
              Credentials
            </button>
          </div>
        )}
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          fontFamily: "Montserrat",
          "& button:focus": {
            color: theme.palette.mode === "light" ? "black" : "white",
          },

          "& .MuiTab-root.Mui-selected": {
            color: theme.palette.mode === "light" ? "black" : "white",
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            fontFamily: "Montserrat",
          },
        }}
        TabIndicatorProps={{
          sx: { bgcolor: theme.palette.mode === "light" ? "black" : "white" },
        }}
      >
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Overviews"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Daily Returns"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Closed Trades"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Positions"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Orders"
        />
      </Tabs>
      {value === 0 && (
        <div className="mt-9 p-4 md:p-0">
          <OverviewTab />
        </div>
      )}
      {value === 1 && (
        <div className="mt-9">
          <SystemTab />
        </div>
      )}
      {value === 2 && (
        <div className="mt-9">
          <Accounts />
        </div>
      )}
      {value === 3 && (
        <div className="mt-9">
          {" "}
          <Positions />{" "}
        </div>
      )}
      {value === 4 && (
        <div className="mt-9">
          <Orders />
        </div>
      )}
    </div>
  );
};

export default Statistics;
