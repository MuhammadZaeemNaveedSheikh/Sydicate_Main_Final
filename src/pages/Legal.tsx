// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";
import { LegalPageComponent } from "../components/PolicyPagesComponents";
import FinancialJourney from "../components/FinancialJourney";

const Legal = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Legal</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div>
            <LegalPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Legal;
