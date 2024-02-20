// project imports
import ThemeLayoutWrapper from "../../theme/ThemeLayoutWrapper";
import { ForgotComponent } from "../../components/AuthComponents";

const Forgot = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex py-14 lg:pt-[6.25rem] lg:pb-[8.75rem] ">
          <ForgotComponent />
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Forgot;
