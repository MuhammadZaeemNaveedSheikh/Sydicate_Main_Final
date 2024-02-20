import { Typography, useTheme } from "@mui/material";

import SyndicateLogoIcon from "../../assets/icons/SyndicateLogoIcon";
import SyndicateLogoText from "../../assets/icons/SyndicateLogoText";

import { stylesMui } from "./styles";
import { NavLink } from "react-router-dom";

const FirstColumn = () => {
  const theme = useTheme();
  const logoColor = theme.palette.mode === "light" ? "black" : "white";
  return (
    <div className="mb-4 md:mb-0 md:mr-10 lg:mr-12 xl:mr-14 2xl:mr-16 flex flex-col justify-start items-start">
      <div className="mb-10">
        <NavLink
          to="/web/"
          className="logo-link flex justify-center items-center gap-2"
        >
          <SyndicateLogoIcon color="#5B1CD4" />
          <SyndicateLogoText color={logoColor} />
        </NavLink>
      </div>

      <div className="flex flex-col gap-7">
        <Typography sx={stylesMui.contactText}>
          Mon - Fri : 8am - 8 Pm (GST)
        </Typography>
        <Typography sx={stylesMui.contactText}>
          <a
            href="mailto:support@syndicatefunded.com"
            className="text-white no-underline"
          >
            support@syndicatefunded.com
          </a>
        </Typography>
        <Typography sx={stylesMui.contactText}>
          10 Lower Themes Street, Billings-Gate, London, England, EC3R6AF
        </Typography>
      </div>
    </div>
  );
};

export default FirstColumn;
