import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";

import MobileappImage from "../../assets/images/landing/mobileappImage.png";

import { stylesMui } from "./styles";

const MobileAppSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center">
        <div
          className="w-[65%] mb-7 md:mb-11 xl:mb:20 flex flex-col items-center"
          id="text-section"
        >
          <div className="w-full flex flex-col items-center">
            <Typography sx={stylesMui.mobileAppHeading}>Mobile App</Typography>
            <Typography
              sx={{ ...stylesMui.mobileAppHeading, color: "#D6C3F8" }}
            >
              Coming Soon!
            </Typography>
          </div>
        </div>

        <div className="w-full md:w-[65%] flex justify-center" id="app-image">
          <div className="aspect-w-102 aspect-h-100">
            <img
              src={MobileappImage}
              alt="app image"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppSection;
