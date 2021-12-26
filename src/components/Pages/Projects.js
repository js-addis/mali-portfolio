import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import architecture1 from '../images/architecture1.jpg';
import useWindowDimensions from '../WindowDimensions';

export default function Projects(props) {

    const {height, width} = useWindowDimensions();

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const container = {
        margin: 'auto',
        marginLeft: '0px',

        width: '800px',
        height: 'auto',
        
        display: 'flex',
        justifyContent: 'left',
        flexFlow: 'row wrap',
    }

    function Project(props) {
        const title = props.title
        const image = props.image
        const text = props.text

        const projectContainer = {
            width: '220px',
            height: 'auto',
            border: '1px solid lightgrey',
            margin: '10px',
            cursor: 'pointer'
        }
        const titleContainer = {
            fontFamily: 'IBM Plex Mono',
            padding: '20px',
            textAlign: 'center'
        }
        const imageStyle = {
            width: '100%',
            height: '100px'
        }
        const textContainer = {
            fontFamily: 'IBM Plex Mono',
            padding: '10px',
            fontSize: '10px',
            lineHeight: '200%'
        }
        function Modal(props) {
            const modalStyle = {
                position: 'fixed',
                top: '0px',
                left: '470px',
                width: width,
                height: height,
                backgroundColor: 'white',
                zIndex: 999,
                overflowY: 'scroll'
            }
            
            return(
                <Box> {
                    modalOpen ?
                        <Box sx={modalStyle}>
                            <Button sx={{padding: '0px', margin: '0px', justifyContent: 'left'}} onClick={handleModalClose}>X</Button>
                            <Box>{title}</Box>
                            <Box>{text}</Box>
                        </Box> 
                    : null 
                } 
                </Box>
            )
        }
        return (
            <Box>
                <Modal/>
                <Box sx={projectContainer} onClick={handleModalOpen}>
                    <Box sx={titleContainer}>{title}</Box>
                    <img  style={imageStyle} src={image}></img>
                    <Box sx={textContainer}>{text}</Box>
                </Box>
            </Box>
            
        )
    }
    return(
        <Box sx={container}>
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
        </Box>
    )
}