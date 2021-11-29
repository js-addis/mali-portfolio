import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

export default function Journal(props) {

    const setPageThreeInViewport = props.setPageThreeInViewport;
    
    const ref = useRef(null);
    const callback = (entries) => {
        const [ entry ] = entries
        setPageThreeInViewport(entry.isIntersecting)
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .5
    }
    const observer = new IntersectionObserver(callback, options)
    
    useEffect(() => {
        observer.observe(ref.current);
    })

    return(
        <Box ref={ref}>
            <Box sx={{height: '500px'}}></Box>
        </Box>
    )
}