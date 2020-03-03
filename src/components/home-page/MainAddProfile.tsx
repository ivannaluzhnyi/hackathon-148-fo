import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import { Container, Grid } from '@material-ui/core';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const Wrapper = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 42px;
    margin-bottom: 10px;
    margin-top: 0;
`;

const Description = styled.p`
    margin: 0;
    font-size: 18px;
    margin-bottom: 20px;
`;

const MainAddProfile: React.FC = () => {
    const history = useHistory();

    return (
        <Wrapper isGrey>
            <Container>
                <Grid container justify="flex-start" direction="row">
                    <Grid item xs={12} md={5}>
                        <Title>Lorem Ipsum dolar sit amet ipsum </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse quis lacus vitae elit porttitor
                            suscipit. Praesent scelerisque dictum nibh et
                            lacinia. Mauris in porttitor augue. Pellentesque
                            consequat
                        </Description>

                        <Button
                            onClick={() => {
                                history.push('/register');
                            }}
                        >
                            Je crée mon profile
                        </Button>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
};

export default MainAddProfile;
