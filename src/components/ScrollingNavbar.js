import React from 'react';
import { List, ListItem, Button, Box, styled, Typography } from '@mui/material';

export default function ScrollingNavbar(props) {

    const aboutPage = props.aboutPage
    const projectsPage = props.projectsPage
    const journalPage = props.journalPage
    
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
    const InactiveButton = styled(Box)(({theme}) => ({
        width: '100%',
        fontSize: '12px',
        textTransform: 'lowercase',
        color: theme.palette.primary.main,
        fontFamily:'IBM Plex Mono',
        justifyContent: 'left',
        paddingLeft: '0px',
    }))
    const ActiveButton = styled(Box)(({theme}) => ({
        width: '100%',
        fontSize: '12px',
        textTransform: 'lowercase',
        color: theme.palette.primary.main,
        fontFamily:'IBM Plex Mono',
        justifyContent: 'left',
        paddingLeft: '0px',
        textDecoration: 'underline'
    }))
    const StyledListItem = styled(ListItem)(({theme}) => ({
        display: 'flex',
        padding: '2px',
        marginTop: '3px',
        marginBottom: '3px', 
        cursor: 'pointer',
        width: '100%'
    }))
    const StyledList = styled(List)(({theme}) => ({
        margin: 'auto',
        padding: '0px',
    }))
    const Container = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('lg')]: {
            width: '300px'
        },
        [theme.breakpoints.down('md')]: {
            display: mediumDisplay,
        },
        [theme.breakpoints.down('sm')]: {
            display: smallDisplay
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('sm')]: {

        },
        position: containerPosition,
        width: '470px', 
        height: window.innerHeight - 100, 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'white'
    }))

    return(
        <Container>  
            <StyledList>
                <Heading sx={{padding: '5px', paddingLeft: '0px'}}>
                    Native Systems
                </Heading>    
                <StyledListItem>{
                    aboutPage ? 
                        <ActiveButton onClick={useAboutPage}>About</ActiveButton> :
                        <InactiveButton onClick={useAboutPage}>About</InactiveButton>
                }    
                </StyledListItem>
                <StyledListItem>{
                    projectsPage ? 
                        <ActiveButton onClick={useProjectsPage}>Projects</ActiveButton> :
                        <InactiveButton onClick={useProjectsPage}>Projects</InactiveButton>
                }    
                </StyledListItem>
                <StyledListItem>{
                    journalPage ? 
                        <ActiveButton onClick={useJournalPage}>Journal</ActiveButton> :
                        <InactiveButton onClick={useJournalPage}>Journal</InactiveButton>
                }    
                </StyledListItem>
            </StyledList>
        </Container> 
    )
}