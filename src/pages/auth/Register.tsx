import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    Grid,
    makeStyles,
    CssBaseline,
    Paper,
    Typography,
} from '@material-ui/core';
import { Stepper, Icon } from '../../components';
import resources, { EResource } from '../../utils/resources';

const Wrapper = styled(Grid)``;

const MainBlock = styled(Grid)``;

const RightBlock = styled(Grid)`
    background-color: #6091fc;
`;

const StyledStepper = styled(Stepper)`
    width: 80%;
`;

const LogoBlock = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Logo = () => (
    <LogoBlock>
        <Icon w={150} type={EResource.LOGO_148} />
    </LogoBlock>
);

const TitleImage = styled.h1`
    position: absolute;
    left: 15%;
    top: 30%;

    font-family: 'Open Sans', sans-serif;

    width: 457px;
    height: 173px;
    text-align: left;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
`;

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${resources['ic-bg-connexion']})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
    const classes = useStyles();
    const [activeStep, setStep] = useState<number>(0);

    useEffect(() => {
        setStep(1);
    }, []);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid
                item
                xs={12}
                sm={8}
                md={7}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Logo />

                    <Typography component="h1" variant="h5">
                        S'inscrir
                    </Typography>

                    <Stepper activeStep={activeStep} />
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={5} className={classes.image}>
                <TitleImage>Une nouvelle expérience commence !</TitleImage>
            </Grid>
        </Grid>
    );
};

export default Register;
