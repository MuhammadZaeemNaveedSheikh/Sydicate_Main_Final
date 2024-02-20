import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useContext, useMemo } from "react";
import {
  Switch,
  Tooltip,
  useTheme,
  Menu,
  MenuItem as MuiMenuItem,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ThemeContext } from "../../theme/ThemeContextProvider";

import RegisterButton from "./RegisterButton";
import { webHeaderMenuItems } from "../../constants/webHeaderMenuItems";
import LogoHeaderWeb from "../../assets/icons/LogoHeaderWeb";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import HeaderEllipse from "../../assets/images/HeaderEllipse.png";
import HeaderStarsLeft from "../../assets/images/HeaderStarsLeft.svg";
import LoginButton from "./LoginButton";

const WebMobileHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const location = useLocation();

  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const logoFill = theme.palette.mode === "light" ? "black" : "white";
  const isLight = theme.palette.mode === "light";

  return (
    <>
      <div
        className="relative mt-4 px-4 w-full flex justify-between items-center"
        id="toolbar"
      >
        <div
          className="flex justify-start items-center w-[229] h-[34px] z-10"
          id="logo"
        >
          <NavLink to="/web/" className="logo-link">
            <LogoHeaderWeb fill={logoFill} />
          </NavLink>
        </div>

        <div className="absolute -top-16">
          <img src={HeaderEllipse} height="100%" />
        </div>
        {theme.palette.mode === "dark" ? (
          <>
            <div className="absolute -top-14 z-0">
              <img src={HeaderStarsLeft} height="100%" />
            </div>
          </>
        ) : null}

        <RegisterButton />
        <LoginButton />
        <div className="flex justify-end">
          <div className="flex items-center gap-2 z-10" id="register-hamburger">
            <button
              className="bg-transparent border-none"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {webHeaderMenuItems?.map((item) => (
            <MuiMenuItem
              key={item?.id}
              onClick={() => setAnchorEl(null)}
              selected={isNavLinkActive(item.path)}
            >
              <NavLink
                to={item.path}
                className="font-[Montserrat] font-medium text-lg text-black"
              >
                <Typography variant="body1">{item.name}</Typography>
              </NavLink>
            </MuiMenuItem>
          ))}
          <MuiMenuItem>
            <Tooltip title={`Activate ${activateName} Mode`}>
              <div className="flex items-center">
                <Switch
                  checked={theme.palette.mode === "dark"}
                  onChange={switchColorMode}
                  color="default"
                  icon={<LightModeIcon style={{ fill: "#FFD700" }} />}
                  checkedIcon={<DarkModeIcon style={{ fill: "#fff" }} />}
                  sx={{
                    height: "43px",
                    width: "61px",
                    borderRadius: "100px",
                    padding: "0px",
                    backgroundColor: isLight ? "#79D7ED" : "#39598A",
                  }}
                />
              </div>
            </Tooltip>
          </MuiMenuItem>
        </Menu>
      </div>
    </>
  );
};

export default WebMobileHeader;
