import React from 'react';
import { List, ListItem, Button, Box } from '@mui/material';
import useWindowDimensions from './WindowDimensions';

export default function ScrollingNavbar(props) {
    const {height} = useWindowDimensions();
    
    const pageOneInViewport = props.pageOneInViewport;
    const pageTwoInViewport = props.pageTwoInViewport;
    const pageThreeInViewport = props.pageThreeInViewport;
    return(
        <Box sx={{position: 'fixed', width: '450px', height: {height}, 
                  display: 'flex', flexDirection: 'column'}}>
            <List sx={{margin: 'auto'}}>    
                <ListItem sx={{display: 'flex'}}>{
                    pageOneInViewport ? 
                        <Button sx={{margin: 'auto', textDecoration: 'underline', textDecorationColor: 'lightpink', textDecorationStyle: 'solid', textDecorationThickness: '2px'}}>About</Button> : 
                        <Button sx={{margin: 'auto'}}>About</Button>
                }
                </ListItem>
                <ListItem sx={{display: 'flex'}}>{
                    pageTwoInViewport ? 
                        <Button sx={{margin: 'auto', textDecoration: 'underline', textDecorationColor: 'lightpink', textDecorationStyle: 'solid', textDecorationThickness: '2px'}}>Projects</Button> : 
                        <Button sx={{margin: 'auto'}}>Projects</Button>
                }
                </ListItem>
                <ListItem sx={{display: 'flex'}}>{
                    pageThreeInViewport ? 
                        <Button sx={{margin: 'auto', textDecoration: 'underline', textDecorationColor: 'lightpink', textDecorationStyle: 'solid', textDecorationThickness: '2px'}}>Journal</Button> : 
                        <Button sx={{margin: 'auto'}}>Journal</Button>
                }
                </ListItem>
            </List>
        </Box>
        
    )
}