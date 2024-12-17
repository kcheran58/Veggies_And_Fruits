import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Card.css';
export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: "4px",
      width: isSmallScreen ? '60%' : '50%', // Adjust the width based on the screen size
      height: isSmallScreen ? '60px' : { lg: '80px', md: '50px' }, // Adjust the height based on the screen size
    }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" sx={{ color: "black", fontFamily: "'Josefin Sans', sans-serif",fontWeight:"200" }}>Qty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ color: "black",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"200" }}
        >
          <MenuItem value={0.5}>0.5 kg</MenuItem>
<MenuItem value={1} >1 kg</MenuItem>
<MenuItem value={2}>2 kg</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
