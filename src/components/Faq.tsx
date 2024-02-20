import MainTitleComponent from "./MainTitleComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TextField, Typography, useTheme } from "@mui/material";

const Faq = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 mt-12">
      {" "}
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/CircleQuestionMarkIcon.svg"
          title="Help and feedback"
        />
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
            fontSize: { xs: 14, sm: 16 },
            color: "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="FAQs"
        />
        <Tab
          sx={{
            fontSize: { xs: 14, sm: 16 },
            color: "#646464",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Leave Feedback"
        />
      </Tabs>
      {value === 0 && (
        <div className="mt-9 ml-2 md:ml-8 bg-white bg-opacity-5 md:w-[600px] p-2 md:p-5">
          <Typography
            sx={{
              fontSize: 26,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Ask Question
          </Typography>
          <div className="w-full flex flex-col md:flex-row  items-start md:items-center md:justify-between gap-6 mt-3">
            <TextField
              placeholder="Search"
              size="small"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "80%" },
                "& .MuiOutlinedInput-root": {
                  color: theme.palette.mode === "light" ? "black" : "#646464",
                  border: "none",

                  borderColor: "none",
                  fontSize: 16,
                  fontFamily: "Montserrat",

                  height: 44,

                  "& fieldset": {
                    borderRadius: "10px",
                    color: "#646464",
                  },
                },

                "& input::placeholder": {
                  color: theme.palette.mode === "light" ? "black" : "#646464",

                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                },
              }}
              //   onChange={handleChange}
            />

            <button className=" bg-[#5B1CD4] text-white font-medium text-sm font-[Montserrat] cursor-pointer py-2 lg:py-3 w-full md:w-[20%] rounded-[6px]">
              Ask Question
            </button>
          </div>
        </div>
      )}
      {value === 1 && (
        <div className="mt-9 ml-2 md:ml-8 bg-white bg-opacity-5 md:w-[650px] p-2 md:p-5">
          <Typography sx={{ fontSize: 16, color: "#646464" }}>
            Ask Question
          </Typography>
          <div className="flex gap-3 flex-wrap md:flex-nowrap md:gap-6 mt-4">
            <div className="w-full md:w-1/3">
              <button className=" bg-[#5B1CD4] text-white font-medium text-xs font-[Montserrat] cursor-pointer py-3 lg:py-4 w-full rounded-[6px]">
                Suggest New Features
              </button>
            </div>
            <div className="w-full md:w-1/3  border rounded-md border-[#646464]">
              <button className=" bg-none text-[#646464] font-medium text-xs font-[Montserrat] cursor-pointer py-3 lg:py-4 w-full rounded-[6px]">
                Suggest Improvement
              </button>
            </div>
            <div className="w-full md:w-1/3 border rounded-md border-[#646464]">
              <button className=" bg-none text-[#646464] font-medium text-xs font-[Montserrat] cursor-pointer py-3 lg:py-4 w-full rounded-[6px]">
                Report A Bug
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
              <Typography sx={{ fontSize: 12, mt: 2, color: "#646464" }}>
                Subject
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.mode === "light" ? "black" : "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    height: 44,

                    "& fieldset": {
                      borderRadius: "10px",
                      color: "black",
                    },
                  },

                  "& input::placeholder": {
                    color: theme.palette.mode === "light" ? "black" : "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Typography sx={{ fontSize: 12, mt: 2, color: "#646464" }}>
                Message
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color:
                      theme.palette.mode === "light" ? "#646464" : "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    height: 44,

                    "& fieldset": {
                      borderRadius: "10px",
                      color: "black",
                    },
                  },

                  "& input::placeholder": {
                    color: theme.palette.mode === "light" ? "black" : "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className=" bg-[#5B1CD4] text-white font-medium text-xs font-[Montserrat] cursor-pointer py-3 px-8 lg:py-4 rounded-[6px]">
              Send Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
