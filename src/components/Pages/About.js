import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

export default function About(props) {

    const setPageOneInViewport = props.setPageOneInViewport;
    
    const ref = useRef(null);
    const callback = (entries) => {
        const [ entry ] = entries
        setPageOneInViewport(entry.isIntersecting)
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

    return(
        <Box ref={ref}>
            
        </Box>
    )
}