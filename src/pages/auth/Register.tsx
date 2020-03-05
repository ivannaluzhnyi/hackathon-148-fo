import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import {
    Grid,
    makeStyles,
    CssBaseline,
    Paper,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import { Stepper, Icon } from '../../components';
import resources, { EResource } from '../../utils/resources';
import {
    Proffesion,
    Sector,
    Survey,
    UserInformation,
    MoreInformation,
} from '../../components/Inscription';
import { sendInscriptionAsync } from '../../actions/inscription.actions';
import { RootState } from 'Types';
import { connect } from 'react-redux';
import AuthService from '../../services/auth-service';
import { useHistory } from 'react-router-dom';
import { getPathnameByUser } from '../../utils/helper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const StyledStepper = styled(Stepper)`
    width: 80%;
`;

const LogoBlock = styled.div`
    display: flex;
    margin-top: 10px;
    cursor: pointer;
`;

const Logo = () => {
    const history = useHistory();

    return (
        <LogoBlock onClick={() => history.push('/')}>
            <Icon w={180} h={190} type={EResource.ADW_LOGO_BALCK} />
        </LogoBlock>
    );
};

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

const CustomLoader = () => {
    const Styledloader = styled(Loader)`
        margin-top: 60px;
    `;
    return (
        <Styledloader type="Watch" color="#00BFFF" height={120} width={120} />
    );
};

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

const containers = [
    Survey, // 4
    Sector, // 0
    Proffesion, // 1
    MoreInformation, // 2
    UserInformation, // 3
    CustomLoader,
];

export type RegisterProps = {} & ReturnType<typeof mapStateToProps> &
    typeof dispatchProps;

const Register: React.FC<RegisterProps> = ({ sendInscriptionDispatch }) => {
    const classes = useStyles();
    const history = useHistory();
    const [currentScreenIndex, setIndex] = useState<number>(0);

    const [inscriptionData, setData] = useState<any>({});

    useEffect(() => {
        if (AuthService.isAuthenticated()) {
            history.push(getPathnameByUser() || '/client-space');
        }
    }, [AuthService.isAuthenticated()]);

    const handelValidateScreen = (data: any) => {
        setData({
            ...inscriptionData,
            ...data,
        });

        setIndex(currentScreenIndex + 1);

        if (currentScreenIndex === 4) {
            sendInscriptionDispatch(inscriptionData);
        }
    };

    const renderScreen = () => {
        const Component: any = containers[currentScreenIndex];

        return <Component handelValidateScreen={handelValidateScreen} />;
    };

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
                    <AppBar color="transparent">
                        <Toolbar>
                            {currentScreenIndex !== 0 &&
                                currentScreenIndex !== 5 &&
                                currentScreenIndex !== 4 && (
                                    <div
                                        onClick={() =>
                                            setIndex(currentScreenIndex - 1)
                                        }
                                    >
                                        <IconButton>
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                        <span className="btn">Retoure</span>
                                    </div>
                                )}
                        </Toolbar>
                    </AppBar>
                    <Logo />

                    {currentScreenIndex !== 0 && (
                        <>
                            <Typography component="h1" variant="h5">
                                S'inscrir
                            </Typography>

                            <StyledStepper
                                activeStep={currentScreenIndex - 1}
                            />
                        </>
                    )}

                    {renderScreen()}
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={5} className={classes.image}>
                <TitleImage>Une nouvelle expérience commence !</TitleImage>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state: RootState) => ({
    // authState: state.authReducer,
    // settingState: state.settingReducer,
});

const dispatchProps = {
    sendInscriptionDispatch: sendInscriptionAsync.request,
};

export default connect(mapStateToProps, dispatchProps)(Register);
