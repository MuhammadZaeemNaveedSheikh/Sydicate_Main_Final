import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";

import { stylesMui } from "./styles";

const SecondColumn = () => {
  const theme = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-start items-start mb-4 md:mb-0 md:mr-4">
      <Typography sx={stylesMui.footerHeadings}>Quick Links</Typography>
      <Link
        to="/web/"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Home
      </Link>
      <Link
        to="/web/affiliate-portal"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Affiliate Portal
      </Link>
      <Link
        to="/web/leaderboards"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Leaderboards
      </Link>
      <Link
        to="/web/competitions"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Competitions
      </Link>
      <Link
        to="/web/certificates"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Certificates
      </Link>
      <Link
        to="/web/faqs"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        FAQs
      </Link>
      <Link
        to="/web/legal"
        className={`font-[Poppins] md:text-[14px] xl:text-[18px] font-[400] no-underline text-center mt-2 ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-white"
        } `}
        onClick={scrollToTop}
      >
        Legal
      </Link>
    </div>
  );
};

export default SecondColumn;
