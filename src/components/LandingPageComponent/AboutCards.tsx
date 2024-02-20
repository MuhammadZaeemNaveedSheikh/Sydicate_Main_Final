import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography, useTheme } from "@mui/material";

import AboutIcon1 from "../../assets/images/landing/aboutIcon1.svg";
import AboutIcon2 from "../../assets/images/landing/aboutIcon2.svg";
import AboutIcon3 from "../../assets/images/landing/aboutIcon3.svg";
import AboutIcon4 from "../../assets/images/landing/aboutIcon4.svg";
import AboutIcon5 from "../../assets/images/landing/aboutIcon5.svg";
import AboutIcon6 from "../../assets/images/landing/aboutIcon6.svg";

import { stylesMui } from "./styles";

const AboutCards = () => {
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
          <Typography sx={stylesMui.pageSubheadings}>About</Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Syndicate Funded
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            At Syndicate Funded we are a team of experienced elite financial
            professionals. Our unwavering focus is to empower beginner traders
            with the tools & resources used to achieve unprecedented success.
          </Typography>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 mb-12 md:mb-[8.19rem] flex flex-col flex-wrap md:flex-row w-full justify-between gap-8 overflow-hidden"
        id="about-cards"
      >
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon1} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>$0 Commission</Typography>
            <Typography sx={stylesMui.aboutCardText}>
              We support openness and reasonable prices. To help you optimize
              your virtual gains and keep more money in your pocket, we don't
              charge commissions on any of your trades.
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon2} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Syndicate Markets
            </Typography>
            <Typography sx={stylesMui.aboutCardText}>
              For our traders, our associated broker provides an
              institutionalized level of trading and execution environment with
              their deep liquidity pool.
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon3} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Unlimited Trading Days
            </Typography>
            <Typography sx={stylesMui.aboutCardText}>
              We offer the best trading conditions in the business allowing you
              to trade with assurance.
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon4} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>New Features</Typography>
            <Typography sx={stylesMui.aboutCardText}>
              With our dashboard and available plug-ins, have the ability to see
              more of what's going on behind the scenes when you are trading.
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon5} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Minimal Slippage
            </Typography>
            <Typography sx={stylesMui.aboutCardText}>
              We provide all high value classes with tight competitive spreads
              starting at 0.1pip.
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon6} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Competitive Spreads
            </Typography>
            <Typography sx={stylesMui.aboutCardText}>
              We provide our traders with cost-effective and efficient
              transactions with tight lower spreads to help better profit your
              trading journey.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
