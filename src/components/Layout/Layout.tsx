import { useTheme } from "@mui/material";
import AffiliateIcon from "../AffiliateIcon";
import BillingIcon from "../BillingIcon";
import CertificateIcon from "../CertificateIcon";
import CompetitionIcon from "../CompetitionIcon";
import DashboardIcon from "../DashboardIcon";
import Header from "../Header";
import LeaderBoardIcon from "../LeaderBoardIcon";
// import ProfileIcon from "../ProfileIcon";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Sidebar from "../Sidebar";
import StatisticsIcon from "../StatisticsIcon";
import FaqIcon from "../FaqIcon";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PreviewIcon from "@mui/icons-material/Preview";
// import LegalIcon from "../LegalIcon";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: React.ReactNode;
}

export function Layout({ children }) {
  const theme = useTheme();
  const menuItem: MenuItem[] = [
    {
      id: 1,
      path: "/",
      name: "Account",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      path: "/statistics",
      name: "Statistics",
      icon: <StatisticsIcon />,
    },
    {
      id: 3,
      path: "/competitions",
      name: "Competitions",
      icon: <CompetitionIcon />,
    },
    {
      id: 4,
      path: "/leaderboards",
      name: "Leaderboards",
      icon: <LeaderBoardIcon />,
    },
    {
      id: 5,
      path: "/certificates",
      name: "Certificates",
      icon: <CertificateIcon />,
    },
    {
      id: 6,
      path: "/billing",
      name: "Billing",
      icon: <BillingIcon />,
    },
    {
      id: 7,
      path: "/affiliate-portal",
      name: "Affiliate Portal",
      icon: <AffiliateIcon />,
    },
    {
      id: 8,
      path: "/withdrawal",
      name: "Withdrawal",
      icon: (
        <AccountBalanceIcon
          sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
        />
      ),
    },
    {
      id: 9,
      path: "/friends",
      name: "Friends Corner",
      icon: (
        <Diversity3Icon
          sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
        />
      ),
    },
    {
      id: 10,
      path: "/faq",
      name: "FAQs",
      icon: <FaqIcon />,
    },
    {
      id: 11,
      path: "/howitworks",
      name: "How It Works",
      icon: (
        <PreviewIcon
          sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
        />
      ),
    },
    // {
    //   id: 11,
    //   path: "/legal",
    //   name: "Legal",
    //   icon: <LegalIcon />,
    // },
  ];

  // const menuItem1: MenuItem[] = [
  //
  // ];
  return (
    <div className="lg:flex h-[100vh]">
      <div className="w-[80%] lg:w-[25%] xl:w-[20%]">
        <Sidebar menuItem={menuItem} />
      </div>
      <div className="w-full lg:w-[75%] xl:w-[80%] ">
        <Header menuItem={menuItem} />
        <main>{children}</main>
      </div>
    </div>
  );
}
