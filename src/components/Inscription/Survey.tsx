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
`;

const PageDescription = styled.h4`
    width: 480px;
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
        <Form>
            <Title>Dernière étape afin de valider votre profile</Title>

            <PageDescription>
                Nous faisons passer une fasse de test afin de valider votre
                profile, si vous en compléter pas ce QCM vous ne pouvez pas
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
            <ValidateButton text="Envoyer ma candidature" />
        </Form>
    );
};

export default Survey;
