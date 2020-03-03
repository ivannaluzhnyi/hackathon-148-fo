import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import { Container } from '@material-ui/core';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const Wrapper = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 42px;
    width: 35%;
    margin-bottom: 10px;
`;

const Description = styled.p`
    margin: 0;
    width: 35%;
    font-size: 18px;
    margin-bottom: 20px;
`;

const MainAddProfile: React.FC = () => {
    const history = useHistory();

    return (
        <Wrapper>
            <Container>
                <Title>Lorem Ipsum dolar sit amet ipsum </Title>

                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse quis lacus vitae elit porttitor suscipit.
                    Praesent scelerisque dictum nibh et lacinia. Mauris in
                    porttitor augue. Pellentesque consequat
                </Description>
                <Button
                    onClick={() => {
                        history.push('/register');
                    }}
                >
                    Je crée mon profile
                </Button>
            </Container>
        </Wrapper>
    );
};

export default MainAddProfile;
