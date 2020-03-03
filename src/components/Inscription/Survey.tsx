import React from 'react';
import styled from 'styled-components';
import {
    Grid,
    Container,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
} from '@material-ui/core';

import wording from '../../utils/wording.json';

import Button from '../Button';

const Wrapper = styled(Grid)``;

const MainBlock = styled(Grid)`
    background-color: #e8e8e8;
`;

const Title = styled.h2`
    margin-top: 30px;
`;

const PageDescription = styled.h4`
    width: 480px;
`;

const QuestionLabel = styled.h5`
    margin: 10px 0;
`;

const SendButton = styled(Button)`
    margin: 30px 0;
`;

export interface QuestionOptions {
    id: string;
    value: string;
    label: string;
}

const Survey: React.FC = () => {
    const [radiosValue, setRadiosValue] = React.useState<any>({});

    const renderRadios = (
        formLabel: string,
        options: QuestionOptions[],
        onChange: any,
        value: any,
        id: any,
    ) => (
        <React.Fragment key={id}>
            <QuestionLabel>Question {id + 1} </QuestionLabel>
            <FormControl required component="fieldset">
                <FormLabel component="legend">{formLabel}</FormLabel>
                <RadioGroup name="formLabel" value={value} onChange={onChange}>
                    {options.map(({ id, label, value }) => (
                        <FormControlLabel
                            key={id}
                            id={id}
                            value={value}
                            control={<Radio color="primary" />}
                            label={label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );

    return (
        <Wrapper container>
            <MainBlock item md={7}>
                <Container>
                    <Title>Dernière étape afin de valider votre profile</Title>

                    <PageDescription>
                        Nous faisons passer une fasse de test afin de valider
                        votre profile, si vous en compléter pas ce QCM vous ne
                        pouvez pas valider votre candidature.
                    </PageDescription>

                    {wording.SurveyQuestion.map(({ label, id, options }, idx) =>
                        renderRadios(
                            label,
                            options,
                            (e: any) =>
                                setRadiosValue({
                                    ...radiosValue,
                                    [id]: e.currentTarget.value,
                                }),
                            radiosValue[id] || '',
                            idx,
                        ),
                    )}

                    <SendButton color="inherit">
                        Envoyer ma candidature
                    </SendButton>
                </Container>
            </MainBlock>
            <Grid item md={5}></Grid>
        </Wrapper>
    );
};

export default Survey;
