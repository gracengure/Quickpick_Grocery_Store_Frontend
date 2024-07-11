import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, IconButton, Box, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import mobileIcon from './Assets/mobileicon.svg';
import emailIcon from './Assets/email-icn.svg';
import image from './Assets/home.png';

const SignInOptions = ({ handleOpen }) => {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>Let's sign you up</Typography>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <div
            onClick={() => handleOpen('phone')}
            style={{ display: "flex", alignItems: 'center', padding: "15px", width: '250px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', cursor: "pointer" }}
          >
            <img src={mobileIcon} height={"30px"} alt="" />
            <Typography style={{ color: '#032541', marginLeft: '10px' }}>Sign up with phone</Typography>
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={() => handleOpen('email')}
            style={{ display: "flex", alignItems: 'center', padding: "15px", width: '250px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', cursor: "pointer" }}
          >
            <img src={emailIcon} height={"30px"} alt="" />
            <Typography style={{ color: '#032541', marginLeft: '10px' }}>Sign up with email</Typography>
          </div>
        </Grid>
        <Grid item>
          <Link to='/login' style={{ textDecoration: 'none', }}>
            <Typography style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer', color: '#007BFF' }}>Already have an Account? Sign In</Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

const SignInForm = ({ signInWithEmail, signInWithPhone, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    showPassword: false,
    showRepeatPassword: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleShowRepeatPassword = () => {
    setFormData({ ...formData, showRepeatPassword: !formData.showRepeatPassword });
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
          <TextField label="Full Name" variant="outlined" fullWidth margin="normal" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" name="email" value={formData.email} onChange={handleInputChange}/>
          <TextField label="Password" type={formData.showPassword ? 'text' : 'password'} variant="outlined" fullWidth margin="normal" name="password" value={formData.password} onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField label="Repeat Password" type={formData.showRepeatPassword ? 'text' : 'password'} variant="outlined" fullWidth margin="normal" name="repeatPassword" value={formData.repeatPassword} onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle repeat password visibility"
                    onClick={handleShowRepeatPassword}
                    edge="end"
                  >
                    {formData.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Sign In with Email
          </Button>
        </form>
      )}
      {signInWithPhone && (
        <form onSubmit={handleSubmit}>
          <TextField label="Full Name" variant="outlined" fullWidth margin="normal" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
          <TextField label="Phone" variant="outlined" fullWidth margin="normal" name="phone" value={formData.phone} onChange={handleInputChange}/>
          <TextField label="Password" type={formData.showPassword ? 'text' : 'password'} variant="outlined" fullWidth margin="normal" name="password" value={formData.password} onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField label="Repeat Password" type={formData.showRepeatPassword ? 'text' : 'password'} variant="outlined" fullWidth margin="normal" name="repeatPassword" value={formData.repeatPassword} onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle repeat password visibility"
                    onClick={handleShowRepeatPassword}
                    edge="end"
                  >
                    {formData.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            Sign In with Phone
          </Button>
        </form>
      )}
    </Box>
  );
};

const SignUp = () => {
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
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
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

export default SignUp;
