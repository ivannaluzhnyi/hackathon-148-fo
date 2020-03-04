import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Grid, TextField, CssBaseline, makeStyles } from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';
import ValidateButton from './ValidateButton';

const Form = styled.div`
    width: 80%;
`;

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UserInformation: React.FC<{
    handelValidateScreen: (props: any) => void;
}> = ({ handelValidateScreen }) => {
    const { register, handleSubmit, getValues, errors } = useForm();

    const onSubmit = (data: any) => {
        handelValidateScreen({
            userInfo: {
                ...data,
            },
        });
    };
    const classes = useStyles();

    return (
        <Form>
            <h2>Informations générales</h2>

            {errors.confirm_password &&
                (errors.confirm_password as any).message && (
                    <Alert severity="error">
                        {(errors.confirm_password as any).message}
                    </Alert>
                )}

            <CssBaseline />
            <div className={classes.paper}>
                <form
                    onSubmit={handleSubmit(onSubmit as any)}
                    className={classes.form}
                    noValidate
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Prénom"
                                autoFocus
                                inputRef={register({
                                    required: true,
                                })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Nom"
                                name="lastName"
                                autoComplete="lname"
                                inputRef={register({
                                    required: true,
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                inputRef={register({
                                    required: "L'email ne pas bon",
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={register({
                                    required: true,
                                })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirm_password"
                                label="Confirmation de mot de passe"
                                type="password"
                                id="confirm_password"
                                autoComplete="current-password"
                                inputRef={register({
                                    required: true,
                                    validate: (value: string) => {
                                        if (value === getValues()['password']) {
                                            return true;
                                        } else {
                                            return 'Les mots de passe ne correspondent pas';
                                        }
                                    },
                                })}
                            />
                        </Grid>
                    </Grid>

                    <ValidateButton className={classes.submit} text="suivant" />
                </form>
            </div>
        </Form>
    );
};

export default UserInformation;
