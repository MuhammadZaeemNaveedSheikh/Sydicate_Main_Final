// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";
import ContestsPageComponent from "../components/ContestsPageComponent";
import FinancialJourney from "../components/FinancialJourney";

const Contests = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem] z-10">
          <Typography sx={stylesMui.headingPage}>Contests</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Enroll in our premium contests for a chance to win exclusive
            rewards.
          </Typography>
          <div>
            <ContestsPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Contests;
