import React from 'react';
import Section from '../Section';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px #9d9d9d29;
    border-radius: 6px;
`;

const Notice = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    {/* <Grid container >
                        <Grid></Grid>
                        <Grid></Grid>


                    </Grid> */}
                </Wrapper>
            </Container>
        </Section>
    );
};

export default Notice;
