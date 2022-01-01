import * as React from 'react';
import {Box, styled} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import ScrollingNavbar from './ScrollingNavbar';
import zIndex from '@mui/material/styles/zIndex';

export default function CustomDrawer(props) {

  const aboutPage = props.aboutPage
  const projectsPage = props.projectsPage
  const journalPage = props.journalPage

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
        display: 'block',
        margin: 'none'
    },
    position: 'fixed',
    display: 'none',
    left: '10px',
    top: '7px',
    border: theme.border.primary.main
  }))

  return (
    <Box>
        <HamburgerButton onClick={handleOpen}>/</HamburgerButton>
        <Drawer open={open} onClose={handleClose} anchor="left">
            <ScrollingNavbar
                aboutPage={aboutPage}
                projectsPage={projectsPage}
                journalPage={journalPage} 
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