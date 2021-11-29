import React from 'react';
import { List, ListItem, Button, Box, styled, Typography } from '@mui/material';
import useWindowDimensions from './WindowDimensions';

export default function ScrollingNavbar(props) {
    const {height} = useWindowDimensions();

    const pageOneInViewport = props.pageOneInViewport;
    const pageTwoInViewport = props.pageTwoInViewport;
    const pageThreeInViewport = props.pageThreeInViewport;
    const Heading = props.Heading;

    const ActiveButton = styled(Button)(({theme}) => ({
        fontSize: '12px',
        textTransform: 'lowercase',
        color: theme.palette.primary.main,
        textDecoration: 'underline', 
        textDecorationColor: theme.palette.primary.main, 
        textDecorationStyle: 'solid', 
        textDecorationThickness: '1px',
        fontFamily: 'IBM Plex Mono',
        justifyContent: 'left',
        paddingLeft: '0px'
    }))
    const InactiveButton = styled(Button)(({theme}) => ({
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
    const NavContainer = styled(Box)(({theme}) => ({
        position: 'fixed',
        width: '470px', 
        height: height, 
        display: 'flex', 
        flexDirection: 'column',
    }))

    return(
        <NavContainer>  
            <StyledList disablePadding={true} dense={true}>
                <Heading sx={{padding: '5px', paddingLeft: '0px'}}>
                    Native Systems
                </Heading>    
                <StyledListItem>{
                    pageOneInViewport ? 
                        <ActiveButton>+About</ActiveButton> : 
                        <InactiveButton>+About</InactiveButton>
                }
                </StyledListItem>
                <StyledListItem>{
                    pageTwoInViewport ? 
                        <ActiveButton>+Projects</ActiveButton> : 
                        <InactiveButton>+Projects</InactiveButton>
                }
                </StyledListItem>
                <StyledListItem>{
                    pageThreeInViewport ? 
                        <ActiveButton>+Journal</ActiveButton> : 
                        <InactiveButton>+Journal</InactiveButton>
                }
                </StyledListItem>
            </StyledList>
        </NavContainer>
        
    )
}