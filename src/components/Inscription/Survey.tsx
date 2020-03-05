import React from 'react';
import styled from 'styled-components';
import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
} from '@material-ui/core';

import wording from '../../utils/wording.json';

import ValidateButton from './ValidateButton';

const Title = styled.h2`
    margin-top: 30px;
    text-align: center;
    margin: auto;
    width: 280px;
    font: Semibold 30px/41px Open Sans;
    letter-spacing: 0;
    color: #000000;
    margin-bottom: 15px;
`;

const PageDescription = styled.p`
    width: 460px;

    margin: auto;
    font-size: 12px;
    text-align: center;
    font: Light 14px/19px Open Sans;
    letter-spacing: 0;
    color: #000000;

    margin-bottom: 50px;
`;

const QuestionLabel = styled.h5`
    margin: 10px 0;
`;

const Form = styled.form`
    width: 80%;
`;

export interface QuestionOptions {
    id: string;
    value: string;
    label: string;
}

const Survey: React.FC<{ handelValidateScreen: (props: any) => void }> = ({
    handelValidateScreen,
}) => {
    const [radiosValue, setRadiosValue] = React.useState<any>({});

    const condition =
        Object.keys(radiosValue).length === wording.SurveyQuestion.length;

    const handelClick = (e: any) => {
        e.preventDefault();

        if (condition) {
            handelValidateScreen({
                surveyResponses: radiosValue,
            });
        }
    };

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
        <Form onSubmit={handelClick}>
            <Title>Dernière étape pour valider votre profil</Title>

            <PageDescription>
                Nous faisons passer une fasse de test afin de valider votre
                profil, si vous ne compléter pas ce QCM vous ne pourrez pas
                valider votre candidature.
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
            <ValidateButton
                disabled={!condition}
                text="Envoyer ma candidature"
            />
        </Form>
    );
};

export default Survey;
