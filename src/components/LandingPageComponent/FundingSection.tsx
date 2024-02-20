import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography, useTheme } from "@mui/material";

import fundingIcon from "../../assets/images/landing/fundingIcon.svg";

import { stylesMui } from "./styles";

const FundingSection = () => {
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <div className="flex gap-3">
            <Typography sx={stylesMui.pageSubheadings}>Funding Your</Typography>
            <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
              Journey
            </Typography>
          </div>
          <Typography sx={stylesMui.bodyText}>
            Welcome to your funded journey. During these phases you will meet
            our simple and easy trading objectives to progress into the next
            phase.
          </Typography>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 flex flex-col md:flex-row w-full justify-between overflow-hidden"
        id="fund-cards"
      >
        <div
          className={`w-full md:w-[32.5%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="fund-card1"
        >
          <div className="mb-4 md:mb-8">
            <img src={fundingIcon} alt="fund icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[1.18rem] mb-4 md:mb-8">
            <Typography sx={stylesMui.phaseCardHeadings}>Phase 1</Typography>
            <Typography sx={stylesMui.phaseCardText}>
              Complete Phase 1 of your trading challenge to start your journey
              in becoming a funded trader. Reach your 8% virtual profit goal
              while trading for as long as you need without exceeding your
              maximum drawdown limit. Complete this phase to move forward and
              achieve success.
            </Typography>
          </div>
          <div>
            <Button sx={stylesMui.phaseCardButton}>
              <Typography sx={stylesMui.phaseCardButtonText}>
                Get Started
              </Typography>
            </Button>
          </div>
        </div>
        <div
          className={`w-full md:w-[32.5%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="fund-card1"
        >
          <div className="mb-4 md:mb-8">
            <img src={fundingIcon} alt="fund icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[1.18rem] mb-4 md:mb-8">
            <Typography sx={stylesMui.phaseCardHeadings}>Phase 2</Typography>
            <Typography sx={stylesMui.phaseCardText}>
              During Phases 2, you will demonstrate your trading skills and
              build your record. This phase has the same goal in achieving a 8%
              virtual profit goal without exceeding your maximum drawdown limit.
              Complete this phase to advance to your funded account.
            </Typography>
          </div>
          <div>
            <Button sx={stylesMui.phaseCardButton}>
              <Typography sx={stylesMui.phaseCardButtonText}>
                Get Started
              </Typography>
            </Button>
          </div>
        </div>
        <div
          className={`w-full md:w-[32.5%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-4 md:mb-8">
            <img src={fundingIcon} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[1.18rem] mb-4 md:mb-8">
            <Typography sx={stylesMui.phaseCardHeadings}>Get Funded</Typography>
            <Typography sx={stylesMui.phaseCardText}>
              Congratulations you have completed Phases 1 & 2. You are now
              prepared to start funded trading. With the help of an elite
              trading platform, you can trade with a 0% virtual profit target
              and earn an 80% performance fee.
            </Typography>
          </div>
          <div>
            <Button sx={stylesMui.phaseCardButton}>
              <Typography sx={stylesMui.phaseCardButtonText}>
                Get Started
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
