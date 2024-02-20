// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import CompetitionsPageComponent from "../components/CompetitionsPageComponent/CompetitionsPageComponent";
import { stylesMui } from "./styles";
import FinancialJourney from "../components/FinancialJourney";

const Competitions = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Competitions</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Here you can see Past and Current competitions and the winners.
          </Typography>
          <div>
            <CompetitionsPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Competitions;
