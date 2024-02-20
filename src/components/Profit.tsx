import MainTitleComponent from "./MainTitleComponent";
import { Typography, useTheme } from "@mui/material";
interface profitDataInterface {
  id: number;
  title: string;
  text: string;
  price: string;
  paragraph: string;
  buttonText: string;
}
const Profit = () => {
  const theme = useTheme();
  const profitData: profitDataInterface[] = [
    {
      id: 1,
      title: "Withdrawal Status",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Withdrawal",
    },
    {
      id: 2,
      title: "Process a Withdrawal",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Profit",
    },
    {
      id: 3,
      title: "Affiliate Payout",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Share",
    },
  ];
  return (
    <div className="mx-4 md:mx-6 lg:mx-10 my-8">
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent Image="/Icons/Profit.svg" title="Withdrawal" />
      </div>

      <div className="flex flex-wrap gap-6 md:gap-6 mt-6">
        {profitData?.map((item) => (
          <div
            key={item.id}
            className={`  ${
              theme.palette.mode === "light" ? "bg-gray-500" : "bg-white"
            } bg-opacity-5 w-full md:w-[300px] p-2 md:p-4`}
          >
            <Typography
              sx={{
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "#646464",
                mt: 4,
              }}
            >
              {" "}
              {item.text}
            </Typography>

            <Typography
              sx={{
                color: "#D6C3F8",
                mt: 2,
              }}
            >
              {item.price}
            </Typography>

            <button className="font-[Montserrat] text-xs font-medium text-white w-full h-10 bg-[#5B1CD4] mt-5 rounded-md">
              {item?.buttonText}
            </button>
            <Typography
              sx={{
                fontSize: 10,
                color: "#646464",
                fontWeight: 400,
                mt: 2,
              }}
            >
              {item.paragraph}
            </Typography>
          </div>
        ))}
      </div>

      <div
        className={`p-3 md:p-6 rounded-[10px] mt-8 ${
          theme.palette.mode === "light"
            ? "bg-black bg-opacity-10"
            : "bg-white bg-opacity-5"
        }`}
      >
        <Typography
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
            fontSize: 26,
          }}
        >
          Payouts and Certificates
        </Typography>

        <div className="flex justify-between flex-wrap mt-3 gap-y-3 gap-x-3 md:gap-x-[0px]">
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            DATE (UTC)
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            PROFIT
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            PROFIT SPLIT
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            PAID
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            STATUS
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            CERTIFICATE
          </Typography>
          <Typography
            sx={{
              color: "#646464",
              fontSize: 16,
            }}
          >
            INVOICE
          </Typography>
        </div>
        <div className="flex justify-between items-center mt-6">
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            No data available in table
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            1
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Profit;
