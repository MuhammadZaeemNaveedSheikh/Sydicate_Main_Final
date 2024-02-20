import { Card, Typography, useTheme } from "@mui/material";
import QuestionMarkIcon from "./QuestionMarkIcon";
import DoneIcon from "@mui/icons-material/Done";

import styles from "./styles.module.css";

interface BillingInfo {
  title: string;
  amount: string;
  targets: string[];
}

interface Objective {
  title: string;
  description: string;
}

const Objective: Objective[] = [
  {
    title: "Maximum Loss",
    description:
      "This rule can also be called the “account stop-loss” Maximum loss is a fixed figured representing the difference between your initial account balance and current equity which can not fall below the specified value for the plan. For example, If your initial account balance is 10k and you have a max drawdown of 8%, your maximum loss value will remain at $9,200 for the duration of your challenge. If still aren't sure, watch the following video for an in depth breakdown.",
  },
  {
    title: "Maximum Daily Loss",
    description:
      "This rule can also be called “trader’s daily stop-loss”. The rule says that at any moment of the day (EE(S)T – Eastern European Summer Time), the daily equity decrease must not hit the predetermined limit. The counting formula: Current daily loss = balance at the start of the day - current equity.",
  },
  {
    title: "Maximum Loss",
    description:
      "This rule can also be called “account stop-loss”. Maximum Loss is the difference between your highest recorded balance and your current equity. Maximum loss trails your highest recorded balance (closed trades) If still aren't sure, watch the following video for an in depth breakdown.",
  },
  {
    title: "Profit Target",
    description:
      "Depending on chosen trading strategy and phase the minimum profit target to complete the phase or earn commission is set between 5-10% of the initial balance. Profit target means that a trader reaches a profit target specified in the plan of the initial account balance in the sum of closed positions. The trading period is unlimited and the profit target can be met at your leisure without any restrictions. For example: If you trade Challenge with $10,000 capital targeting a minimum of 5%, your profit target is $500. After completing the Verification period (Phase 2), the minimum profit target will be removed. You can trade your Phase 3 account as long as you do not reach the maximum loss limits or violate other rules or objectives.",
  },
  {
    title: "Minimum Trading Days",
    description:
      "To meet this objective, depending on your chosen trading strategy, you must trade for at least one day during the trading period. At least one position must be opened on each of these days. A trading day is considered any day when at least one trade is executed. If a trade is held over multiple days, the day when the trade was executed is considered as the trading day. You can proceed to the next phase without waiting.",
  },
  {
    title: "Trading Period",
    description:
      "All challenges both one and two step have unlimited trading time to complete.",
  },
];

const Dashboard = () => {
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
    // Add three more objects with similar structure for other data
  ];

  return (
    <div className="mx-4 md:mx-6 lg:mx-10">
      <Typography
        sx={
          theme.palette.mode === "light"
            ? {
                fontSize: 24,
                color: "black",
                mt: 4,
              }
            : {
                fontSize: 24,
                color: "#ffffff",
                mt: 4,
              }
        }
      >
        Choose Your Account
      </Typography>
      <div className="flex justify-between items-center">
        <Typography
          sx={
            theme.palette.mode === "light"
              ? {
                  fontSize: 18,
                  color: "black",
                  fontWeight: 400,
                }
              : {
                  fontSize: 18,
                  color: "#646464",
                  fontWeight: 400,
                }
          }
        >
          You must pass the qualifications to start managing the account with a
          balance of up to $200,000
        </Typography>

        <div className="flex gap-4 items-center cursor-pointer">
          <Typography
            sx={
              theme.palette.mode === "light"
                ? { fontWeight: 400, fontSize: 14, color: "black" }
                : { fontWeight: 400, fontSize: 14, color: "white" }
            }
            variant="body1"
          >
            Account Rules
          </Typography>
          <QuestionMarkIcon />
        </div>
      </div>

      <div className="w-full md:w-[450px] rounded bg-white bg-opacity-5 mx-auto text-center mt-12">
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

      <Typography
        sx={
          theme.palette.mode === "light"
            ? {
                fontSize: 34,
                color: "black",
                mt: 8,
              }
            : { fontSize: 34, color: "#ffffff", mt: 8 }
        }
      >
        Objective Explanations
      </Typography>
      <div className="flex flex-wrap gap-4 md:gap-12">
        {Objective.map((data, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", md: 302 },
              mt: 2,
              p: 2,
              borderRadius: "12px",
            }}
          >
            <div className="flex flex-wrap gap-9">
              <div className="flex flex-col gap-y-3">
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 24,
                          color: "black",
                        }
                      : { fontSize: 24, color: "#ffffff" }
                  }
                >
                  {data.title}
                </Typography>
                <div className="flex flex-col gap-y-3">
                  <Typography
                    sx={
                      theme.palette.mode === "light"
                        ? {
                            fontSize: 13,
                            fontWeight: 400,
                            color: "black",
                            mt: 1,
                          }
                        : {
                            fontSize: 13,
                            fontWeight: 400,
                            color: "#ffffff",
                            mt: 1,
                          }
                    }
                  >
                    {data.description}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
