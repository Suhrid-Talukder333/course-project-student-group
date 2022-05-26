import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const AccountProfile = ({ user }) => {
  console.log(user, 'Usdasdsdasd')
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={"https://randomuser.me/api/portraits/lego/1.jpg"}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${user.role && user.role.toUpperCase()}`}
          </Typography>
          {/* <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography> */}
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default AccountProfile;