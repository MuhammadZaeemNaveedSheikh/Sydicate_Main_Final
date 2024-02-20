import { Typography, useTheme } from "@mui/material";

import JourneyTopLeft from "../assets/images/JourneyTopLeft.png";

const FinancialJourney = () => {
  const theme = useTheme();
  return (
    <div
      className={`relative mx-3 md:mx-8 xl:mx-20 mt-12 ${
        theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
      } bg-opacity-5 rounded-[20px] text-center p-4 md:p-8`}
    >
      {theme.palette.mode === "dark" ? (
        <div className="absolute top-0 left-0">
          <img src={JourneyTopLeft} width="100%" height="100%" />
        </div>
      ) : null}
      <Typography
        sx={{
          fontWeight: 600,
          color: theme.palette.mode === "light" ? "black" : "white",
          fontSize: { xs: 20, lg: 40 },
        }}
      >
        Start your financial journey with{" "}
        <span className="text-[#5B1CD4]">
          {" "}
          Syndicate <br /> Funded today!
        </span>
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontFamily: "Poppins",
          fontSize: 18,
          color: theme.palette.mode === "light" ? "black" : "white",
          px: { xs: 1, lg: 14 },
          mt: 2,
        }}
      >
        Ready to take control of your finances? Join Syndicate now, and let us
        help you achieve your financial goals with our tailored solutions and
        exceptional customer service
      </Typography>
      <button className=" bg-[#5B1CD4] text-white font-medium text-lg font-[Poppins] cursor-pointer  px-5 py-3 rounded-[82px] mt-8">
        Open Account
      </button>
    </div>
  );
};

export default FinancialJourney;
