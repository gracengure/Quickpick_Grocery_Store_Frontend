
import React from 'react';
import { Button } from '@mui/material';

const Logout = ({ handleLogout }) => {
  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
