import React, { useState } from 'react';
import { Box, styled, Typography, Grid } from '@mui/material';

export default function About(props) {

    // MUI CUSTOM COMPONENTS

    const Container = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {
            margin: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            border: 'none'
        },
        width: '500px',
        height: '500px',
        border: theme.border.primary.main,
        margin: 'auto',
        marginLeft: '0px',
        padding: '20px'
    }))
    const Heading = styled(Typography)(({theme}) => ({
        fontFamily: 'IBM Plex Sans',
        fontSize: '35px',
        margin: 'auto',
        color: theme.palette.primary.main
    }))

    return(
        <Container>
            <Heading>
                The Earth, as we treat it, is dispensable by
                reason of an imperial paradigm that
                constitutes that both human and
                natural resources retain their most...
            </Heading>
        </Container>
    )
}