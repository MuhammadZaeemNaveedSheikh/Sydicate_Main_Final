import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography } from "@mui/material";

import TestTable from "./TestTable";
import CtaRightIcon from "../../assets/icons/CtaRightIcon";

import { stylesMui } from "./styles";

const TestSection = () => {
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
          <Typography sx={stylesMui.pageSubheadings}>Test Your</Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Skill-Set
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Prop trading brought to you by professional traders.
          </Typography>
        </div>
      </div>

      <div className="mb-7 md:mb-9 w-full" id="table">
        <TestTable />
      </div>

      <Button sx={stylesMui.ctaButton}>
        <Typography sx={stylesMui.ctaButtonText}>Get Funded</Typography>
        <CtaRightIcon />
      </Button>
    </section>
  );
};

export default TestSection;
