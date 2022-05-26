import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import NavSection from './NavSection';
import navConfig from './NavConfig';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[300],
}));

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const [loggedUser, setLoggedUser] = useState({});
  const [nav, setNav] = useState(navConfig.student);

  useEffect(() => {
    let user = window.localStorage.getItem("loggedUser");
    user = JSON.parse(user);
    if(user) {
      setLoggedUser(user);
      console.log(user);
      if(user.role === "teacher") {
        setNav(navConfig.teacher);
      }
    }
  },[])

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={"https://randomuser.me/api/portraits/lego/1.jpg"} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {loggedUser.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {loggedUser.role && loggedUser.role.toUpperCase()}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
      <NavSection navConfig={nav} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <RootStyle>
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: '#f1f1f2',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
    </RootStyle>
  );
}
