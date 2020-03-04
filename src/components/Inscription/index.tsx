import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';
import Stepper from '../Stepper';

import Proffesion from './Proffesion';
import Sector from './Sector';
import Survey from './Survey';
import Button from '../Button';
import UserInformation from './UserInformation';
import MoreInformation from './MoreInformation';

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
        setStep(1);
    }, []);

    return (
        <Wrapper container>
            <MainBlock item xs md={7}>
                <Container>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Logo />
                        <StyledStepper activeStep={activeStep} />

                        <MoreInformation />
                        <br />

                        <UserInformation />

                        <br />

                        <Sector />

                        <br />

                        <Proffesion />

                        <br />
                        <Survey />
                    </Grid>
                </Container>
            </MainBlock>
            <RightBlock item md={5}></RightBlock>
        </Wrapper>
    );
};

const SendButton = styled(Button)``;

export const ValidateButton: React.FC<{
    onClick?: any;
    text: string;
    className?: any;
}> = ({ onClick, text, className }) => {
    return (
        <Grid container direction="row" alignItems="center" justify="center">
            <SendButton
                onClick={onClick}
                type="submit"
                variant="contained"
                color="primary"
                className={className}
            >
                {text}
            </SendButton>
        </Grid>
    );
};

export default Inscription;
