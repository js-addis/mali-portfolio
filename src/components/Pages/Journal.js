import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';


// IMAGES //
import architecture1 from '../images/architecture1.jpg';
import architecture2 from '../images/architecture2.jpg';
import architecture3 from '../images/architecture3.jpg';
// IMAGES //

export default function Journal(props) {



    // MAIN COMPONENT

    const Container = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('lg')]: {
                 
        },
        [theme.breakpoints.down('md')]: {
            
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '70px',
            paddingBottom: '100px'
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('sm')]: {

        },
        margin: 'auto',
        marginLeft: '0px',
        width: '100%',
    }))
    const Section = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('lg')]: {
                    
        },
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            marginBottom: '15px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('sm')]: {

        },  
        height: 'auto',
        width: '500px',
        border: theme.border.primary.main,
        marginTop: '15px',
        marginBottom: '15px',
    }))

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

        const ArticleButton = styled(Button)(({theme}) => ({
            width: '100%',
            height: '40px',
            margin: 'auto',
            justifyContent: 'left',
            fontFamily: 'IBM Plex Mono',
            padding: '15px',
            textTransform: 'Capitalize',
            color: theme.palette.primary.main
        }))
        const Date = styled(Box)(({theme}) => ({
            position: 'absolute',
            right: '10px',
            color: theme.palette.secondary.main
        }))

        // MODAL COMPONENT //

        function Modal(props) {

            {/*const [height, setHeight] = useState({
                height: window.innherHeight
            });

            useEffect(() => {
                function handleResize() {
                    setHeight({height: window.innerHeight})
                }
                window.addEventListener("resize", handleResize());
            })*/}

            const ModalContainer = styled(Box)(({theme}) => ({
                [theme.breakpoints.down('lg')]: {
                    left: '300px',
                },
                [theme.breakpoints.down('md')]: {
                    left: '0px',
                    width: '100%'
                },
                [theme.breakpoints.down('sm')]: {
                    
                },
                [theme.breakpoints.up('lg')]: {
                    
                },
                [theme.breakpoints.up('md')]: {
                    width: '100%'
                },
                [theme.breakpoints.up('sm')]: {
                    
                },
                position: 'fixed',
                top: '0px',
                left: '470px',
                height: window.innerHeight,
                width: '100%',
                backgroundColor: 'white',
                zIndex: 998,
                overflowY: 'scroll',
            }))
            const ArticleContainer = styled(Box)(({theme}) => ({
                [theme.breakpoints.down('lg')]: {
                    
                },
                [theme.breakpoints.down('md')]: {
                    margin: 'auto',
                },
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    border: 'none'
                },
                [theme.breakpoints.up('lg')]: {
                    
                },
                [theme.breakpoints.up('md')]: {
                },
                [theme.breakpoints.up('sm')]: {

                },
                width: '700px',
                height: 'auto',
                marginBottom: '50px',
                marginTop: '50px',
                padding: '0px',
                border: theme.border.primary.main,
                zIndex: 999,
            }))
            const Title = styled(Typography)(({theme}) => ({
                [theme.breakpoints.down('lg')]: {
                    
                },
                [theme.breakpoints.down('md')]: {

                },
                [theme.breakpoints.down('sm')]: {
                    paddingTop: '35px',
                    paddingBottom: '15px'
                },
                [theme.breakpoints.up('lg')]: {
                    
                },
                [theme.breakpoints.up('md')]: {

                },
                [theme.breakpoints.up('sm')]: {

                },
                fontSize: '25px',
                paddingTop: '25px',
                fontFamily: 'IBM Plex Sans',
                fontWeight: 'bold',
                justifyContent: 'center',
                textAlign: 'center',
                color: theme.palette.primary.main,
                backgroundColor: 'white'
            }))
            const ArticleText = styled(Typography)(({theme}) => ({
                fontFamily: 'IBM Plex Serif',
                margin: '15px',
                color: theme.palette.primary.main
            }))
            const ImageContainer = styled(Box)(({theme}) => ({
                width: '100%',
                marginBottom: '0px',
            }))
            // AUTHOR STAMP
            const AuthorStampContainer = styled(Box)(({theme}) => ({
                backgroundColor: theme.palette.primary.main
            }))
            const AuthorStampName = styled(Box)(({theme}) => ({
                float: 'right', 
                margin: '8px', 
                marginRight: '20px', 
                fontFamily: 'IBM Plex Sans', 
                fontSize: '12px', 
                color: theme.palette.secondary.main
            }))
            const AuthorStampDate = styled(Box)(({theme}) => ({
                float: 'left', 
                margin: '8px', 
                marginLeft: '20px', 
                fontFamily: 'IBM Plex Sans', 
                fontSize: '12px', 
                color: theme.palette.secondary.main
            }))
            // CAPTION
            const CaptionContainer = styled(Box)(({theme}) => ({
                top: '0px',
                marginTop: '-4px',
                vertcalAlign: 'top'
            }))
            const CaptionText = styled(Typography)(({theme}) => ({
                width: '65%',
                margin: 'auto',
                padding: '5px',
                textAlign: 'center',
                fontFamily: 'IBM Plex Mono',
                fontSize: '12px',
                border: theme.border.primary.main,
                color: theme.palette.secondary.main
            }))
            // EXIT BUTTON
            const ExitButton = styled(Box)(({theme}) => ({
                [theme.breakpoints.down('sm')]: {
                    top: 0
                },
                color: theme.palette.secondary.main,
                cursor: 'pointer',
                padding: '10px',
                paddingTop: '6px',
                position: 'absolute',
                marginTop: '0px',
            }))
            return (
                <Box> {
                    modalOpen ?
                        <ModalContainer id="modal-container">
                            <ArticleContainer>
                                <ExitButton onClick={handleModalClose}>X</ExitButton>
                                <Title>{title}</Title>
                                <AuthorStampContainer>
                                    <AuthorStampDate>{date}</AuthorStampDate>
                                    <AuthorStampName>{name}</AuthorStampName>
                                </AuthorStampContainer>
                                <ImageContainer component="img" src={image}/>
                                <CaptionContainer>
                                    <CaptionText>{captionText}</CaptionText>
                                </CaptionContainer>
                                <ArticleText>{articleText}</ArticleText>
                            </ArticleContainer>
                        </ModalContainer> 
                    : null 
                } 
                </Box>
            )
        }
        return (
            <Box>
                <Modal date={date} name={name}/>
                <ArticleButton onClick={handleModalOpen}>{title}<Date>{date}</Date></ArticleButton>
            </Box>
        )
    }

    // SECTION HEADER

    function SectionHeader(props) {
        const title = props.title
        const Container = styled(Box)(({theme}) => ({
            width: '100%',
            height: 'auto',
            fontFamily: 'IBM Plex Sans',
        }))
        const Text = styled(Typography)(({theme}) => ({
            fontFamily: 'IBM Plex Sans',
            float: 'left',
            left: '0px',
            margin: '15px'
        }))
        const Date = styled(Typography)(({theme}) => ({
            fontFamily: 'IBM Plex Sans',
            float: 'right',
            right: '0px',
            margin: '15px'
        }))
        return (
            <Container>
                <Text>{title}</Text><Date>Date</Date>
            </Container>
        )
    } 

    // THIS IS WHERE YOU EDIT YOUR ARTICLES // 
    // *title *name *date *image *captionText *articleText //
    // <SectionHeader/> is the title of each group of articles //
    return(
        <Container>
            <Section>
                <SectionHeader title={'Philosophy'}/>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article
                    title={'Lorem Ipsum Dolor'} 
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture2} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture3} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
            </Section>
            <Section>
                <SectionHeader title={'Life Goals'}/>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={'Lorem Ipsum Dolor'}
                    name={'Jamaal Tribune'}
                    date={'June 2021'}
                    image={architecture1} 
                    captionText={'lorem ipsum dolor sit amet'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
            </Section>
            <Section>
                <SectionHeader title={'Work Study'}/>
                <Article 
                    title={"I Don't Like Working"}
                    name={'Jamaal Tribune'}
                    date={'December 2021'}
                    image={architecture1} 
                    captionText={'lololololololol'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={"Random Access Memory"}
                    name={'Jamaal Tribune'}
                    date={'January 2022'}
                    image={architecture1} 
                    captionText={'lololololololol'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={"I Don't Like Working"}
                    name={'Jamaal Tribune'}
                    date={'December 2021'}
                    image={architecture1} 
                    captionText={'lololololololol'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
                <Article 
                    title={"Random Access Memory"}
                    name={'Jamaal Tribune'}
                    date={'January 2022'}
                    image={architecture1} 
                    captionText={'lololololololol'}
                    articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}>
                </Article>
            </Section>
        </Container> 
    )
}