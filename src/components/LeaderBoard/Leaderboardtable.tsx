import { useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Leaderboardtable = () => {
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: false,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: false,
    },
    {
      field: "profit",
      headerName: "Profit",
      width: 200,
      editable: false,
    },

    {
      field: "public",
      headerName: "Public",
      width: 150,
      editable: false,
      renderCell: () => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 border-4 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-black-800 rounded-full peer dark:bg-black-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white  after:rounded-2xl after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
        </label>
      ),
    },
    {
      field: "conditions",
      headerName: "Conditions",
      width: 200,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      user: "ABC",
      profit: "$756",
      public: "",
      conditions: ">>54",
    },
    {
      id: 2,
      user: "ABC",
      profit: "$756",
      public: "",
      conditions: ">>54",
    },
  ];
  return (
    <>
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
        }}
        rows={rows}
        getRowId={(row: any) => {
          return row?.id;
        }}
        columns={columns}
        hideFooter
        checkboxSelection
        // disableRowSelectionOnClick
      />
    </>
  );
};

export default Leaderboardtable;
