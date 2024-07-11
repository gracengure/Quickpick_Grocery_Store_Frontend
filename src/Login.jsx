import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, IconButton, Box } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import mobileIcon from './Assets/mobileicon.svg';
import emailIcon from './Assets//email-icn.svg';
import image from './Assets/home.png';

const SignInOptions = ({ handleOpen }) => {
  return (
    <div>
        <Typography variant="h5" style={{ marginBottom: '20px' }}>Let's sign you in</Typography>
        <Grid container direction="column" spacing={2}>
            <Grid item>
            <div
                onClick={() => handleOpen('phone')}
                style={{ display: "flex", alignItems: 'center', padding: "15px", width: '250px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', cursor: "pointer" }}
            >
                <img src={mobileIcon} height={"30px"} alt="" />
                <Typography style={{ color: '#032541', marginLeft: '10px' }}>Sign in with phone</Typography>
            </div>
            </Grid>
            <Grid item>
            <div
                onClick={() => handleOpen('email')}
                style={{ display: "flex", alignItems: 'center', padding: "15px", width: '250px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', cursor: "pointer" }}
            >
                <img src={emailIcon} height={"30px"} alt="" />
                <Typography style={{ color: '#032541', marginLeft: '10px' }}>Sign in with email</Typography>
            </div>
            </Grid>
            <Grid item>
                <Link to='/signup' style={{ textDecoration: 'none', }}>
                    <Typography style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer', color: '#007BFF' }}>Don't have an account? Sign up</Typography>
                </Link>
            {/* <Typography style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer', color: '#007BFF' }}>Don't have an account? Sign up</Typography> */}
            </Grid>
        </Grid>
    </div>
  );
};

const SignInForm = ({ signInWithEmail, signInWithPhone, handleClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signInWithEmail) {
      console.log('Signing in with email:', formData.email, formData.password);
    } else if (signInWithPhone) {
      console.log('Signing in with phone:', formData.phone, formData.password);
    }
    handleClose();
  };

  return (
    <Box sx={{ padding: 4, width: '100%', bgcolor: 'background.paper', borderRadius: '8px' }}>
      <IconButton onClick={handleClose} style={{ marginBottom: '1rem' }}>
        <ArrowBackIcon />
      </IconButton>
      <h2>Sign In</h2>
      {signInWithEmail && (
        <form onSubmit={handleSubmit}>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" name="email" value={formData.email} onChange={handleInputChange}/>
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" name="password" value={formData.password} onChange={handleInputChange}/>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Sign In with Email
          </Button>
        </form>
      )}
      {signInWithPhone && (
        <form onSubmit={handleSubmit}>
          <TextField label="Phone" variant="outlined" fullWidth margin="normal" name="phone" value={formData.phone} onChange={handleInputChange}/>
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" name="password" value={formData.password} onChange={handleInputChange}/>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Sign In with Phone
          </Button>
        </form>
      )}
    </Box>
  );
};

const Login = () => {
  const [signInWithEmail, setSignInWithEmail] = useState(false);
  const [signInWithPhone, setSignInWithPhone] = useState(false);

  const handleOpen = (method) => {
    setSignInWithEmail(method === 'email');
    setSignInWithPhone(method === 'phone');
  };

  const handleClose = () => {
    setSignInWithEmail(false);
    setSignInWithPhone(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh',backgroundColor: 'white' }}>
      <Grid item xs={12} sm={6}>
        <img src={image} alt="Auth" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </Grid>
      <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
        {signInWithEmail || signInWithPhone ? (
          <SignInForm
            signInWithEmail={signInWithEmail}
            signInWithPhone={signInWithPhone}
            handleClose={handleClose}
          />
        ) : (
          <SignInOptions handleOpen={handleOpen} />
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
