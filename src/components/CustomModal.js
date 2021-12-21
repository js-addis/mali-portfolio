import React, {useEffect} from 'react';
import useWindowDimensions from './WindowDimensions';

import { Box, Button } from '@mui/material';

const container = {
  position: 'fixed',
  border: '1px solid black',
  backgroundColor: 'orange',
  marginLeft: '450px',
  outline: 'none',
  textTransform: 'Capitalize'
};

export default function CustomModal(props) {
  
  const {modalHeight, modalWidth} = useWindowDimensions();
  const modalOpen = props.modalOpen;
  const setModalOpen = props.setModalOpen;
  const handleModalClose = props.handleModalClose;

  return(
    <Box>
      {
        modalOpen ? 
        <Box height={modalHeight} width={modalWidth} sx={container}>
          <Button onClick={handleModalClose}>X</Button>
        </Box>
        :
        null
      }
    </Box>
     
  )
    

  
}