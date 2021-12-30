import React from 'react';
import { List, ListItem, Button, Box, styled, Typography } from '@mui/material';

export default function ScrollingNavbar(props) {
    
    const useAboutPage = props.useAboutPage;
    const useProjectsPage = props.useProjectsPage;
    const useJournalPage = props.useJournalPage;

    const containerPosition = props.containerPosition
    const mediumDisplay = props.mediumDisplay
    const smallDisplay = props.smallDisplay

    const Heading = styled(Typography)(({theme}) => ({
        fontFamily: 'IBM Plex Serif',
        fontSize: '22px',
        margin: 'auto',
    }))
    const StyledButton = styled(Button)(({theme}) => ({
        width: '100%',
        fontSize: '12px',
        textTransform: 'lowercase',
        color: theme.palette.primary.main,
        fontFamily:'IBM Plex Mono',
        justifyContent: 'left',
        paddingLeft: '0px',
    }))
    const StyledListItem = styled(ListItem)(({theme}) => ({
        display: 'flex',
        padding: '0px',
    }))
    const StyledList = styled(List)(({theme}) => ({
        margin: 'auto',
        padding: '0px',
    }))
    const Container = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('xl')]: {
            width: '470px'
        },
        [theme.breakpoints.down('lg')]: {
            width: '300px'
        },
        [theme.breakpoints.down('md')]: {
            display: mediumDisplay
        },
        [theme.breakpoints.down('sm')]: {
            display: smallDisplay
        },
        position: containerPosition,
        width: '470px', 
        height: window.innerHeight - 100, 
        display: 'flex', 
        flexDirection: 'column',
    }))

    return(
        <Container>  
            <StyledList disablePadding={true} dense={true}>
                <Heading sx={{padding: '5px', paddingLeft: '0px'}}>
                    Native Systems
                </Heading>    
                <StyledListItem>
                    <StyledButton onClick={useAboutPage}>About</StyledButton>
                </StyledListItem>
                <StyledListItem>
                    <StyledButton onClick={useProjectsPage}>Projects</StyledButton>
                </StyledListItem>
                <StyledListItem>
                    <StyledButton onClick={useJournalPage}>Journal</StyledButton>
                </StyledListItem>
            </StyledList>
        </Container> 
    )
}