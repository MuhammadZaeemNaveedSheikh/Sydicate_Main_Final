import { Button, Typography, useTheme } from "@mui/material";

import CtaRightIcon from "../../assets/icons/CtaRightIcon";

import { stylesMui } from "./styles";

const GetFunded = () => {
  const theme = useTheme();
  return (
    <div
      className={`w-full py-11 flex flex-col justify-center items-center rounded-3xl ${
        theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
      } bg-opacity-5`}
    >
      <Typography sx={{ ...stylesMui.footerTitle, mb: "1.5rem" }}>
        Get Funded Up to <br />
        $200,000
      </Typography>
      <Typography sx={{ ...stylesMui.footerSubtitle, mb: "2.5rem" }}>
        $0 Commissions on all trades at all time!
      </Typography>
      <Button
        sx={{
          display: "flex",
          padding: "1rem 1.5rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.625rem",
          backgroundColor: "#5B1CD4 !important",
          color: "#fff",
          borderRadius: "0.5rem",
        }}
      >
        <Typography variant="body1" sx={stylesMui.ctaButtonText}>
          Get Funded
        </Typography>
        <CtaRightIcon />
      </Button>
    </div>
  );
};

export default GetFunded;
