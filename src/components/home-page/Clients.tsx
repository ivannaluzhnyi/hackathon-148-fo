import React from 'react';
import Section from '../Section';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';

const H = styled.h1`
    text-align: center;
`;

const Clients = () => {
    return (
        <Section>
            <Container>
                <H>Nos clients</H>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Icon type={EResource.Clients} />
                </Grid>
            </Container>
        </Section>
    );
};

export default Clients;
