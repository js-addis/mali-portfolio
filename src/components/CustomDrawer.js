import * as React from 'react';
import {Box, styled} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import ScrollingNavbar from './ScrollingNavbar';

export default function CustomDrawer(props) {

  const useAboutPage = props.useAboutPage;
  const useProjectsPage = props.useProjectsPage;
  const useJournalPage = props.useJournalPage;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)}

  const HamburgerButton = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('lg')]: {

    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }, 
    [theme.breakpoints.down('sm')]: {

    },
    position: 'fixed',
    display: 'none'
  }))

  return (
    <Box>
        <HamburgerButton onClick={handleOpen}>Open</HamburgerButton>
        <Drawer open={open} onClose={handleClose} anchor="left">
            <ScrollingNavbar 
                useAboutPage={useAboutPage}
                useProjectsPage={useProjectsPage}
                useJournalPage={useJournalPage}
                containerPosition={'relative'}
                smallDisplay={''}
                mediumDisplay={''}
            />
        </Drawer>
    </Box> 
  );
}