import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import { Container, Grid } from '@material-ui/core';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import resources from '../../utils/resources';
import Header from '../Header';

const Wrapper = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 42px;
    margin-bottom: 10px;
    margin-top: 25px;
    color: white;
`;

const Description = styled.p`
    margin: 40px 0;
    font-size: 17px;
    margin-bottom: 55px;
    color: white;
`;

const StyldContainer = styled(Container)`
    padding: 40px 0;
    margin-bottom: 50px;
    height: 796px;
`;

const StyledButton = styled(Button)`
    padding: 15px 25px;
`;

const MainAddProfile: React.FC = () => {
    const history = useHistory();

    return (
        <Wrapper
            margin="0  0"
            backGroundImage={resources['bg-1-onepage']}
            isGrey
        >
            <Header />
            <StyldContainer>
                <Grid container justify="flex-start" direction="row">
                    <Grid item xs={12} md={5}>
                        <Title>Devenir un agent du web</Title>

                        <Description>
                            Les Agents du Web sont des prestataires freelances,
                            formés à la stack technique, à la méthodologie et à
                            la philosophie créative de 148, qui répondent, seuls
                            ou en équipe, à des projets fournis par l’agence.
                        </Description>

                        <StyledButton
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                history.push('/inscription');
                            }}
                        >
                            Rejoindre l'aenture
                        </StyledButton>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </StyldContainer>
        </Wrapper>
    );
};

export default MainAddProfile;
