import { Typography, useTheme } from "@mui/material";

import { AuthLogin } from "../AuthForms";

import { stylesMui } from "./styles";

const LoginComponent = () => {
  const theme = useTheme();

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="mb-7 lg:mb-11">
        <Typography
          sx={{
            ...stylesMui.headingPage,
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Log In
        </Typography>
      </div>
      <div className="w-full md:[60%] lg:w-[45%] xl:w-[35%] p-8 md:py-[2.88rem] lg:px-20 xl:px-[6rem] flex flex-col justify-between bg-white bg-opacity-5 rounded-3xl">
        <div className="w-full mb-4 lg:mb-9">
          <Typography
            sx={{
              ...stylesMui.headingForm,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Log In
          </Typography>
        </div>
        <AuthLogin />
      </div>
    </section>
  );
};

export default LoginComponent;
