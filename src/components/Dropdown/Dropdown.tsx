import { InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = () => {
  const theme = useTheme();
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  return (
    <>
      <img src="/Icons/IconPark.svg" alt="" />
      <Select
        IconComponent={() => (
          <ExpandMoreIcon
            fontSize="small"
            sx={{ color: theme.palette.mode === "light" ? "black" : "#DEDEDE" }}
          />
        )}
        // name={name}
        // value={value}
        // onChange={onChange}
        displayEmpty
        sx={{
          backgroundColor: "none",
          width: { xs: 230, lg: 310 },
          height: { xs: 40, lg: 52 },
          borderRadius: "6px",

          "& .MuiOutlinedInput-input": {
            fontSize: "18px",
            fontFamily: "Montserrat",
            fontWeight: 400,
            color: theme.palette.mode === "light" ? "black" : "#dedede",
            borderColor: "#DEDEDE",
          },

          "& .MuiSelect-icon": {
            fontSize: 32,
          },
        }}
      >
        <InputLabel
          sx={{
            "& .MuiInputLabel-rootcolor": {
              color: theme.palette.mode === "light" ? "black" : "#DEDEDE",

              fontWeight: 400,
              fontSize: 10,
            },
          }}
          htmlFor="select-placeholder"
        >
          Account 568761
        </InputLabel>
        {options.map((option) => (
          <MenuItem
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "#DEDEDE",
              border: "1px solid #E2E5E7",

              "&:hover": {
                bgcolor: theme.palette.mode === "light" ? "white" : "#061D39",
                color: theme.palette.mode === "light" ? "black" : "#DEDEDE",
              },

              "&.Mui-selected, &.Mui-selected:hover": {
                bgcolor: theme.palette.mode === "light" ? "white" : "#061D39",
                color: theme.palette.mode === "light" ? "black" : "#DEDEDE",
              },
            }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
