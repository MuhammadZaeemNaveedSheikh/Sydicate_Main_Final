// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";
import { CookiePageComponent } from "../components/PolicyPagesComponents";
import FinancialJourney from "../components/FinancialJourney";

const Cookie = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Cookie Policy</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div>
            <CookiePageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Cookie;
