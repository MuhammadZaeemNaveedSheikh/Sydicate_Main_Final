// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";

const Statistics = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Statistics</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Trading is a difficult trade, we only encourage seasoned traders to
            use our service.
          </Typography>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Statistics;
