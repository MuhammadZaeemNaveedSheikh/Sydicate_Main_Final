import { Card, Typography, useTheme } from "@mui/material";

interface DummyData {
  id: number;
  iconSrc: string;
  label: string;
  earnings: number;
}

interface DummyData1 {
  id: number;
  label: string;
  clicks: number;
}
const StatsTab = () => {
  const theme = useTheme();
  const dummyData: DummyData[] = [
    {
      id: 1,
      iconSrc: "/Icons/dollarIcon.svg",
      label: "Total Earnings",
      earnings: 0.0,
    },
    {
      id: 2,
      iconSrc: "/Icons/dollarIcon.svg",
      label: "Earned today",
      earnings: 0.0,
    },
    {
      id: 3,
      iconSrc: "/Icons/dollarIcon.svg",
      label: "Earned last month",
      earnings: 0.0,
    },
    {
      id: 4,
      iconSrc: "/Icons/dollarIcon.svg",
      label: "Earned last year",
      earnings: 0.0,
    },
  ];

  const dummyData1: DummyData1[] = [
    {
      id: 1,
      label: "Total clicks",
      clicks: 2,
    },
    {
      id: 2,
      label: "Signups",
      clicks: 0,
    },
    {
      id: 3,
      label: "Purchases ",
      clicks: 0,
    },
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-4 md:mt-12 md:gap-5 xl:gap-4">
        {dummyData.map((data) => (
          <div
            key={data.id}
            className={`w-full sm:w-1/3 lg:w-1/4 p-3 lg:p-6 flex justify-between mt-2 ${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <img src={data.iconSrc} width={25} height={25} alt="Icon" />
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#646464",
                  }}
                >
                  {data.label}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                ${data.earnings.toFixed(2)}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="flex md:flex-row  mt-12 gap-4">
        {dummyData1.map((data) => (
          <div
            key={data.id}
            className={`w-1/3 flex flex-col p-2 md:p-4 ${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5`}
          >
            <div className="flex flex-col gap-3">
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#646464",
                }}
              >
                {data.label}
              </Typography>
            </div>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 26 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {data?.clicks}
            </Typography>
          </div>
        ))}
      </div>

      <Card
        sx={{ p: { xs: 2, md: 4 }, width: { xs: "70%", md: "29%" }, mt: 6 }}
      >
        <div className="flex justify-between gap-1 ">
          <img src="/Icons/dollarIcon.svg" width={40} height={40} />
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 26 },
              color: "#646464",
            }}
          >
            Total Earnings
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 45 },
            color: theme.palette.mode === "light" ? "black" : "#dedede",
            mt: 4,
          }}
        >
          $0.00
        </Typography>
      </Card>
    </>
  );
};

export default StatsTab;
