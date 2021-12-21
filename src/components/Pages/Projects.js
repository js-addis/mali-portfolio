import React, { useRef, useEffect } from 'react';
import { Box, Grid, styled } from '@mui/material';

import Project from '../Project';

export default function Projects(props) {

    const handleModalOpen = props.handleModalOpen;
    const handleModalClose = props.handleModalClose;
    const modalOpen = props.modalOpen;

    const Container = styled(Box)(({theme}) => ({
        paddingLeft: '450px', paddingRight: '280px', paddingTop: '50px', paddingBottom: '50px'
    }))

    return(
        <Container className="Projects">
            <Grid container spacing={0}>
                <Project 
                    handleModalOpen={handleModalOpen}
                    title={'Project One'}
                    text1={'gay'}
                    image1={null}>       
                </Project>
                <Project
                    handleModalOpen={handleModalOpen}
                    title={'Project Two'}
                    text1={'gay'}
                    image1={null}>     
                </Project>
                <Project
                    handleModalOpen={handleModalOpen}
                    title={'Project Three'}
                    text1={'gay'}
                    image1={null}>     
                </Project>
                <Project
                   handleModalOpen={handleModalOpen}
                    title={'Project Four'}
                    text1={'gay'}
                    image1={null}>     
                </Project>
                <Project
                    handleModalOpen={handleModalOpen}
                    title={'Project Five'}
                    text1={'gay'}
                    image1={null}>     
                </Project>
                <Project
                    handleModalOpen={handleModalOpen}
                    title={'Project Six'}
                    text1={'gay'}
                    image1={null}>     
                </Project>
            </Grid>
        </Container>
    )
}