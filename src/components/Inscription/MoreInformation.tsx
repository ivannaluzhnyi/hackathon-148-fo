import React from 'react';
import styled from 'styled-components';
import { Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import ValidateButton from './ValidateButton';
import Alert from '@material-ui/lab/Alert';

const Form = styled.form`
    width: 80%;
`;

const MoreInformation: React.FC<{
    handelValidateScreen: (props: any) => void;
}> = ({ handelValidateScreen }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: any) => {
        handelValidateScreen({
            moreInformation: {
                ...data,
            },
        });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit as any)}>
            <h2>Mieux vous connaitre </h2>
            {errors.validate_condition &&
                (errors.validate_condition as any).message && (
                    <Alert severity="error">
                        {(errors.validate_condition as any).message}
                    </Alert>
                )}
            <h5>Votre sensibilité écologique ?</h5>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        placeholder="Quel sont vos gestes aux quotidiens ? Etc."
                        name="description"
                        multiline
                        rows={4}
                        rowsMax={6}
                        inputRef={register({
                            required: true,
                        })}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="https:// ..."
                        name="cv"
                        label="CV"
                        inputRef={register}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="https:// ..."
                        label="Portfolio"
                        name="portolio"
                        inputRef={register}
                    />
                </Grid>

                <Grid item>
                    <FormControlLabel
                        inputRef={register({
                            validate: (value: string) => {
                                console.log('value => ', value);

                                return value
                                    ? value
                                    : 'Veuillez accepter les Conditions d’Utilisation et la Politique de confidentialité des Agents du web.';
                            },
                        })}
                        name="validate_condition"
                        control={<Checkbox color="primary" />}
                        label="J’accepte les Conditions d’Utilisation et la Politique de confidentialité des Agents du web."
                        labelPlacement="end"
                    />
                </Grid>
            </Grid>
            <ValidateButton text="suivant" />;
        </Form>
    );
};

export default MoreInformation;
