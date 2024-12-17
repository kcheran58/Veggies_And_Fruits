import { useContext } from "react";
import Cart from "./Cart_Context";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles'; // Import useTheme
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './Header.css';
import Dropdown from './Dropdown';
import './Card.css';
import Box1 from './paper';
import Parallex from './parallex';
export default function User_Cart() {
  const [cart, add_Cart] = useContext(Cart);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Image = styled('img')(({ theme }) => ({ // Use theme in the styled component
    width: '100%',
    height: 'auto',
    maxWidth: '350px', // Set a default maximum width for the image
    [theme.breakpoints.up('md')]: {
      maxWidth: '250px', // Adjust the maximum width for medium-sized screens (md and up)
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '300px', // Adjust the maximum width for large screens (lg and up)
    },
  }));

  const theme = useTheme(); // Use useTheme hook to get the theme

  const [drag, setDrag] = React.useState(null);

  return (
    <>
      
      
      <Box sx={{ flexGrow: 1,backgroundColor:"white" }}>
        <Grid container spacing={4} columns={16}>
          {cart.map((obj) => (
            <Grid item xs={16} md={4} key={obj.Fruit}>
              {/* Added key prop */}
              <Box1 url={obj.URL} fruit={obj.Fruit} company={obj.Company} content={obj.Content} price={obj.Price} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
