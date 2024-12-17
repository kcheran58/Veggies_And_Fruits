import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import './Details.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState,useEffect } from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Alert from '@mui/material/Alert';
import { BrowserRouter as Link } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/slice/userSlice';
import { logIn } from '../../../redux/slice/isLogged';
import { useNavigate } from 'react-router-dom';
export default function Details()
{
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
// Add this to your component
useEffect(() => {
  setShowForm(true);
}, []);
    
      const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState(null);
      const [pass1,setPass1]=useState(null);
      const [shake1,setShake1]=useState(false);
      const [shake2,setShake2]=useState(false);
      const [error,setError]=useState(null);
      const [success,setSuccess]=useState(false);
      const navigate = useNavigate();
      const handleClick=()=>{
        setError(false)
        if(password.length<8)
        {
setShake1(true);
setError("Password length must be greater than 8");
setSuccess(false);
setTimeout(() => {
  setShake1(false);
  setSuccess(false);
}, 500);
        }
        else if(password!==pass1)
        {
          setShake2(true);
          setError("Password and ConfirmPassword must be same")
          setSuccess(false)
          setTimeout(() => {
            setShake2(false);
          }, 500);
        }
        else{
            const post= async()=>{
            
             const res = await axios.post("http://localhost:3500/users",{"name":name,"email":email,"password":password});
             dispatch(addUser(res.data));
             dispatch(logIn());
             navigate('/home')
            }
            try{
              post();
              setSuccess(true);
            }
            catch(error)
            {
              console.log(error);
            }
        }
      }
    return(
      <>
      {error&&<Alert variant="filled" severity="error" sx={{width:"650px"}} className='alert-message'>
        {error}
      </Alert>}
      {
       success&& <Alert  variant="filled" severity="success" sx={{width:"650px"}} className='alert-message'>
          User successfully registered!
        </Alert>
      }
      <Paper elevation={24}  sx={{width:{ lg:"690px", sm:"200px"},height:"600px",backgroundColor:" #00ABE4",borderRadius:"20px"}}>
      <Paper elevation={20} sx={{width:"650px",height:"560px",backgroundColor:"#E9F1FA",borderRadius:"20px",boxShadow:"none"}}>
        <form className={`form1 ${showForm ? 'show' : ''}`}>
        <PersonPinIcon sx={{width:"60px",height:"60px"}}/>
                   <Grid container spacing={3} columns={2}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="name" style={{marginLeft:"-31%",marginBottom:"10px",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Name : </InputLabel>
<TextField id="outlined-basic" label="Name"  onChange={(event)=>setName(event.target.value)}   variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="email" style={{marginLeft:"-31%",marginBottom:"10px",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Email : </InputLabel>
  <TextField id="outlined-basic" type="email"  onChange={(event)=>setEmail(event.target.value)} label="Email" variant="outlined"  style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="password" style={{marginLeft:"-29%",marginBottom:"10px",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Password : </InputLabel>
  <TextField className={shake1?"shake":""} type="password"  id="outlined-basic" sx={{color:"error"}}  onChange={(event)=>{setPassword(event.target.value)}} value={password} label="Password"   variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <InputLabel htmlFor="password" style={{marginLeft:"-23%",marginBottom:"10px",fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Confirm Password : </InputLabel>
  <TextField className={shake2?"shake":""}    id="outlined-basic" onChange={(event)=>{setPass1(event.target.value)}} value={pass1} label="Confirm Password" type="password"  variant="outlined" style={{ width: '400px' }}/> 
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
  <Button variant="contained"  onClick={handleClick} >Register</Button>
  <Divider />

  </Grid>
</Grid>
        </form>
        </Paper>
        </Paper>
    </>
    )
}