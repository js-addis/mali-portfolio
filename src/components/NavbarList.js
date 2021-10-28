// REACT
import * as React from 'react';
// MUI
import { Typography, Box, List, ListItem, Button } from '@mui/material'
// CUSTOM FUNCTIONS
import useWindowDimensions from './WindowDimensions';


export default function NavbarList(props) {

  const setPage1State = props.setPage1State;
  const setPage2State = props.setPage2State;
  const setPage3State = props.setPage3State;

  const { height } = useWindowDimensions();

  return (
    
      <Box  sx={{ height: {height}, width: '250px', display: 'flex', position: 'fixed', backgroundColor: 'white'}}>
        <Box sx={{ display: 'inline-block', margin: 'auto' }}>
          <List>
            <ListItem>
              <Button onClick={setPage1State}>Page1</Button>
            </ListItem>
            <ListItem>
              <Button onClick={setPage2State}>Page2</Button>
            </ListItem>
            <ListItem>
              <Button onClick={setPage3State}>Page3</Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    
  );
}