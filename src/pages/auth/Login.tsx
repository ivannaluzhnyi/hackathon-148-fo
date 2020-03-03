import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'Types';
import { Grid, Link } from '@material-ui/core';
import UiInput from '@material-ui/core/Input';
import { FormControl, InputLabel } from '@material-ui/core';
import { fetchLoginAsync } from '../../actions/auth.actions';
import { Button, Icon } from '../../components';
import { EResource } from '../../utils/resources';
import { useHistory } from 'react-router-dom';

export interface LoginProps {
    email: string;
    password: string;
}

const Wrapper = styled(Grid)`
    height: 100%;
`;

const LeftBlock = styled(Grid)``;
const RightBlock = styled(Grid)`
    background-color: #e8e8e8;
`;

const LogoBlock = styled.div`
    display: flex;

    margin-top: 40px;
`;

const Title = styled.h1``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;

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

const TextInscription = styled.h3`
    margin: 100px;
`;

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const Login: React.FC<Props> = ({ loginDispatch }) => {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = (data: LoginProps) => {
        console.log(data);
        console.log(loginDispatch);

        loginDispatch(data);
    };

    const renderForm = () => (
        <Form onSubmit={handleSubmit(onSubmit as any)}>
            <FormControl>
                <InputLabel htmlFor="component-simple"> Mail*</InputLabel>
                <UiInput
                    id="component-simple"
                    name={'email'}
                    type={'email'}
                    autoComplete="email"
                    inputRef={register({
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-simple">
                    Mot de passe*
                </InputLabel>
                <UiInput
                    id="component-simple"
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
            <SignInBtn type="submit" variant="contained">
                Se connecter
            </SignInBtn>
        </Form>
    );

    return (
        <Wrapper container alignItems="stretch">
            <Grid item md={7}>
                <LeftBlock
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <LogoBlock>
                        <Icon w={150} type={EResource.LOGO_148} />
                    </LogoBlock>

                    <Title>Me conecter</Title>

                    {renderForm()}

                    <TextInscription>
                        Pas encore membre Malt ?{' '}
                        <CustomLink onClick={() => history.push('/register')}>
                            Inscrivez-vous
                        </CustomLink>
                    </TextInscription>
                </LeftBlock>
            </Grid>

            <RightBlock item md={5}></RightBlock>
        </Wrapper>
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
