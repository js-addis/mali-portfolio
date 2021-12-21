import React, { useEffect, useState, useRef } from "react"
import { Box, createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import About from './components/Pages/About';
import Projects from "./components/Pages/Projects";
import Journal from "./components/Pages/Journal";
import ScrollingNavbar from "./components/ScrollingNavbar";
import Project from './components/Project';
import CustomModal from "./components/CustomModal";
import WebFont from 'webfontloader';
import useWindowDimensions from "./components/WindowDimensions";

function App() {

  const {height, width} = useWindowDimensions();
  
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

  const [modalOpen, setModalOpen] = useState('');
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false);

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

  const container = {
    height: {height},
    backgroundColor: 'white',
    marginLeft: '470px',
    display: 'flex',
  }

  return (
    <ThemeProvider theme={theme}>
      <Box id="App">
         <CustomModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleModalClose={handleModalClose}
            handleModalOpen={handleModalOpen}
         />
        {/* Scrolling Navbar <3 */}
        <ScrollingNavbar
          useAboutPage={useAboutPage}
          useProjectsPage={useProjectsPage}
          useJournalPage={useJournalPage}
        />
        <Box sx={container}> {
            aboutPage ? <About/> : projectsPage ? <Projects handleModalOpen={handleModalOpen}/> : journalPage ? <Journal/> : null
        }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
