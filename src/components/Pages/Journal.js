import React, { useRef, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import useWindowDimensions from '../WindowDimensions';
import styleFunctionSx from '@mui/system/styleFunctionSx';

export default function Journal(props) {

    const {height, width} = useWindowDimensions();
// CSS ---------------------- CSS //
    const container = {
        margin: 'auto',
        marginLeft: '0px',
    }
    const section = {
        height: 'auto',
        width: '400px',
        border: '1px solid lightgrey',
        marginLeft: '0px',
        margin: 'auto'
    }
    const divider = {
        marginTop: '15px',
        marginBottom: '15px'
    }
// CSS ----------------------- CSS //
    function Article(props) {
        const title = props.title
        const style = {
            width: '100%',
            height: '40px',
            margin: 'auto',
            justifyContent: 'left',
            fontFamily: 'IBM Plex Mono',
            padding: '15px',
            textTransform: 'Capitalize'
        }
        return (
            <Button sx={style}>{title}</Button>
        )
    }
    function SectionTitle(props) {
        const title = props.title
        const style = {
            width: '100%',
            height: 'auto',
            padding: '10px',
            borderBottom: '1px solid lightgrey',
            fontFamily: 'IBM Plex Mono'
        }
        return (
            <Box sx={style}>{title}</Box>
        )
    }
    return(
        <Box sx={container}>
            <Box sx={section}>
                <SectionTitle title={'Thesis'} />
                <Article title={'Article 1'}></Article>
                <Article title={'Article 2'}></Article>
                <Article title={'Article 3'}></Article>
            </Box>
            <Box sx={divider}></Box>
            <Box sx={section}>
                <SectionTitle title={'Thesis'} />
                <Article title={'Article 1'}></Article>
                <Article title={'Article 2'}></Article>
                <Article title={'Article 3'}></Article>
            </Box>
        </Box>
        
    )
}