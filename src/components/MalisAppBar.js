import * as React from 'react';
import { Button, Box } from '@mui/material';

import useWindowDimensions from './WindowDimensions';

export default function ButtonAppBar() {

  return (
    <Box sx={{display: 'flex', position: 'fixed', width: '100%', backgroundColor: 'secondary.main'}}>
      <Button>Native Systems</Button>
      {/*
      <Box sx={{backgroundColor: 'primary.main', height: '35px', width: '60%', margin: 'auto', marginLeft: '19%'}}>
      </Box>
      */}
    </Box>
  );
}