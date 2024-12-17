import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Container, TextField, CssBaseline, Typography, Grid, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { addUser } from '../../redux/slice/userSlice';
import { logIn } from '../../redux/slice/isLogged';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);
  const [user,setUser]=useState();
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Clear error state on new attempt
    if (error) {
      setError(false);
    }

    try {
      const res = await axios.get(`http://localhost:3500/user/${email}/${password}`);
  
    setUser(res.data);
     
      console.log(user);
      if (!user) {
        setError(true);
        setSuccess(false);
      } else {
        setSuccess(true);
        dispatch(addUser(user));
        dispatch(logIn());
       navigate("/home");
      }
    } catch (error) {
      console.log("error")
      console.error("Error fetching user data:", error);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      {error && (
        <Alert variant="filled" severity="error" sx={{ width: "100%", marginBottom: '16px' }}>
          Username or password doesn't match
        </Alert>
      )}
      {success && (
        <Alert variant="filled" severity="success" sx={{ width: "100%", marginBottom: '16px' }}>
          Logged in successfully!
        </Alert>
      )}
      <CssBaseline />
      <Grid container spacing={0} style={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} style={{ backgroundImage: 'url(https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Additional content for larger screens if needed */}
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
          <Typography component="h1" variant="h5" sx={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: "700", marginBottom: '16px' }}>
            FreshHarvest Hub
          </Typography>
          <form onSubmit={handleClick} style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
              <FontAwesomeIcon icon={faUser} />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                sx={{ marginLeft: "5px" }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
              <FontAwesomeIcon icon={faLock} />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                sx={{ marginLeft: "5px" }}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0' }}
            >
              Login
            </Button>
          </form>
          <Typography style={{ marginBottom: '16px', fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>
            New User? <Link to="/signup" style={{ color: 'black' }}>Register</Link>
          </Typography>
          <Typography style={{ marginBottom: '16px', fontFamily: "'Josefin Sans', sans-serif", fontWeight: "400" }}>
            <Link to="#" style={{ color: 'black' }}>
              Forgot Password?
            </Link>
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <GoogleIcon style={{ marginRight: '10px' }} />
            <FacebookIcon style={{ marginLeft: '5px' }} />
            <TwitterIcon style={{ marginLeft: '10px' }} />
          </div>
          
        </Grid>
      </Grid>
    </Container>
  );
}
