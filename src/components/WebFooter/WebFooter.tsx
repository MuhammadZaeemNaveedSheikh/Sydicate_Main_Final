import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

import GetFunded from "./GetFunded";

import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import ThirdColumn from "./ThirdColumn";

import FooterBottomEllipse from "../../assets/images/FooterBottomEllipse.svg";
import FooterTopEllipse from "../../assets/images/FooterTopEllipse.svg";

import { stylesMui } from "./styles";

export default function WebFooter() {
  return (
    <>
      <section className="relative">
        <div className="absolute -top-12 right-0">
          <img src={FooterTopEllipse} alt="Footer Ellipse" />
        </div>
        <div className="px-5 md:px-14 xl:px-20 my-12 md:my-[6.25rem]">
          <GetFunded />
        </div>
      </section>
      <section className="relative mt-[2.5rem] md:mt-[6.25rem] w-full flex flex-col items-center">
        <div className="absolute bottom-0 left-0">
          <img src={FooterBottomEllipse} alt="Footer Ellipse" />
        </div>
        <div className="px-5 md:px-14 xl:px-20 py-5 md:py-14 w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start  text-white">
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
        </div>

        <div className="py-5 mt-[0.88rem] md:pb-9 md:mt-[1.88rem] w-[95%] flex flex-col md:flex-row justify-between border-t border-solid border-white border-opacity-20">
          <div className="mb-4 md:mb-0">
            <Typography sx={stylesMui.copyrightText}>
              Copyright © SYNDICATE FUNDED
            </Typography>
          </div>
          <Typography sx={stylesMui.copyrightText}>
            <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-[0px]">
              <Link to="/web/cookie-policy">COOKIE POLICY </Link>{" "}
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/privacy-policy"> PRIVACY POLICY </Link>
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/terms-and-conditions"> TERMS & CONDITIONS </Link>
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/disclaimer"> DISCLAIMER </Link>{" "}
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/return-policy"> RETURN POLICY</Link>
            </div>
          </Typography>
        </div>
      </section>
    </>
  );
}
