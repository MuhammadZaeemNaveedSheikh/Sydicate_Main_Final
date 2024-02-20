import { useContext, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  InputAdornment,
  List,
  ListItemButton,
  Popover,
  Switch,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useAuth } from "../hooks/useAuth";
import { ThemeContext } from "../theme/ThemeContextProvider";

import Notification from "./Notification";

import HeaderSearchIcon from "../assets/icons/HeaderSearchIcon";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  menuItem: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItem }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const { switchColorMode } = useContext(ThemeContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const open = Boolean(anchorEl);

  const handleMenuItemClick = () => {
    setSidebarOpen(false);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  const isLight = theme.palette.mode === "light";

  return (
    <>
      <div className="flex justify-between items-center md:mx-4 lg:mx-8 mt-3 lg:mt-6">
        <div className="flex lg:hidden ">
          <IconButton onClick={handleMenuClick}>
            <MenuIcon
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#D6C3F8",
              }}
            />
          </IconButton>
        </div>

        <div className="hidden md:block">
          <TextField
            placeholder="Search..."
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: theme.palette.mode === "light" ? "black" : "#dedede",
                border: "none",

                borderColor: "none",
                fontSize: 16,
                fontFamily: "Montserrat",

                height: 44,

                "& fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "black" : "transparent",
                  borderRadius: "10px",
                  color: "black",
                },
              },

              "& input::placeholder": {
                color: theme.palette.mode === "light" ? "black" : "#dedede",

                fontSize: "18px",
                fontWeight: 400,
                fontFamily: "Montserrat",
              },
            }}
            //   onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeaderSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex gap-1 md:gap-2 items-center">
          <div
            id="plan"
            className="flex items-center justify-center border border-gray-500 rounded-full px-3 relative"
          >
            <img
              width="100%"
              height="100%"
              src="/Images/diamondImg.svg"
              alt="plan"
              className="absolute -left-[45px] -top-[35px]"
            />
            <span>
              <Typography
                sx={{
                  fontSize: 15,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Diamond
              </Typography>
            </span>
          </div>
          <div className="hidden md:block cursor-pointer">
            {" "}
            <Notification />
          </div>
          <div
            className="hidden sm:flex items-center cursor-pointer"
            onClick={handleProfileMenuClick}
          >
            <Avatar
              className="w-8 h-8"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
          <Typography
            sx={{
              fontSize: 12,
              color: theme.palette.mode === "light" ? "black" : "white",
              cursor: "pointer",
            }}
            onClick={handleProfileMenuClick}
          >
            Anddy01@gmail.com
          </Typography>
          <IconButton onClick={handleProfileMenuClick}>
            <KeyboardArrowDownIcon
              sx={{
                color: theme.palette.mode === "light" ? "black" : "#dedede",
              }}
            />
          </IconButton>
          <div className="hidden lg:block">
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
          </div>{" "}
        </div>
      </div>
      <div
        className={` ${
          theme.palette.mode === "light" ? "bg-white" : "bg-black"
        } lg:hidden`}
      >
        {isSidebarOpen &&
          menuItem?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                onClick={handleMenuItemClick}
                // className="font-[Montserrat] font-medium text-lg text-white"
                className={`font-[Montserrat] font-medium text-lg text-white ${
                  isNavLinkActive(item.path)
                    ? "flex items-center bg-[#d6c3f8] bg-opacity-50"
                    : ""
                }`}
              >
                <div className="flex gap-4 items-center py-4 pl-8">
                  <div>{item?.icon}</div>
                  <div
                    className={`link_text ${
                      theme.palette.mode === "light"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        {isSidebarOpen && (
          <Tooltip title={`Activate ${activateName} Mode`}>
            <div className="mr-6 flex items-center justify-end">
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
        )}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleProfileMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItemButton
            onClick={() => {
              handleProfileMenuClose();
            }}
          >
            Profile
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              logout();
              navigate("/web");
            }}
          >
            Logout
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default Header;
