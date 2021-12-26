import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useWindowDimensions from '../WindowDimensions';

// IMAGES
import architecture1 from '../images/architecture1.jpg';
import architecture2 from '../images/architecture2.jpg';
import architecture3 from '../images/architecture3.jpg';
// IMAGES 

export default function Journal(props) {

    const {height, width} = useWindowDimensions();

    const container = {
        margin: 'auto',
        marginLeft: '0px',
    }
    const section = {
        height: 'auto',
        width: '700px',
        border: '1px solid lightgrey',
    }
    const divider = {
        marginTop: '15px',
        marginBottom: '15px'
    }

// ARTICLE COMPONENT //
    function Article(props) {

        const [modalOpen, setModalOpen] = useState(false)
        const handleModalOpen = () => setModalOpen(true)
        const handleModalClose = () => setModalOpen(false)

        const title = props.title
        const image = props.image
        const name = props.name
        const date = props.date
        const captionText = props.captionText
        const articleText = props.articleText

        const buttonStyle = {
            width: '100%',
            height: '40px',
            margin: 'auto',
            justifyContent: 'left',
            fontFamily: 'IBM Plex Mono',
            padding: '15px',
            textTransform: 'Capitalize'
        }
        const articleContainer = {
            width: '700px',
            height: 'auto',
            marginBottom: '50px',
            marginTop: '50px',
            padding: '0px',
            border: '1px solid lightgrey',
        }
        const divider = {
            marginTop: '10px',
            marginBottom: '10px'
        }
        const titleStyle = {
            fontSize: '25px',
            margin: '15px',
            marginBottom: '5px',
            fontFamily: 'IBM Plex Sans',
            fontWeight: 'bold',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#757575'
        }
        const textStyle = {
            fontFamily: 'IBM Plex Serif',
            margin: '15px'
        }
        const imageStyle = {
            width: '100%',
            marginBottom: '0px',
        }
        // AUTHOR STAMP
        const authorStampContainer = {
            backgroundColor: 'orange'
        }
        const authorStampName = {
            float: 'right', margin: '8px', marginRight: '20px', fontFamily: 'IBM Plex Sans', fontSize: '12px', color: '#9e9e9e'
        }
        const authorStampDate = {
            float: 'left', margin: '8px', marginLeft: '20px', fontFamily: 'IBM Plex Sans', fontSize: '12px', color: '#9e9e9e'
        }
        // CAPTION
        const captionContainer = {
            top: '0px',
            marginTop: '-4px',
            vertcalAlign: 'top'
        }
        const caption = {
            width: '65%',
            margin: 'auto',
            padding: '5px',
            border: '1px solid lightgrey',
            textAlign: 'center',
            fontFamily: 'IBM Plex Mono',
            fontSize: '12px',
            color: '#9e9e9e'
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
            return (
                <Box> {
                    modalOpen ?
                        <Box sx={modalStyle}>
                            <Button sx={{padding: '0px', margin: '0px', justifyContent: 'left'}} onClick={handleModalClose}>X</Button>
                            <Box sx={articleContainer}>
                                <Box>
                                    <Typography sx={titleStyle}>{title}</Typography>
                                    <Box sx={authorStampContainer}>
                                        <Box sx={authorStampDate}>{date}</Box>
                                        <Box sx={authorStampName}>{name}</Box>
                                    </Box>
                                </Box>
                                <img style={imageStyle} src={image} />
                                <Box sx={captionContainer}>
                                    <Box sx={caption}>{captionText}</Box>
                                </Box>
                                <Typography sx={textStyle}>{articleText}</Typography>
                            </Box>
                        </Box> 
                    : null 
                } 
                </Box>
            )
        }
        return (
            <Box>
                <Modal date={date} name={name}/>
                <Button sx={buttonStyle} onClick={handleModalOpen}>{title}</Button>
            </Box>
            
        )
    } // ARTICLE 

    function SectionTitle(props) {
        const title = props.title
        const style = {
            width: '100%',
            height: 'auto',
            padding: '10px',
            borderBottom: '1px solid lightgrey',
            fontFamily: 'IBM Plex Sans'
        }
        return (
            <Box sx={style}>{title}</Box>
        )
    } 

    // THIS IS WHERE YOU EDIT YOUR ARTICLES // 
    // *title *name *date *image *captionText *articleText //
    return(
        <Box sx={container}>
            <Box sx={section}>
                <SectionTitle title={'Philosophy'} />
                <Article 
                    title={'Lorem Ipsum Dolor Sit Amet'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article
                    title={'Lorem Ipsum Dolor Sit Amet'} 
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture2} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor Sit Amet'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture3} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
            </Box>
            <Box sx={divider}/>
            <Box sx={section}>
                <SectionTitle title={'Life Goals'} />
                <Article title={'Article 1'} articleText={'I am Article 1'}/>
                <Article title={'Article 2'} articleText={'I am Article 2'}/>
                <Article title={'Article 3'} articleText={'I am Article 3'}/>
            </Box>
        </Box> 
    )
}