import { Typography, useTheme } from "@mui/material";

import QuestionMarkIcon from "./QuestionMarkIcon";

interface Competition {
  Image?: string;
  title?: string;
  rules?: boolean;
}

const MainTitleComponent: React.FC<Competition> = ({
  title,
  Image,
  rules = true,
}) => {
  const theme = useTheme();
  return (
    <>
      {" "}
      <div className="flex flex-row gap-3 items-center">
        <img src={Image} />
        <Typography
          sx={{
            fontSize: { xs: 20, md: 34 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
          variant="body1"
        >
          {title}
        </Typography>
      </div>
      {rules && (
        <div className="flex gap-4 items-center">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 14,
              color: theme.palette.mode === "light" ? "black" : "#dedede",
            }}
            variant="body1"
          >
            Account Rules
          </Typography>
          <div className="text-lg cursor-pointer">
            <QuestionMarkIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default MainTitleComponent;
