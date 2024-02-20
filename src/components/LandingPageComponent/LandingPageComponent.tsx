import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./HeroSection";
import RevolutionizeSection from "./RevolutionizeSection";
import AboutCards from "./AboutCards";
import TestSection from "./TestSection";
import FundingSection from "./FundingSection";
import AddFeaturesSection from "./AddFeaturesSection";
import MobileAppSection from "./MobileAppSection";
import TestimonialsSection from "./TestimonialsSection";

import RevolutionizeEllipse from "../../assets/images/landing/revolutionizeEllipse.svg";
import RevolutionizeBottomEllipse from "../../assets/images/landing/revolutionizeBottomEllipse.svg";
import MobileappEllipse from "../../assets/images/landing/mobileappEllipse.svg";
import MobileappBotttomEllipse from "../../assets/images/landing/mobileappBottomEllipse.svg";

const LandingPageComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full flex flex-col">
      <div
        className="mt-[3.25rem] md:mt-[5.25rem] xl:mt-[6.25rem] w-full flex flex-col z-10"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <HeroSection />
      </div>
      <div
        className="relative pt-[1.75rem] md:pt-[2.25rem] xl:pt-[3.76rem] w-full flex flex-col bg-white bg-opacity-[0.02]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="absolute top-0 right-0 overflow-hidden">
          <img src={RevolutionizeEllipse} width="100%" height="100" />
        </div>
        <RevolutionizeSection />
        <div className="absolute bottom-0 overflow-hidden">
          <img src={RevolutionizeBottomEllipse} width="100%" height="100%" />
        </div>
      </div>
      <div
        className="mt-[3rem] md:mt-[7rem] xl:mt-[10rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <AboutCards />
      </div>
      <div
        className="w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <TestSection />
      </div>
      <div
        className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <FundingSection />
      </div>
      <div
        className="mb-[3.25rem] md:mb-20 xl:mb-[5.56rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <AddFeaturesSection />
      </div>
      <div
        className="relative pt-[3.25rem] md:pt-20 xl:pt-[5.63rem] mb-20 md:mb-24 xl:mb-[8.18rem] w-full flex flex-col bg-white bg-opacity-[0.01]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="w-[50%] absolute top-0 right-0 overflow-hidden">
          <img src={MobileappEllipse} width="100%" height="100%" />
        </div>
        <MobileAppSection />
        <div className="w-[50%] absolute bottom-0 left-0 overflow-hidden">
          <img src={MobileappBotttomEllipse} width="100%" height="100%" />
        </div>
      </div>
      <div
        className="px-4 md:px-14 lg:px-20 mt-[3.25rem] md:mt-20 xl:mt-[10rem] mb-20 md:mb-24 xl:mb-[6.25rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default LandingPageComponent;
