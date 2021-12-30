import React, { useEffect, useState } from "react"
import { Box, createTheme, ThemeProvider, styled } from '@mui/material';
import './App.css';
import About from './components/Pages/About';
import Projects from "./components/Pages/Projects";
import Journal from "./components/Pages/Journal";
import ScrollingNavbar from "./components/ScrollingNavbar";
import WebFont from 'webfontloader';
import CustomDrawer from './components/CustomDrawer';

function App() {

  const [projectsPage, setProjectsPage] = useState(false);
  const [aboutPage, setAboutPage] = useState(true);
  const [journalPage, setJournalPage] = useState(false);

  function useAboutPage() {
    setAboutPage(true) 
    setJournalPage(false)
    setProjectsPage(false)}
  function useProjectsPage() {
    setAboutPage(false) 
    setJournalPage(false) 
    setProjectsPage(true)}
  function useJournalPage() {
    setAboutPage(false) 
    setJournalPage(true) 
    setProjectsPage(false)} 

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['IBM Plex Mono', 'IBM Plex Sans', 'IBM Plex Serif']
      }
    })
  })
  const theme = createTheme({
    border: {
      primary: {
        main: '1px solid #e0e0e0'
      }
    },
    palette: {
      primary: {
        main: '#757575'
      },
      secondary: {
        main: '#9e9e9e',
      },
    },
  });

  const PageContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
      marginLeft: '470px'
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '300px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px'
    },
    height: window.innerHeight,
    backgroundColor: 'white',
    marginLeft: '470px',
    display: 'flex',
    zIndex: 0
  }))

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Scrolling Navbar <3 */}
        <ScrollingNavbar
          useAboutPage={useAboutPage}
          useProjectsPage={useProjectsPage}
          useJournalPage={useJournalPage}
          containerPosition={'fixed'}
          mediumDisplay={'none'}
          smallDisplay={'none'}
        />
        <PageContainer> 
          <CustomDrawer
            useAboutPage={useAboutPage}
            useProjectsPage={useProjectsPage}
            useJournalPage={useJournalPage}
          />
          { aboutPage ? <About/> : projectsPage ? <Projects/> : journalPage ? <Journal/> : null } 
        </PageContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
