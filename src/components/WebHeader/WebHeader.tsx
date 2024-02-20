import WebDesktopHeader from "./WebDesktopHeader";
import WebMobileHeader from "./WebMobileHeader";

const WebHeader = () => {
  return (
    <>
      <div className="hidden md:block">
        <WebDesktopHeader />
      </div>
      <div className="w-full md:hidden">
        <WebMobileHeader />
      </div>
    </>
  );
};

export default WebHeader;
