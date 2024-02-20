// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import CertificatesPageComponent from "../components/CertificatesPageComponent";
import { stylesMui } from "./styles";
import FinancialJourney from "../components/FinancialJourney";

const Certificates = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <div className="w-full md:w-[50%] px-4 md:px-0">
            <Typography sx={stylesMui.headingPage}>Certificates</Typography>
            <Typography sx={stylesMui.subHeroText}>
              We do not only offer digital certificates, if you'd like to have a
              physical one ordered to you. Proceed to the certificates tab once
              you are logged in.
            </Typography>
          </div>
          <div>
            <CertificatesPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default Certificates;
