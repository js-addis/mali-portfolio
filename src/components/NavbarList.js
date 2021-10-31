// REACT
import * as React from 'react';
// MUI
import { Typography, Box, List, ListItem, ListItemText, Button, Tabs, Tab } from '@mui/material'
// CUSTOM FUNCTIONS
import useWindowDimensions from './WindowDimensions';


export default function NavbarList(props) {

  const setPage1State = props.setPage1State;
  const setPage2State = props.setPage2State;
  const setPage3State = props.setPage3State;

  const { height } = useWindowDimensions();

  return (
    
      <Box  sx={{ height: {height}, width: '400px', display: 'flex', position: 'fixed', backgroundColor: 'white'}}>
        <Box sx={{ display: 'inline-block', margin: 'auto' }}>
          <List>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
            <ListItem>
              <Button>Mali's Item 1</Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    
  );
}