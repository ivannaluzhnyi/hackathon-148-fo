import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';
import Stepper from '../Stepper';

import Proffesion from './Proffesion';

const Wrapper = styled(Grid)``;

const MainBlock = styled(Grid)``;

const RightBlock = styled(Grid)`
    background-color: #6091fc;
`;

const StyledStepper = styled(Stepper)`
    width: 80%;
`;

const LogoBlock = styled.div`
    display: flex;

    margin-top: 40px;
`;

const Logo = () => (
    <LogoBlock>
        <Icon w={150} type={EResource.LOGO_148} />
    </LogoBlock>
);

export interface InscriptionProps {}

const Inscription: React.FC<InscriptionProps> = () => {
    const [activeStep, setStep] = useState<number>(0);

    useEffect(() => {
        setStep(0);
    }, []);

    return (
        <Wrapper container>
            <MainBlock item md={7}>
                <Container>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Logo />
                        <StyledStepper activeStep={activeStep} />

                        <Proffesion />

                        <p>qsdqs</p>
                        <p>qsdqs</p>
                        <p>qsdqs</p>
                    </Grid>
                </Container>
            </MainBlock>
            <RightBlock item md={5}></RightBlock>
        </Wrapper>
    );
};

export default Inscription;
