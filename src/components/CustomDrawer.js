import * as React from 'react';
import {Drawer, Button, Box, List, ListItem, Typography} from '@mui/material';

export default function CustomDrawer() {
    const [state, setState] = React.useState({});

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    
    return (
        <div sx={{zIndex: '1'}}>
          <Button onClick={toggleDrawer('left', true)}>{'open drawer'}</Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            <Box>
                <Box>
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
          </Drawer>
        </div>
      );
}