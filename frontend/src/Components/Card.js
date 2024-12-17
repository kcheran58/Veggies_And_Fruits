import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Header.css';
import './Card.css';
import Box1 from './paper';
import Parallex from './parallex';
import ContactUs from './ContactUs';
import { useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import axios from 'axios';



// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Card() {
  const location = useLocation();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3500/products");
        const shuffledData = shuffleArray(res.data);
        setProducts(shuffledData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  if (location.pathname === '/contact') return <ContactUs />;
  if (location.pathname === '/about') return <AboutUs />;

  return (
    <>
      <Parallex />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={16}>
          {products.map((obj) => (
            <Grid item xs={16} md={4} key={obj.name}> {/* Added key prop */}
              <Box1 url={obj.url} fruit={obj.name} company={obj.company} content={obj.content} price={obj.price} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
