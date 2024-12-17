import *  as React from 'react';
import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BasicAccordion from './Accordation';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';
import './Drawer.css';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrowserRouter as Router, Routes, Route, Link,useLocation } from "react-router-dom";
import User_Cart from './Cart';
import { useSelector } from 'react-redux';
import ProfileDialog from './ProfileDialog/ProfileDialog';
import { useDispatch } from 'react-redux';
import { addProductInUser } from '../redux/slice/userSlice';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const dispatch=useDispatch();
  const isLogged=useSelector((state)=>state.isLogged);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isProfile,setProfile] = useState(false);
const a=useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  var id=1;
const handleDialog=()=>{
 setProfile(!isProfile);
 dispatch(addProductInUser(id++));
}
const [Logged,setLogged]=useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }} open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="tracking-in-contract-bck" sx={{ fontFamily: "'Josefin Sans', sans-serif",fontWeight:"500", textOverflow: "clip",color:"black"}}>
            FreshHarvest Hub
          </Typography>
          <Hidden mdDown>
            <Box sx={{ ml: 'auto' }}>
                      <Button color="inherit" component={Link} to="/"><span style={{color:"black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} className='snake-border'>Home</span></Button>
                      <Button color="inherit" component={Link} to="/contact"><span style={{color:"black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} className='snake-border' >Contact</span></Button>
                      <Button color="inherit" component={Link} to="/about"><span style={{color:"black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} className='snake-border'>About Us</span></Button>
                      <Button color="inherit" component={Link} to="/cart"><span style={{color:"black"}} className='snake-border'><ShoppingCartIcon /></span></Button>
                  {isLogged ? <><Button color="inherit" component={Link} to="/"><span style={{color:"black"}} onClick={handleDialog} className='snake-border'><AccountCircleIcon sx={{width:'60px',height:'50px'}}/></span></Button>
                           {isProfile && <ProfileDialog onClose={handleDialog}/> }
                            </>
                            :<>
                                 <Button color="inherit" component={Link} to="/login"><span style={{color:"black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} className='snake-border'>Login</span></Button>
                                 <Button color="inherit" component={Link} to="/signup"><span style={{color:"black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} className='snake-border'>SignUp</span></Button>
                             </>
                      }
 

            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BasicAccordion />
          </AccordionDetails>
        </Accordion>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {a.pathname==='/cart'?<User_Cart />:<Card />}
      </Main>
    </Box>
  );
}
