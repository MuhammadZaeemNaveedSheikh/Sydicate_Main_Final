import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, useTheme } from "@mui/material";
import FinancialJourney from "./FinancialJourney";

import styles from "./styles.module.css";

interface BillingInfo {
  title: string;
  amount: string;
  targets: string[];
}

const BillingWeb = () => {
  const theme = useTheme();

  const data: BillingInfo[] = [
    {
      title: "Challenge 10k",
      amount: "$107",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
      ],
    },
    {
      title: "Challenge 25k",
      amount: "$207",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
      ],
    },
    {
      title: "Challenge 50k",
      amount: "$307",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
      ],
    },
    {
      title: "Challenge 100k",
      amount: "$507",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
      ],
    },
  ];

  return (
    <>
      <div className="mx-5 md:mx-12 xl:mx-32 mt-12 z-10">
        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "white",
              fontSize: 64,
            }}
          >
            Challenge Pricing
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}>
            Pick from a wide range of our programs, which are made to meet the
            needs of traders at every point of their journey.
          </Typography>
        </div>
        {/* featured challenge  */}
        <div className="w-full md:w-[450px] rounded bg-white bg-opacity-5 mx-auto text-center mt-12 z-10">
          <div className={styles["gradient-border"]}>
            <div className="bg-[#5B1CD4] h-10 lg:h-12 rounded-md">
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "white",
                  fontSize: { xs: 24, md: 30 },
                }}
              >
                Challenge 200k
              </Typography>
            </div>
            <div className="p-3 md:p-6">
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: 32, md: 59 },
                  mt: 3,
                }}
              >
                $997
              </Typography>
              <div className="flex items-center gap-3 mt-5">
                <DoneIcon sx={{ color: "white" }} />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 16,
                    mt: 1,
                  }}
                >
                  Profit target 12%
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <DoneIcon sx={{ color: "white" }} />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 16,
                    mt: 1,
                  }}
                >
                  Total Allowed Drawdown 8%
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <DoneIcon sx={{ color: "white" }} />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 16,
                    mt: 1,
                  }}
                >
                  Max Daily Loss 4%
                </Typography>
              </div>
              <button className=" bg-[#5B1CD4] text-white font-medium text-lg font-[Poppins] cursor-pointer w-full h-12 rounded-[6px] mt-8">
                Get started
              </button>
            </div>
          </div>
        </div>
        {/* other challenges  */}
        <div className="flex flex-wrap justify-center gap-9 mt-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-[309px] rounded ${
                theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
              } bg-opacity-5 p-3 md:p-6 text-center`}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#D6C3F8",
                  fontSize: { xs: 24, md: 30 },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                  fontSize: { xs: 28, md: 40 },
                  mt: 3,
                }}
              >
                {item.amount}
              </Typography>
              {item.targets.map((target, targetIndex) => (
                <div key={targetIndex} className="flex items-center gap-3 mt-5">
                  <DoneIcon sx={{ color: "#5B1CD4" }} />
                  <Typography
                    sx={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: 16,
                      mt: 1,
                    }}
                  >
                    {target}
                  </Typography>
                </div>
              ))}
              <button
                className="bg-none text-white font-medium text-lg font-[Poppins] cursor-pointer w-full h-12 rounded-[6px] mt-8"
                style={{ border: "1px solid white" }}
              >
                Get started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 30, md: 48 },
              mt: 8,
            }}
          >
            Frequently asked questions
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#646464",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            Can’t find the anwser you’re looking for ? Reach out to customer
            support team.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon />
          </div>
        </div>

        <div className="flex justify-between mx-6 md:mx-12 items-center p-4 flex-wrap mt-8 bg-white bg-opacity-5 rounded-xl">
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
        </div>
      </div>
      <FinancialJourney />
    </>
  );
};

export default BillingWeb;
