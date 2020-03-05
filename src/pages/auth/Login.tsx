import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'Types';
import {
    Grid,
    Link,
    TextField,
    FormControl,
    makeStyles,
    CssBaseline,
    Box,
    Typography,
    Paper,
} from '@material-ui/core';
import { fetchLoginAsync } from '../../actions/auth.actions';
import { Button, Icon } from '../../components';
import resources, { EResource } from '../../utils/resources';
import { Redirect } from 'react-router-dom';
import AuthService from '../../services/auth-service';
import { getPathnameByUser } from '../../utils/helper';

export interface LoginProps {
    email: string;
    password: string;
}

const LogoBlock = styled.div`
    display: flex;

    margin-top: 40px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 65%;

    & > div {
        margin: 15px 0;
    }
`;

const SignInBtn = styled(Button)`
    width: 50%;
    margin-top: 25px;
    align-self: center;
`;

const CustomLink = styled(Link)`
    cursor: pointer;
    color: black;
    text-decoration: underline;
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
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://148.fr/">
                ADW - 148
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Login: React.FC<Props> = ({ loginDispatch }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: LoginProps) => {
        console.log(data);
        console.log(loginDispatch);

        loginDispatch(data);
    };

    const renderForm = () => (
        <Form onSubmit={handleSubmit(onSubmit as any)}>
            <FormControl>
                <TextField
                    required
                    label="Mail"
                    variant="outlined"
                    name={'email'}
                    autoComplete="email"
                    type={'email'}
                    inputRef={register({
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
            </FormControl>
            <FormControl>
                <TextField
                    required
                    label="Mot de passe"
                    variant="outlined"
                    name={'password'}
                    type={'password'}
                    inputRef={register({ required: true })}
                />

                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                        <CustomLink> Mot de passe oublié ?</CustomLink>
                    </Grid>
                </Grid>
            </FormControl>
            <SignInBtn color="primary" type="submit" variant="contained">
                Se connecter
            </SignInBtn>
        </Form>
    );
    const classes = useStyles();

    const isSignIn = AuthService.isAuthenticated();
    if (isSignIn)
        return (
            <Redirect
                to={{ pathname: getPathnameByUser() || '/client-space' }}
            />
        );

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <LogoBlock>
                        <Icon w={150} h={170} type={EResource.ADW_LOGO_BALCK} />
                    </LogoBlock>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {renderForm()}

                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
    );
};

const mapStateToProps = (state: RootState) => ({
    // authState: state.authReducer,
    // settingState: state.settingReducer,
});

const dispatchProps = {
    loginDispatch: fetchLoginAsync.request,
};

export default connect(mapStateToProps, dispatchProps)(Login);
