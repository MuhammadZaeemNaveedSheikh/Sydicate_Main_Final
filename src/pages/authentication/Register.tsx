// project imports
import ThemeLayoutWrapper from "../../theme/ThemeLayoutWrapper";
import { RegisterComponent } from "../../components/AuthComponents";

const Register = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex py-14 lg:pt-[6.25rem] lg:pb-[8.75rem] ">
          <RegisterComponent />
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Register;
