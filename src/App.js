import React, { useEffect, useState } from "react"
import { Box, Divider, createTheme, ThemeProvider, styled, Typography } from '@mui/material';
import './App.css';
import About from './components/Pages/About';
import Projects from "./components/Pages/Projects";
import Journal from "./components/Pages/Journal";
import ScrollingNavbar from "./components/ScrollingNavbar";
import WebFont from 'webfontloader';

function App() {
  const [ pageOneInViewport, setPageOneInViewport ] = useState(false);
  const [ pageTwoInViewport, setPageTwoInViewport ] = useState(false);
  const [ pageThreeInViewport, setPageThreeInViewport ] = useState(false);  

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['IBM Plex Mono', 'IMB Plex Sans', 'IBM Plex Serif']
      }
    })
  })
  const theme = createTheme({
    palette: {
      primary: {
        main: '#757575'
      },
      secondary: {
        main: '#9e9e9e',
      },
    },
  });
  const Heading = styled(Typography)(({theme}) => ({
    fontFamily: 'IBM Plex Sans',
    fontSize: '22px',
    margin: 'auto',
  }))

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Scrolling Navbar <3 */}
        <ScrollingNavbar
          Heading={Heading}
          pageOneInViewport={pageOneInViewport} 
          pageTwoInViewport={pageTwoInViewport} 
          pageThreeInViewport={pageThreeInViewport}>
        </ScrollingNavbar>
        {/* About */}
        <About setPageOneInViewport={setPageOneInViewport}></About>
        {/* Projects */}
        <Projects setPageTwoInViewport={setPageTwoInViewport}></Projects>
        {/* Journal */}
        <Journal setPageThreeInViewport={setPageThreeInViewport}></Journal>
      </Box>
    </ThemeProvider>
  );
}

export default App;
