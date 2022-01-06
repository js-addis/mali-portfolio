import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import architecture1 from '../images/architecture1.jpg';

export default function Projects(props) {

   

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const Container = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0px',
            justifyContent: 'center'
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '100%',
            maxWidth: '100%',
            marginLeft: 'auto',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            overflowX: 'hidden'
        },
        margin: 'auto',
        marginLeft: '0px',
        minWidth: '730px',
        maxWidth: '730px',
        height: 'auto',
        display: 'flex',
        flexFlow: 'row wrap',
        zIndex: 1
    }))

    function Project(props) {
        const title = props.title
        const image = props.image
        const text = props.text

        const ProjectContainer = styled(Box)(({theme}) => ({ 
            [theme.breakpoints.down('lg')]: {

            },
            [theme.breakpoints.down('md')]: {

            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: 'auto',
                marginBottom: '10px',
            },
            [theme.breakpoints.up('lg')]: {

            },
            [theme.breakpoints.up('md')]: {

            },
            [theme.breakpoints.up('sm')]: {

            },
            width: '220px',
            height: 'auto',
            border: theme.border.primary.main,
            margin: '10px',
            cursor: 'pointer',
            flex: 1
        }))
        const TitleContainer = styled(Box)(({theme}) => ({
            [theme.breakpoints.down('sm')]: {
                fontSize: '25px',
                padding: '30px'
            },
            fontFamily: 'IBM Plex Mono',
            padding: '20px',
            textAlign: 'center'
        }))
        const ImageContainer = styled(Box)(({theme}) => ({
            [theme.breakpoints.down('sm')]: {
                height: '250px'
            },
            width: '100%',
            height: '100px'
        }))
        const TextContainer = styled(Box)(({theme}) => ({
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                padding: '15px',
                lineHeight: '200%'
            },
            fontFamily: 'IBM Plex Mono',
            padding: '10px',
            fontSize: '10px',
            lineHeight: '200%',
            color: theme.palette.secondary.main
        }))
        function Modal(props) {
            const ModalContainer = styled(Box)(({theme}) => ({
                [theme.breakpoints.down('lg')]: {
                    
                },
                [theme.breakpoints.down('md')]: {
                    left: '0px',
                },
                [theme.breakpoints.down('sm')]: {
                    left: '0px',
                },
                position: 'fixed',
                top: '0px',
                left: '470px',
                width: window.innerWidth - 470,
                height: window.innerHeight + '300px',
                zIndex: 999,
                overflowY: 'scroll',
                backgroundColor: 'white'
            }))
            const ProjectContainer = styled(Box)(({theme}) => ({
                width: '500px',
                height: '500px',
                margin: 'auto',
                marginTop: '50px',
                marginBottom: '50px',
                border: theme.border.primary.main,
                marginLeft: '0px'
            }))
            return(
                <Box> {
                    modalOpen ?
                        <ModalContainer>
                            <Button sx={{padding: '0px', margin: '0px', justifyContent: 'left'}} onClick={handleModalClose}>X</Button>
                            <ProjectContainer>
                                <Box>{title}</Box>
                            </ProjectContainer>
                        </ModalContainer> 
                    : null 
                } 
                </Box>
            )
        }
        return (
            <Box>
                <Modal/>
                <ProjectContainer onClick={handleModalOpen}>
                    <TitleContainer>{title}</TitleContainer>
                    <ImageContainer component="img" src={image}></ImageContainer>
                    <TextContainer>{text}</TextContainer>
                </ProjectContainer>
            </Box>
        )
    }
    return(
        <Container>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Project
                title={'Lorem Ipsum'}
                image={architecture1}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        </Container>
    )
}