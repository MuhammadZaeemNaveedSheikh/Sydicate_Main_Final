import { Typography } from "@mui/material";

import Subscribe from "./Subscribe";

import igIcon from "../../assets/images/IgFooter.png";
import discordIcon from "../../assets/images/DiscordFooter.png";
import twitterIcon from "../../assets/images/TwitterFooter.png";
import telegramIcon from "../../assets/images/TelegramFooter.png";

import { stylesMui } from "./styles";

const ThirdColumn = () => {
  return (
    <div id="wrapper">
      <div
        className="p-[0.87rem] flex flex-col justify-center items-start gap-[1.81rem] rounded-lg bg-white bg-opacity-5"
        id="newsletter-card"
      >
        <Typography sx={stylesMui.footerHeadings}>
          Join Our Newsletter
        </Typography>
        <div className="w-full">
          <Subscribe />
        </div>
        <Typography sx={{ fontSize: "0.8125rem", fontWeight: 500 }}>
          * Will send you weekly updates for your better tool management.
        </Typography>
      </div>

      <div className="flex justify-around mt-[1.62rem]" id="socials">
        <img
          src={igIcon}
          alt="social-icon"
          width="58px"
          height="58px"
          className="hover:cursor-pointer"
        />
        <img
          src={discordIcon}
          alt="social-icon"
          width="58px"
          height="58px"
          className="hover:cursor-pointer"
        />
        <img
          src={twitterIcon}
          alt="social-icon"
          width="58px"
          height="58px"
          className="hover:cursor-pointer"
        />
        <img
          src={telegramIcon}
          alt="social-icon"
          width="58px"
          height="58px"
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ThirdColumn;
