import { Typography } from "@mui/material";

import contactCardPhone from "../../assets/images/contactCardPhone.svg";
import contactCardEmail from "../../assets/images/contactCardEmail.svg";
import contactCardLocation from "../../assets/images/contactCardLocation.svg";
import contactCardTwitter from "../../assets/images/contactCardTwitter.svg";
import contactCardIg from "../../assets/images/contactCardIg.svg";
import contactCardDiscord from "../../assets/images/contactCardDiscord.svg";
import contactCardEllipseTop from "../../assets/images/contactCardEllipseTop.png";
import contactCardEllipseBottom from "../../assets/images/contactCardEllipseBottom.png";

import ContactForm from "../ContactForm";

import { stylesMui } from "./styles";

const ContactComponent = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row py-[0.63rem] pl-[0.63rem] w-full bg-white bg-opacity-5 relative rounded-[0.625rem]">
        <div
          className="flex flex-col gap-12 md:gap-[6.94rem] pt-10 pb-9 pl-10 w-full md:w-[40%] bg-[#5B1CD4] text-white relative rounded-sm"
          id="info"
        >
          <div>
            <Typography sx={stylesMui.cardHeading}>
              Contact Information
            </Typography>
            <Typography sx={stylesMui.cardSubtext}>
              Say something to start a live chat!
            </Typography>
          </div>
          <div className="flex flex-col gap-8 md:gap-[3.12rem] md:w-[60%] mb-6 md:mb-12">
            <div className="flex gap-2 xl:gap-4 flex-wrap lg:flex-nowrap">
              <img src={contactCardPhone} width="24px" height="24px" />
              <Typography sx={stylesMui.cardText}>+1012 3456 789</Typography>
            </div>
            <div className="flex gap-2 xl:gap-4 flex-wrap lg:flex-nowrap">
              <img src={contactCardEmail} width="24px" height="24px" />
              <Typography sx={stylesMui.cardText}>
                support@syndicatefunded.com
              </Typography>
            </div>
            <div
              className="flex gap-2 xl:gap-4 flex-wrap lg:flex-nowrap"
              style={{ zIndex: 3 }}
            >
              <img src={contactCardLocation} width="24px" height="24px" />
              <Typography sx={stylesMui.cardText}>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Typography>
            </div>
          </div>
          <div className="flex gap-6" style={{ zIndex: 3 }} id="socials">
            <img src={contactCardTwitter} width="30px" height="30px" />
            <img src={contactCardIg} width="30px" height="30px" />
            <img src={contactCardDiscord} width="30px" height="30px" />
          </div>
          <img
            src={contactCardEllipseTop}
            alt="Top Ellipse"
            className="absolute bottom-0 left-0 md:bottom-16 md:left-96"
            style={{ zIndex: 2 }}
          />
          <img
            src={contactCardEllipseBottom}
            alt="Bottom Ellipse"
            className="absolute bottom-0 right-0"
            style={{ zIndex: 0 }}
          />
        </div>

        <div
          className="pt-[3.75rem] px-[3.13rem] flex items-start w-full md:w-[60%]"
          id="form"
        >
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
