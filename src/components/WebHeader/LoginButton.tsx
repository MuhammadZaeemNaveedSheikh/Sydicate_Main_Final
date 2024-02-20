import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/sign-up" route
    navigate("/web/login");
  };

  return (
    <Button
      color="inherit"
      onClick={handleClick} // Handle the click event
      sx={{
        py: { md: "0.25rem", xl: "0.75rem" },
        px: { md: "0.5rem", "2xl": "1.5rem" },
        borderRadius: "3rem",
        border: "1px solid #5B1CD4",
        background: "#000",
        boxShadow: "0px 0px 30px 0px #5B1CD4 inset",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          textTransform: "capitalize",
          color: theme.palette.mode === "light" ? "black" : "white",
        }}
      >
        Log In
      </Typography>
    </Button>
  );
};

export default LoginButton;
