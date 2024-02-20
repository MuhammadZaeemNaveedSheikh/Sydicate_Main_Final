import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton, useTheme } from "@mui/material";

const Pagination = () => {
  const theme = useTheme();
  return (
    <div
      className={`w-full ${
        theme.palette.mode === "light"
          ? "bg-black bg-opacity-none"
          : "bg-white bg-opacity-5"
      }  flex flex-row items-center justify-between overflow-x-auto mt-8`}
    >
      <div className="flex flex-row items-center">
        <IconButton>
          <NavigateBeforeIcon />
        </IconButton>
        <button className="hidden xl:block font-medium text-lg font-[Montserrat] text-white cursor-pointer  p-[0.90rem] rounded-lg">
          Previous
        </button>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          1{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          2{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          3{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          4{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          5{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          6{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          7{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          .{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          .{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          .{" "}
        </div>
        <div className="font-[Montserrat] text-white cursor-pointer font-medium text-lg ">
          12{" "}
        </div>
      </div>

      <div className="flex flex-row items-center">
        <button className="hidden xl:block font-medium text-lg font-[Montserrat] text-white cursor-pointer  p-[0.90rem] rounded-lg">
          Next
        </button>
        <IconButton>
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
