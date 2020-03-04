import React from 'react';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const Form = styled.form`
    width: 80%;
`;

const MoreInformation = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log('data => ', data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit as any)}>
            <h2>Mieux vous connaitre </h2>

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
            </Grid>
        </Form>
    );
};

export default MoreInformation;
