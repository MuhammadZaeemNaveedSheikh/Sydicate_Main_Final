// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import AffiliatePortalWeb from "../components/AffiliatePortalWeb";

import { stylesMui } from "./styles";

const Affiliates = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Affiliate Portal</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Earn more with our cutting edge affiliate portal, with extensive
            tracking on your traffic!
          </Typography>
          <div>
            <AffiliatePortalWeb />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Affiliates;
