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
    <div className="hidden lg:block">
      <NavLink to="/">
        <div className="flex gap-4 justify-center items-center mt-12 px-8">
          <img src="../../Icons/logo1.svg" />
          <div
            className={`font-[Montserrat] font-semibold text-[18px] text-${
              theme.palette.mode === "light" ? "black" : "white"
            }`}
          >
            SYNDICATE FUNDED
          </div>
        </div>
      </NavLink>
      {menuItem?.map((item) => (
        <div key={item?.id}>
          <NavLink
            to={item.path}
            className={`font-[Montserrat] font-medium text-lg text-white ${
              isNavLinkActive(item.path)
                ? "flex items-center mt-8 bg-[#d6c3f8] bg-opacity-50 pb-8"
                : ""
            }`}
          >
            {isNavLinkActive(item.path) && (
              <div className="relative">
                <div className="absolute -top-2">
                  <SelectedSidebar />
                </div>
              </div>
            )}
            <div className="flex gap-7 items-center mt-8 pl-8">
              <div>{item?.icon}</div>
              <div
                className={`link_text ${
                  theme.palette.mode === "light" ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
