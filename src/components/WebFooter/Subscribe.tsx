import { Button, TextField, Typography } from "@mui/material";

import { stylesMui } from "./styles";

const Subscribe = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 lg:gap-0 flex-wrap lg:flex-nowrap">
      <TextField
        fullWidth
        placeholder="Your email address"
        sx={stylesMui.emailInput}
        inputProps={{
          style: {
            height: "0.75rem",
          },
        }}
      />
      <Button
        color="secondary"
        sx={{
          py: { md: "0.25rem", xl: "0.7rem" },
          px: { md: "0.5rem", lg: "1.1rem", xl: "1.38rem" },
          borderRadius: "0 0.75rem 0.75rem 0",
          backgroundColor: "#5B1CD4 !important",
        }}
        className="w-full h-[45px] rounded-[8px] lg:rounded-none lg:rounded-r-[8px] lg:max-w-[130px]"
      >
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Subscribe
        </Typography>
      </Button>
    </div>
  );
};

export default Subscribe;
