import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography, useTheme } from "@mui/material";

import CtaRightIcon from "../../assets/icons/CtaRightIcon";
import VerticalSeparator from "../../assets/icons/VerticalSeparator";
import DiscordIcon from "../../assets/images/landing/discordJoinSocialsButton.png";
import TelegramIcon from "../../assets/images/landing/telegramJoinSocialsButton.png";
import InstagramIcon from "../../assets/images/landing/instagramJoinSocialsButton.png";
import XIcon from "../../assets/images/landing/twitterJoinSocialsButton.png";
import HeroImage from "../../assets/images/landing/heroImage.png";

import { stylesMui } from "./styles";

const HeroSection = () => {
  const theme = useTheme();

  const getBorderStyles = (theme) => ({
    border: `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col items-center justify-center">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageTitle}>Revolutionize Your</Typography>
          <Typography sx={{ ...stylesMui.pageTitle, color: "#5B1CD4" }}>
            Trading Game
          </Typography>
          <Typography sx={stylesMui.subHeroText}>
            <s style={{ textDecoration: "line-through" }}>No time limit</s> | $0
            commission trading
          </Typography>
          <Typography sx={stylesMui.subHeroText}>
            Institutional execution environment advanced <br />
            dashboard & analytics
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-center gap-6">
          <Button sx={stylesMui.ctaButton}>
            <Typography sx={stylesMui.ctaButtonText}>Get Funded</Typography>
            <CtaRightIcon />
          </Button>
          <Button
            sx={{ ...stylesMui.socialsButton, ...getBorderStyles(theme) }}
          >
            <div className="flex gap-2">
              <Typography sx={{ lineHeight: { xs: "1rem", md: "1.8rem" } }}>
                Join our Socials
              </Typography>
              <img src={DiscordIcon} width="24px" height="24px" />
              <img src={TelegramIcon} width="24px" height="24px" />
              <img src={InstagramIcon} width="24px" height="24px" />
              <img src={XIcon} width="24px" height="24px" />
            </div>
          </Button>
        </div>
      </div>

      <div
        className="w-full md:w-11/12 xl:w-[80%] mb-10 md:mb-16 flex-col items-center z-10"
        id="hero-image"
        data-aos="fade-down"
        data-aos-duration="4000"
      >
        <div className="aspect-w-139 aspect-h-100">
          <img src={HeroImage} alt="Hero Image" className="object-cover" />
        </div>
      </div>

      <div
        className="w-11/12 flex justify-between px-6 md:px-10 xl:px-20 mb-12 md:mb-[5.48rem]"
        id="numbers"
      >
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="6000"
        >
          <Typography sx={stylesMui.countNumbersPrimary}>183+</Typography>
          <Typography sx={stylesMui.subHeroText}>Countries</Typography>
        </div>
        <VerticalSeparator />
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="6000"
        >
          <Typography sx={stylesMui.countNumbersPrimary}>10K+</Typography>
          <Typography sx={stylesMui.subHeroText}>Traders</Typography>
        </div>
        <VerticalSeparator />
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="6000"
        >
          <Typography sx={stylesMui.countNumbersPrimary}>2022</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Funding Traders Since
          </Typography>
        </div>
        <VerticalSeparator />
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="6000"
        >
          <Typography sx={stylesMui.countNumbersPrimary}>4hr Avg</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Performance fee disbursal
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
