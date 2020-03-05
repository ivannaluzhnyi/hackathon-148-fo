import React from 'react';

import UiStepper from '@material-ui/core/Stepper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { StepConnector, StepIconProps } from '@material-ui/core';

import cls from 'classnames';

import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,#FDC543 0%,#FDC543 50%,#FDC543 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,#FDC543 0%,#FDC543 50%,#FDC543 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
    },
    active: {
        backgroundColor: '#fff',
        color: '#FDC543',
        fontSize: '18px',
        border: 'solid 3px #FDC543 ',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        fontSize: '18px',
        backgroundImage:
            'linear-gradient( 136deg, #FDC543 100%, #FDC543 100%, #FDC543 100%)',
    },
});

function ColorlibStepIcon(props: StepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={cls(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {String(props.icon)}
        </div>
    );
}

const steps = [0, 1, 2, 3];

export interface StepperProps {
    activeStep: number;
    className?: string;
}

const Stepper: React.FC<StepperProps> = ({ activeStep, className }) => {
    return (
        <UiStepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
            className={className}
        >
            {steps.map(label => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        <p />
                    </StepLabel>
                </Step>
            ))}
        </UiStepper>
    );
};

export default Stepper;
