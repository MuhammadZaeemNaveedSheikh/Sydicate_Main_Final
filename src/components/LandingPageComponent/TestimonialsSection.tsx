import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Rating, Typography, useTheme } from "@mui/material";

import TestimonialPerson from "../../assets/images/landing/testimonialPerson.png";
import TestimonialLeft from "../../assets/icons/TestimonialLeft";
import TestimonialRight from "../../assets/icons/TestimonialRight";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { stylesMui } from "./styles";

const TestimonialsSection = () => {
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`px-2 md:px-[3.41rem] pt-16 md:pt-[5.63rem] pb-20 md:pb-[10.2rem] w-full flex flex-col items-center justify-center ${
        theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
      } bg-opacity-5`}
    >
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="title-section"
      >
        <div className="w-full flex flex-col items-center mb-10 md:mb-[4.81rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            What Our Traders Say
          </Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            About US!
          </Typography>
        </div>
        <div className="md:hidden flex justify-center mb-4">
          <button className="cursor-pointer prevButton">
            <ChevronLeftIcon sx={{ color: "#5B1CD4", fontSize: 40 }} />
          </button>
          <button className="cursor-pointer nextButton">
            <ChevronRightIcon sx={{ color: "#5B1CD4", fontSize: 40 }} />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between gap-12 lg:gap-40">
        <div className="hidden md:flex items-center">
          <button className="cursor-pointer prevButton">
            <TestimonialLeft />
          </button>
        </div>

        <Swiper
          navigation={{
            enabled: true,
            prevEl: ".prevButton",
            nextEl: ".nextButton",
          }}
          slidesPerView={1}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div
              className="w-full flex flex-col justify-center items-center"
              id="profile-testimonial"
            >
              <div className="mb-3 md:mb-6">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  className="object-cover"
                />
              </div>
              <Typography sx={stylesMui.testimonialPerson}>
                Mick G | Head of Sales and Marketing
              </Typography>
              <Rating value={4.5} readOnly />
              <div className="mt-6 text-center">
                <Typography sx={stylesMui.testimonialText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full flex flex-col justify-center items-center"
              id="profile-testimonial"
            >
              <div className="mb-3 md:mb-6">
                <img
                  src={TestimonialPerson}
                  alt="person"
                  className="object-cover"
                />
              </div>
              <Typography sx={stylesMui.testimonialPerson}>
                Mick G | Head of Sales and Marketing
              </Typography>
              <Rating value={4.5} readOnly />
              <div className="mt-6 text-center">
                <Typography sx={stylesMui.testimonialText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="hidden md:flex items-center">
          <button className="cursor-pointer nextButton">
            <TestimonialRight />
          </button>
        </div>
      </div>

      <div
        className="w-full flex flex-col items-center justify-center mt-14 md:mt-20 xl:mt-[8.31rem] text-center"
        id="trust-numbers"
      >
        <Typography sx={stylesMui.trustTitle}>
          Clients all over the world trust
          <br /> Syndicate to Fund Their Accounts
        </Typography>
        <div className="w-full md:w-11/12 mt-14 md:mt-20 flex justify-between px-6 md:px-10 2xl:px-20 mb-12 md:mb-[5.48rem]">
          <div className="flex flex-col items-center justify-center">
            <Typography sx={stylesMui.trustSubheading}>
              80% <br />
              Profit Split
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography sx={stylesMui.trustSubheading}>
              Bi-weekly <br />
              Payouts
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography sx={stylesMui.trustSubheading}>
              Instant <br />
              Access
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography sx={stylesMui.trustSubheading}>
              Multiple <br />
              Withdrawal Methods
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
