import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { stylesMui } from "./styles";
import SystemBarChart from "../SystemBarChart";

const Friends = () => {
  // Sample data for dropdown
  const friendsList = ["Friend 1", "Friend 2", "Friend 3"];

  // Sample data for friend requests
  const friendRequests = [
    { id: 1, name: "Request 1" },
    { id: 2, name: "Request 2" },
    // Add more requests as needed
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [friendRequestAnchorEl, setFriendRequestAnchorEl] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleClick = (event, friend) => {
    setAnchorEl(event.currentTarget);
    setSelectedFriend(friend);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedFriend(null);
  };

  const handleFriendRequestClick = (event) => {
    setFriendRequestAnchorEl(event.currentTarget);
  };

  const handleFriendRequestClose = () => {
    setFriendRequestAnchorEl(null);
  };

  return (
    <Box sx={{ px: "1rem" }}>
      <div className="w-full flex justify-between mt-8">
        {/* Friend Requests */}
        <Box sx={{ mt: 2, mb: 3 }}>
          <Button sx={stylesMui.reqButton} onClick={handleFriendRequestClick}>
            <Typography sx={stylesMui.reqButtonText}>
              Friend Requests
            </Typography>
          </Button>
          <Menu
            anchorEl={friendRequestAnchorEl}
            open={Boolean(friendRequestAnchorEl)}
            onClose={handleFriendRequestClose}
          >
            {friendRequests.map((request) => (
              <MenuItem key={request.id} onClick={handleFriendRequestClose}>
                <FriendRequestItem request={request} />
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Dropdown with friends */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography sx={stylesMui.reqButtonText}>Select Friend</Typography>
          <Typography sx={{ mr: 2 }}>
            {selectedFriend ? `Showing data for ${selectedFriend}` : ""}
          </Typography>
          <IconButton onClick={(event) => handleClick(event, selectedFriend)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {friendsList.map((friend, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {friend}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
      {/* Stats Comparison */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Self Stats */}
          <Paper sx={{ p: 3, borderRadius: 5 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Stats
            </Typography>
            {/* Your Stats Table - Replace with your actual data */}
            <TableComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Friend Stats */}
          <Paper sx={{ p: 3, borderRadius: 5 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Friend's Stats
            </Typography>
            {/* Friend's Stats Table - Replace with your actual data */}
            <TableComponent />
          </Paper>
        </Grid>
      </Grid>
      {/* Graphs Comparison */}
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} md={6}>
          {/* Self grah */}
          <Paper sx={{ p: 3, borderRadius: 5 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Daily Returns
            </Typography>
            <SystemBarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Friend graph */}
          <Paper sx={{ p: 3, borderRadius: 5 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Friend's Daily Returns
            </Typography>
            <SystemBarChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const TableComponent = () => {
  // Sample data for the table
  const tableData = [
    { date: "20-08", trades: 0.0, lots: 0.0, results: "$0.00" },
    // Add more rows as needed
  ];

  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-none">
          <tr className="border-b border-[#646464] dark:border-gray-700">
            <th scope="col" className="py-3">
              <Typography fontSize="16px">Date</Typography>
            </th>
            <th scope="col" className="py-3">
              <Typography fontSize="16px">Trades</Typography>
            </th>
            <th scope="col" className="py-3">
              <Typography fontSize="16px">Lots</Typography>
            </th>
            <th scope="col" className="py-3">
              <Typography fontSize="16px">Results</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[#646464] dark:border-gray-700"
            >
              <td className="py-4">
                <Typography fontSize="16px">{row.date}</Typography>
              </td>
              <td className="py-4">
                <Typography fontSize="16px">{row.trades}</Typography>
              </td>
              <td className="py-4">
                <Typography fontSize="16px">{row.lots}</Typography>
              </td>
              <td className="py-4">
                <Typography fontSize="16px">{row.results}</Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FriendRequestItem = ({ request }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText>{request.name}</ListItemText>
      <IconButton>
        <CheckIcon sx={{ color: "green" }} />
      </IconButton>
      <IconButton>
        <CloseIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default Friends;
