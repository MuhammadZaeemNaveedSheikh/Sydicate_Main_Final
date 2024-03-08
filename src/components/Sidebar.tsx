import { NavLink, useLocation } from "react-router-dom";
import { MenuItem, useTheme } from "@mui/material";

import SelectedSidebar from "../assets/icons/SelectedSidebar";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  menuItem: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItem }) => {
  const theme = useTheme();
  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden lg:flex flex-col">
      <NavLink
        to="/"
        className="flex gap-4 justify-center items-center my-6 px-8"
      >
        <img
          src="../../Icons/logo1.webp"
          alt="Syndicate Funded"
          width={64}
          height={64}
        />
        <div
          className={`font-[Montserrat] font-semibold text-[18px] -ml-2 text-${
            theme.palette.mode === "light" ? "black" : "white"
          }`}
        >
          SYNDICATE FUNDED
        </div>
      </NavLink>
      {menuItem?.map((item) => (
        <NavLink
          to={item.path}
          className={`font-[Montserrat] font-medium text-lg text-white flex items-center py-5 gap-5 pl-9 ${isNavLinkActive(item.path) ? "bg-[#9cacc5]":""}`}
        >
          {isNavLinkActive(item.path) && (
            <div className="absolute left-0">
              <SelectedSidebar />
            </div>
          )}
          <div>{item?.icon}</div>
          <div
            className={`link_text ${
              theme.palette.mode === "light" ? "text-black" : "text-white"
            }`}
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
