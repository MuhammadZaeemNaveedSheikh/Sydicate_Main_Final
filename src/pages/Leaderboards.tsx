// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import LeaderboardComponent from "../components/LeaderboardComponent";
import { stylesMui } from "./styles";
import FinancialJourney from "../components/FinancialJourney";

const Leaderboards = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Leaderboards</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Keep track of your progress on our leaderboard!
          </Typography>
          <div className="mt-4 md:mt-7 xl:mt-11">
            <LeaderboardComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Leaderboards;
