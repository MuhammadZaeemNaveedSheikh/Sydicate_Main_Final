import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography, useTheme } from "@mui/material";

import FeatureIcon1 from "../../assets/images/landing/revolutionizeIcon1.svg";
import FeatureIcon2 from "../../assets/images/landing/revolutionizeIcon2.svg";
import FeatureIcon3 from "../../assets/images/landing/revolutionizeIcon3.svg";
import FeatureIcon4 from "../../assets/images/landing/revolutionizeIcon4.svg";
import FeatureIcon5 from "../../assets/images/landing/revolutionizeIcon5.svg";

import RevolutionizeImage from "../../assets/images/landing/revolutionizeImage.png";
import RevolutionizeImage2 from "../../assets/images/landing/revolutionizeImage2.png";
import RevolutionizeImage3 from "../../assets/images/landing/revolutionizeImage3.png";
import RevolutionizeImage4 from "../../assets/images/landing/revolutionizeImage4.png";
import RevolutionizeImage5 from "../../assets/images/landing/revolutionizeImage5.png";

import { stylesMui } from "./styles";

const RevolutionizeSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState("feature-card1");
  const theme = useTheme();

  const featureCards = [
    {
      id: "feature-card1",
      icon: FeatureIcon1,
      title: "Custom-Built Trading Journal",
    },
    {
      id: "feature-card2",
      icon: FeatureIcon2,
      title: "Advanced Account Analysis",
    },
    {
      id: "feature-card3",
      icon: FeatureIcon3,
      title: "Custom Market Data Overview",
    },
    { id: "feature-card4", icon: FeatureIcon4, title: "Monthly Competition" },
    { id: "feature-card5", icon: FeatureIcon5, title: "Leaderboards" },
  ];

  const handleFeatureHover = (featureId) => {
    setHoveredFeature(featureId);
  };

  const getRevolutionizeImage = () => {
    switch (hoveredFeature) {
      case "feature-card1":
        return RevolutionizeImage;
      case "feature-card2":
        return RevolutionizeImage2;
      case "feature-card3":
        return RevolutionizeImage3;
      case "feature-card4":
        return RevolutionizeImage4;
      case "feature-card5":
        return RevolutionizeImage5;
      default:
        return RevolutionizeImage;
    }
  };

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
          <Typography sx={stylesMui.pageSubheadings}>
            Revolutionize Your
          </Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Trading Dashboard
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            We offer our users advanced trading analytics. This allows access to
            their stats, in depth performance overviews to highlight each key
            area that needs improving as well as areas of consistent high
            performance.
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Our dashboard is designed to offer all users everything they will
            need throughout their trading journey in one easy to use place.
          </Typography>
        </div>
      </div>

      <div
        className="w-full mb-12 md:mb-[7.13rem] flex flex-col md:flex-row md:justify-around"
        id="image-features"
      >
        <div
          className="w-full md:w-[55%] justify-center"
          id="revolutionize-image"
          style={{
            padding: "3px",
            borderRadius: "1.07769rem",
            border: "6.466px solid rgba(255, 255, 255, 0.10)",
            boxShadow: "0px 0px 43.106px 0px rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="rounded-[1.07769rem]">
            <img
              src={getRevolutionizeImage()}
              alt="Revolutionize Image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div
          className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start gap-2 overflow-hidden"
          id="features"
        >
          {featureCards.map(({ id, icon: FeatureIcon, title }) => (
            <div
              key={id}
              className={`w-full cursor-pointer rounded-lg ${
                theme.palette.mode === "light"
                  ? "bg-gray-700 !important"
                  : "bg-white !important"
              } bg-opacity-5`}
              id={id}
              data-aos={
                id === "feature-card2" || id === "feature-card4"
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              onMouseEnter={() => handleFeatureHover(id)}
            >
              <div className="w-full py-4 px-6 flex justify-start items-center gap-4 hover:bg-[#808080] hover:p-2 hover:rounded-lg">
                <div>
                  <img
                    src={FeatureIcon}
                    alt={`Feature Icon ${id.split("-")[2]}`}
                    className="object-cover"
                  />
                </div>
                <div>
                  <Typography sx={stylesMui.featureHeadings}>
                    {title}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevolutionizeSection;
