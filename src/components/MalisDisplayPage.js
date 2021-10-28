import * as React from 'react';
import { Box } from '@mui/material';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

export default function MalisDisplayPage(props) {

    const Page = ({ page1State, page2State, page3State }) => 
                    page1State ? <Page1/> :
                    page2State ? <Page2/> :
                    page3State ? <Page3/> : 
                    null;

    return(

        <Box sx={{paddingLeft: '300px', paddingTop: '50px'}}>
            <Page page1State={props.page1State}
                  page2State={props.page2State}
                  page3State={props.page3State}>
            </Page>
        </Box>

    )  
}