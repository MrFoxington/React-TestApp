import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { NavLink } from "react-router";


const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <InboxIcon/>,
  },
  {
    path: '/expenseTracker',
    name: 'Expense Tracker',
    icon: <MailIcon/>,
  },  
  {
    path: '/taskTracker',
    name: 'Task Tracker',
    icon: <MailIcon/>,
  },
  {
    path: '/about',
    name: 'About',
    icon: <MailIcon/>,
  },
];

import { useNavigate } from "react-router";
export default function TemporaryDrawer({open, toggleDrawer}) {

  let Navigate = useNavigate();

  const DrawerItem = ({route}) => {
    return (
      <ListItem key={route.path} disablePadding>
        <ListItemButton onClick={() => Navigate(route.path)}>
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItemButton>
      </ListItem>
    );
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((route, index) => (
          <DrawerItem route={route} key={index}/>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
       <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


