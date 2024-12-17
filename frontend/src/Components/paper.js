  import * as React from 'react';
  import { styled, useTheme } from '@mui/system';
  import Box from '@mui/material/Box'; // Import the Box component
  import Paper from '@mui/material/Paper';
  import {  Typography } from '@mui/material';
  import './Header.css';
  import Dropdown from './Dropdown';
  import './Card.css';
import Rating from './starBorder';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import cart from './Cart_Context';
import Cart from './Cart_Context';
import Login from './login/login';
import { useLocation } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ContactUs from './ContactUs';
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      height: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '160px',
    },
  }));

  export default function Box1({ url, fruit, company, content, price }) {
    const theme = useTheme();
    const [drag, setDrag] = React.useState(null);
   const [cart,add_Cart]=React.useContext(Cart);
   const obj={
    Fruit:fruit,
    Company:company,
    Content:content,
    Price:price,
    URL:url
   }
  React.useEffect(()=>{console.log(cart);},[cart])
  const handleClick = () => {
    const isItemInCart = cart.some((item) => item.Fruit === obj.Fruit);
  
    if (!isItemInCart) {
      add_Cart([...cart, obj]);
    }
  
    console.log(cart);
  };
  const handleRemoveFromCart = () => {
    // Filter out the item to remove
    const updatedCart = cart.filter((cartItem) => cartItem.Fruit !== fruit);
    add_Cart(updatedCart);
  };
const findItem=()=>{
  const selected_item=cart.some((item)=>obj.Fruit===item.Fruit);
  if(!selected_item)
  {
    return false;
  }
  return true;
}
  const a=useLocation();
console.log(a.pathname);
    return (
      <>

  <Box className={`bottom-to-top-content ${drag ? 'open' : ''}`} sx={{ backgroundColor: 'black',marginLeft: {lg: '100px',md:'50px' } ,width: { lg: '100px',md:'50px' }, borderRadius: '10px', textAlign: 'center' }}>
          <Typography sx={{ color: 'white',fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>$ {price}</Typography>
        </Box>
        <Paper
          sx={{ borderRadius: '20px', backgroundColor: '#F5F5F5', width: { lg: '300px', md: '250px', xs: '100%' } ,touchAction: 'manipulation'}}
          onMouseOver={() => {
            setDrag(true);
          }}
          onMouseOut={() => {
            setDrag(false);
          }}
          
        >
          <Image className={drag ? 'image-with-border img' : ''} src={url} alt={fruit} sx={{ border: '1px solid black' }} />
          <Typography variant='h5' sx={{ color: 'black', fontFamily:" 'Josefin Sans', sans-serif", textAlign: 'center', marginLeft: '5px', fontSize: { lg: '20px', md: '15px', xs: '10px' } }}>{fruit}</Typography>

          {drag && (
            <Box className='mouseover' >
              <Typography sx={{ color: '#FF6347', fontFamily:"'Josefin Sans', sans-serif", textAlign: 'start', marginLeft: '5px' }}>{company}</Typography>
              <Typography variant='h6' sx={{ color: 'black', fontFamily: "'Josefin Sans', sans-serif",fontWeight:"200", textAlign: 'start', marginLeft: '5px', fontSize: { lg: '20px', md: '15px', xs: '10px' }}}>{content}</Typography>
              <Dropdown />
              {a.pathname!=='/cart'?<FontAwesomeIcon icon={faCartPlus} bounce size="lg" onClick={handleClick}   style={{color: "#0f0f10"}} className='btn'/>: <FontAwesomeIcon icon={faTrash} onClick={handleRemoveFromCart} className='btn '/>}
              <Rating />
              <hr />
              <div class="box-1">
  <div class="btn btn-one">
    <span style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400",color:"red"}}>Buy Now</span>
  </div>
</div>
 
            </Box>
          )}
        </Paper>
      </>
    );
  }
