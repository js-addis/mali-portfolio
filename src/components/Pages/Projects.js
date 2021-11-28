import React, { useRef, useEffect } from 'react';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


export default function Projects(props) {

    const setPageTwoInViewport = props.setPageTwoInViewport;
    
    const ref = useRef(null);
    const callback = (entries) => {
        const [ entry ] = entries
        setPageTwoInViewport(entry.isIntersecting)
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }
    const observer = new IntersectionObserver(callback, options)
    
    useEffect(() => {
        observer.observe(ref.current);
    })

    function Project(props) {
        const text1 = props.text1
        const image1 = props.image1
        return (
            <Grid xs={4}>
                <Card sx={{border: '1px solid lightgrey', margin: '12px', borderRadius: '0', boxShadow: 'none'}}>
                    <CardMedia 
                        component="img"
                        height="80"
                        image={image1}>

                    </CardMedia>
                    <CardContent></CardContent>
                    <CardActions></CardActions>
                </Card>
            </Grid> 
        )
    }

    return(
        <Box className="Projects" ref={ref} >
            <Grid container spacing={0}>
                <Project 
                    text1={'gay'}
                    image1={null}>        
                </Project>
                <Project 
                    text1={'gay'}>    
                </Project>
                <Project 
                    text1={'gay'}>    
                </Project>
                <Project 
                    text1={'gay'}>    
                </Project>
                <Project 
                    text1={'gay'}>    
                </Project>
                <Project 
                    text1={'gay'}>    
                </Project>
            </Grid>
        </Box>
    )
}