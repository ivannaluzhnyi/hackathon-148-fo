import React from 'react';
import Section from '../Section';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

const H = styled.h1`
    text-align: center;
`;

const Clients = () => {
    return (
        <Section>
            <Container>
                <H>Les projets réalisés par les Agents du Web</H>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                ></Grid>
            </Container>
        </Section>
    );
};

export default Clients;
