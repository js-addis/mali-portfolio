// REACT
import * as React from 'react';
// MUI
import { Typography, Box, List, ListItem } from '@mui/material'
// CUSTOM FUNCTIONS
import useWindowDimensions from './WindowDimensions';


export default function NavbarList() {

  const { height } = useWindowDimensions();

  return (
    
      <Box  sx={{ height: {height}, width: '300px', display: 'flex', position: 'fixed', backgroundColor: 'white'}}>
        <Box sx={{display: 'inline-block', margin: 'auto'}}>
          <List>
            <ListItem>
              <Typography color="primary">Mali's Item 1</Typography>
            </ListItem>
            <ListItem>
              <Typography color="primary">Mali's Item 2</Typography>
            </ListItem>
            <ListItem>
              <Typography color="primary">Mali's Item 3</Typography>
            </ListItem>
            <ListItem>
              <Typography color="primary">Mali's Item 4</Typography>
            </ListItem>
            <ListItem>
              <Typography color="primary">Mali's Item 5</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    
  );
}