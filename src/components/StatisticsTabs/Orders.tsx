import { InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import HeaderSearchIcon from "../../assets/icons/HeaderSearchIcon";
import Pagination from "../Pagination";

const columns: GridColDef[] = [
  {
    field: "Time",
    headerName: "Time",
    width: 250,
    editable: false,
  },
  {
    field: "Message",
    headerName: "Message",
    width: 250,
    editable: false,
  },
  {
    field: "Details",
    headerName: "Details",
    width: 250,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    Time: "Open Time 1",
    Message: 100.5,
    Details: 105.2,
  },
];

const Orders = () => {
  const theme = useTheme();
  return (
    <>
      <div
        className={`p-3 md:p-6 rounded-[8px] mt-3 ${
          theme.palette.mode === "light"
            ? "bg-black bg-opacity-10"
            : "bg-white bg-opacity-5"
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <Typography
            sx={{
              fontSize: 24,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Closed Trades
          </Typography>
          <TextField
            placeholder="Search"
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
                    theme.palette.mode === "light" ? "black" : "gray",
                  borderRadius: "10px",
                  color: "black",
                },
              },

              "& input::placeholder": {
                color: theme.palette.mode === "light" ? "black" : "white",

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
        <DataGrid
          sx={{
            border: "none",
            ".MuiDataGrid-cell": {
              border: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            },
            ".MuiDataGrid-columnHeaders": {
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              borderRadius: "8px",
            },
            ".MuiDataGrid-row": {},
          }}
          rows={rows}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getRowId={(row: any) => {
            return row?.id;
          }}
          columns={columns}
          hideFooter
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </div>
      <Pagination />
    </>
  );
};

export default Orders;
