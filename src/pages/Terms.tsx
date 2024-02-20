// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";
import { TermsPageComponent } from "../components/PolicyPagesComponents";
import FinancialJourney from "../components/FinancialJourney";

const Terms = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>
            Terms And Conditions
          </Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div>
            <TermsPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Terms;
