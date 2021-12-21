import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Backdrop, Modal, Fade, Button } from '@mui/material';
import useWindowDimensions from './WindowDimensions';

export default function Project(props) {

    const {modalHeight, modalWidth} = useWindowDimensions();

    const text1 = props.text1
    const image1 = props.image1
    const title = props.title

    const handleModalOpen = props.handleModalOpen
    
    return (
        
        <Grid xs={4}>
            <Card sx={{border: '1px solid lightgrey', margin: '12px', borderRadius: '0', boxShadow: 'none', cursor: 'pointer'}} onClick={handleModalOpen}>
                <CardContent sx={{textAlign: 'center', fontFamily: 'IMB Plex Mono'}}>
                    {title}
                </CardContent>
                <CardMedia 
                    component="img"
                    height="80"
                    image={image1}>
                </CardMedia>
                <CardContent sx={{fontFamily: 'IBM Plex Serif', textAlign: 'center'}}>{text1}
                    
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Grid>
        
    )
}