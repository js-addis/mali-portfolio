import React, { useRef, useEffect } from 'react';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Typography, styled } from '@mui/material';

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
        threshold: .7
    }
    const observer = new IntersectionObserver(callback, options)
    
    useEffect(() => {
        observer.observe(ref.current);
    })

    const Container = styled(Box)(({theme}) => ({
        paddingLeft: '450px', paddingRight: '280px', paddingTop: '50px', paddingBottom: '50px'
    }))
    
    function Project(props) {
        const text1 = props.text1
        const image1 = props.image1
        const title = props.title
        return (
            <Grid xs={4}>
                <Card sx={{border: '1px solid lightgrey', margin: '12px', borderRadius: '0', boxShadow: 'none'}}>
                    <CardContent sx={{textAlign: 'center', fontFamily: 'IMB Plex Mono'}}>
                        {title}
                    </CardContent>
                    <CardMedia 
                        component="img"
                        height="80"
                        image={image1}>

                    </CardMedia>
                    <CardContent sx={{fontFamily: 'IBM Plex Serif', textAlign: 'center'}}>{text1}</CardContent>
                    <CardActions></CardActions>
                </Card>
            </Grid> 
        )
    }

    return(
        <Container className="Projects" ref={ref} >
            <Grid container spacing={0}>
                <Project 
                    title={'Project One'}
                    text1={'gay'}
                    image1={null}>        
                </Project>
                <Project 
                    title={'Project Two'}
                    text1={'gay'}>    
                </Project>
                <Project 
                    title={'Project Three'}
                    text1={'gay'}>    
                </Project>
                <Project 
                    title={'Project Four'}
                    text1={'gay'}>    
                </Project>
                <Project 
                    title={'Project Five'}
                    text1={'gay'}>    
                </Project>
                <Project 
                    title={'Project Six'}
                    text1={'gay'}>    
                </Project>
            </Grid>
        </Container>
    )
}