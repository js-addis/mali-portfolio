import React, { useState } from "react"
import { Box, Divider } from '@mui/material';
import './App.css';
import About from './components/Pages/About';
import Projects from "./components/Pages/Projects";
import Journal from "./components/Pages/Journal";
import ScrollingNavbar from "./components/ScrollingNavbar";

function App() {
const [ pageOneInViewport, setPageOneInViewport ] = useState(false);
const [ pageTwoInViewport, setPageTwoInViewport ] = useState(false);
const [ pageThreeInViewport, setPageThreeInViewport ] = useState(false);  

  return (
    <Box className="App">

      {/*<Box sx={{top: '100px', bottom: '100px', left: '160px', right: '160px', 
                position: 'fixed', boxShadow: '0px 10px 10px grey', 
                overflowY: 'scroll', backgroundColor: 'white'}}>*/}
      
        <ScrollingNavbar
          pageOneInViewport={pageOneInViewport} 
          pageTwoInViewport={pageTwoInViewport} 
          pageThreeInViewport={pageThreeInViewport}>
        </ScrollingNavbar>
        
        <Box sx={{paddingLeft: '450px', paddingRight: '290px', paddingTop: '50px', paddingBottom: '50px'}}>
          
          <About setPageOneInViewport={setPageOneInViewport}></About>

          <Divider sx={{marginTop: '150px', marginBottom: '150px'}}/>

          <Projects setPageTwoInViewport={setPageTwoInViewport}></Projects>

          <Divider sx={{marginTop: '150px', marginBottom: '150px'}}/>

          <Journal setPageThreeInViewport={setPageThreeInViewport}></Journal>

          <Divider sx={{marginTop: '150px', marginBottom: '150px'}}/>

        </Box>
      </Box>
    
    /*</Box>*/
  );
}

export default App;
