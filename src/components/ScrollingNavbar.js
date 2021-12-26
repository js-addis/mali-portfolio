import React from 'react';
import { List, ListItem, Button, Box, styled, Typography } from '@mui/material';
import useWindowDimensions from './WindowDimensions';

export default function ScrollingNavbar(props) {
    
    const useAboutPage = props.useAboutPage;
    const useProjectsPage = props.useProjectsPage;
    const useJournalPage = props.useJournalPage;

    const {adjustedHeight} = useWindowDimensions();

    const Heading = styled(Typography)(({theme}) => ({
        fontFamily: 'IBM Plex Sans',
        fontSize: '22px',
        margin: 'auto',
    }))
    const StyledButton = styled(Button)(({theme}) => ({
        fontSize: '12px',
        textTransform: 'lowercase',
        color: theme.palette.primary.main,
        fontFamily:'IBM Plex Mono',
        justifyContent: 'left',
        paddingLeft: '0px'
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
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        position: 'fixed',
        width: '470px', 
        height: adjustedHeight, 
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