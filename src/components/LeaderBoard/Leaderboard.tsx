import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import MainTitleComponent from "../MainTitleComponent";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import Leaderboardtable from "./Leaderboardtable";
import Pagination from "../Pagination";

const Leaderboard = () => {
  const theme = useTheme();
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  return (
    <>
      <div className="mx-6 lg:mx-10 mt-8">
        <div className="flex flex-col md:flex-row justify-between gap-y-4">
          <MainTitleComponent
            Image="/Icons/CompetitionsIcon.svg"
            title="LeaderBoards"
            rules={false}
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
          <div className="flex flex-wrap gap-3 items-center">
            <button className=" bg-none text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>

            {/* <button className=" bg-[#5B1CD4] text-white font-normal text-sm font-[Montserrat] cursor-pointer  px-4 py-[9px] rounded-[4px]">
              Sign Up
            </button> */}
          </div>
          <div className="flex flex-row justify-between items-center gap-x-3 gap-y-6">
            <button
              //   onClick={handleAddOpen}
              className=" bg-black text-white cursor-pointer  p-[0.75rem] rounded-md"
            >
              <div className="flex items-center gap-x-1">
                <AddIcon sx={{ color: "white", fontSize: 20 }} />
                <div className="font-normal font-[Montserrat] text-white text-sm">
                  New
                </div>
              </div>
            </button>
            <FormControl>
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "none",
                  width: 180,
                  height: 40,
                  borderRadius: "6px",

                  "& .MuiOutlinedInput-input": {
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    color: theme.palette.mode === "light" ? "black" : "#dedede",
                    borderColor: "#DEDEDE",
                    border: "none",
                  },

                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      width={35}
                      height={35}
                      src="../../Icons/WhiteDateIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">Date</InputLabel>
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 16,
                      color:
                        theme.palette.mode === "light" ? "black" : "#DEDEDE",
                      border: "1px solid #E2E5E7",

                      "&:hover": {
                        bgcolor:
                          theme.palette.mode === "light" ? "white" : "#061D39",
                        color:
                          theme.palette.mode === "light" ? "black" : "#DEDEDE",
                      },

                      "&.Mui-selected, &.Mui-selected:hover": {
                        bgcolor:
                          theme.palette.mode === "light" ? "white" : "#061D39",
                        color:
                          theme.palette.mode === "light" ? "black" : "#DEDEDE",
                      },
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          className={`p-3 md:p-6 rounded-[8px] mt-6 ${
            theme.palette.mode === "light"
              ? "bg-black bg-opacity-10"
              : "bg-white bg-opacity-5"
          }`}
        >
          <Leaderboardtable />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Leaderboard;
