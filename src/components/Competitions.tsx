import { Typography, Card, useTheme } from "@mui/material";
import MainTitleComponent from "./MainTitleComponent";
import ProfileIcon from "./ProfileIcon";
import CompetitionModal1 from "./CompetitionModal1";
import { useState } from "react";
import CompetitionModal from "./CompetitionModal";

interface Competition {
  month: string;
  prize: string;
  contestants: number;
  winner: string;
}
const Competitions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const theme = useTheme();
  const competitionData: Competition[] = [
    {
      month: "March",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "April",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "May",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "June",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "July",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "Sept",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "Oct",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "Nov",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
    {
      month: "Dec",
      prize: "$1,950 In cash prizes + Challenge accounts",
      contestants: 8644,
      winner: "Okkaynym",
    },
  ];
  return (
    <div className="mx-6 lg:mx-10 mt-8">
      <CompetitionModal handleClose={handleClose} open={open} />
      <CompetitionModal1 handleClose={handleClose1} open={open1} />
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/CompetitionsIcon.svg"
          title="Competitions"
        />
      </div>
      <Card
        onClick={() => handleOpen()}
        sx={{
          width: { xs: "100%", sm: 458 },
          bgcolor: "none",
          mt: 3,
          p: { xs: 2, sm: 3 },
          cursor: "pointer",
          border: "2px solid #5B1CD4",
          borderRadius: 4,
        }}
      >
        {" "}
        <div className="flex flex-col md:flex-row justify-between gap-y-4 items-start md:items-center">
          <div className="flex flex-row gap-3 items-center">
            <img src="/Icons/CompetitionsIcon.svg" />
            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
              variant="body1"
            >
              Dec Competition
            </Typography>
          </div>

          <Typography
            sx={{
              fontSize: 10,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
            variant="body1"
          >
            Ended
          </Typography>
        </div>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: 16, md: 21 },
            color: "#646464",
            mt: 2,
          }}
          variant="body1"
        >
          $1,950 In cash prizes + Challenge accounts
        </Typography>
        <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-3">
          <div className="flex flex-row gap-3 items-center">
            <ProfileIcon />
            <Typography
              sx={{
                fontSize: 14,
                color: "#646464",
              }}
              variant="body1"
            >
              8644 Contestants
            </Typography>
          </div>

          <Typography
            sx={{
              fontSize: 14,
              color: "#646464",
            }}
            variant="body1"
          >
            Winner:{" "}
            <span
              className={`text-${
                theme.palette.mode === "light" ? "black" : "white"
              }`}
            >
              Okkaynym
            </span>
          </Typography>
        </div>
      </Card>

      <div className="flex flex-wrap gap-6">
        {competitionData?.map((competition, index) => (
          <Card
            onClick={() => handleOpen1()}
            key={index}
            sx={{
              width: { xs: "100%", sm: 330, md: 341, xl: 370 },
              bgcolor: "transparent",
              mt: 3,
              cursor: "pointer",
              p: { xs: 2, sm: 3 },
              border: "1px solid transparent",
              borderRadius: "8px",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between gap-y-4 items-start md:items-center">
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="/Icons/CompetitionsIcon.svg"
                  width={32}
                  height={32}
                  alt="Competition Icon"
                />
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                  variant="body1"
                >
                  {competition.month} Competition
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: 8,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
                variant="body1"
              >
                Ended
              </Typography>
            </div>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 16,
                color: "#646464",
                mt: 2,
              }}
              variant="body1"
            >
              {competition.prize}
            </Typography>
            <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-3">
              <div className="flex flex-row gap-3 items-center">
                <ProfileIcon width="15" height="15" />
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#646464",
                  }}
                  variant="body1"
                >
                  {competition.contestants} Contestants
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#646464",
                }}
                variant="body1"
              >
                Winner:{" "}
                <span
                  className={`text-${
                    theme.palette.mode === "light" ? "black" : "white"
                  }`}
                >
                  {competition.winner}
                </span>
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
