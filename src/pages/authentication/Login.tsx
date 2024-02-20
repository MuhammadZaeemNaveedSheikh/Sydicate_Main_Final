// project imports
import ThemeLayoutWrapper from "../../theme/ThemeLayoutWrapper";
import { LoginComponent } from "../../components/AuthComponents";

const Login = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex py-14 lg:pt-[6.25rem] lg:pb-[8.75rem] ">
          <LoginComponent />
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Login;
