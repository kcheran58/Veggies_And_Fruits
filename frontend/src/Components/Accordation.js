import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Fresho</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Organic</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Gopal Organic</Typography>}
      />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Less than Rs 20</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Rs 21 to Rs 50</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Rs 51 to Rs 100</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Rs 101 to Rs 200</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>More than Rs 500</Typography>}
      />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
      
        <FormControlLabel
      control={<Checkbox />}
      label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>More than 25%</Typography>}
    />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} >Country Of Origin</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
      
        <FormControlLabel
      control={<Checkbox />}
      label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>India</Typography>}
    />
    </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}} >Pack Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
      
        <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>Combo 2 Items</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>4 pcs (Approx 600-700gms)</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>4 pcs (Approx 550-650gms)</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>4 pcs (Approx 720-800gms)</Typography>}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography variant="body2" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>4 pcs (Approx 550-6400gms)</Typography>}
      />

    </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}