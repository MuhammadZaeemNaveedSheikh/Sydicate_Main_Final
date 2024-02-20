import { Typography, useTheme } from "@mui/material";
import MainTitleComponent from "./MainTitleComponent";
import FullTick from "./FullTick.tsx";

const Certificates = () => {
  const theme = useTheme();
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent title="Certificates" />
      </div>
      <div
        className={`flex ${
          theme.palette.mode === "light"
            ? "bg-black bg-opacity-10"
            : "bg-white bg-opacity-5"
        } items-start gap-3 mx-8 mt-8 p-3 md:p-6 w-60 md:w-96 rounded-[10px]`}
      >
        <div className="flex items-center pt-2">
          <FullTick />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Passing Certificate
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 20 },
              color: "#646464",
              fontWeight: 400,
              mt: 1,
            }}
          >
            No Passing Certificates
          </Typography>
        </div>
      </div>
      <div
        className={`flex gap-3 ${
          theme.palette.mode === "light"
            ? "bg-black bg-opacity-10"
            : "bg-white bg-opacity-5"
        } p-3 md:p-6 w-60 md:w-96 rounded-[10px] items-start mt-12 mx-8`}
      >
        {/* <img className="mt-2" src="/Icons/FullTickIcon.svg" /> */}
        <div className="flex items-center pt-2">
          {" "}
          <FullTick />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Payout Certificates
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 20 },
              color: "#646464",
              fontWeight: 400,
              mt: 1,
            }}
          >
            No Payout Certificates
          </Typography>
        </div>
      </div>
      <div
        className={`p-3 md:p-6 mt-8 w-full md:w-[40%] rounded-[10px] ${
          theme.palette.mode === "light"
            ? "bg-black bg-opacity-10"
            : "bg-white bg-opacity-5"
        }`}
      >
        <div className={`flex justify-between  items-center  `}>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 26 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Purchase a Physical Copy
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 26 },
              color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
            }}
          >
            $0.00
          </Typography>
        </div>
        <button className="font-[Montserrat] text-xs font-medium text-white w-full h-10 bg-[#5B1CD4] mt-5 rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Certificates;
