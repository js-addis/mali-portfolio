import React, { useRef, useEffect } from 'react';
import { Box, styled, Typography, Grid } from '@mui/material';

export default function About(props) {
    // MUI CUSTOM COMPONENTS
    const Container = styled(Box)(({theme}) => ({
        paddingLeft: '450px', paddingRight: '170px', paddingTop: '130px', paddingBottom: '50px'
    }))
    const ColumnText = styled(Typography)(({theme}) => ({
        fontFamily: 'IMB Plex Mono',
        color: theme.palette.secondary.main,
        margin: '5px'
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
            <Box sx={{paddingLeft: '70px', paddingTop: '25px', paddingBottom: '50px', paddingRight: '150px'}}>
                <Grid container spacing={0}>
                    <Grid xs={12} sm={6}>
                        <ColumnText>
                            The Earth, as we treat it, is
                            dispensable by reason of an imperial
                            paradigm that constitutes that both
                            human and natural resources retain
                            their most primary value in their
                            capacity to directly advance political
                            and/or economic power. As citizens of
                            imperial nations, we have been
                            initiated into society through this
                            dogma, inheriting these beliefs from a
                            lineage of governing entities who have
                            utilized this paradigm to unjustly
                            enslave, pillage, exploit, and extract
                            with perverse justification. While our
                            current governments have seemingly
                        </ColumnText>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <ColumnText>
                            ceased their efforts to exercise
                            imperial authority through geographic
                            colonies, the colonial tradition still
                            yet continues. Dispersing throughout
                            other facets of our societies, this
                            tradition has particularly been an
                            integral component to our economic
                            systems, as we colonize through
                            industry, using human and natural
                            resources as mere means to secure
                            power. Functioning similarly to the
                            colonial governments of yore, large
                            corporations and entities akin disrupt
                            and disregard extensive ecological
                            systems in pursuit of acquiring
                            resources that will secure such power.
                        </ColumnText>
                    </Grid>
                </Grid>
            </Box> 
        </Container>
    )
}