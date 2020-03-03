import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import config from '../utils/config';
import Stepper from '../components/Stepper';
import { Icon, OurValue, CompletedProject } from '../components';
import { EResource } from '../utils/resources';

const Home = () => {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        setActiveStep(1);
    }, []);
    return (
        <div>
            <h1>Home</h1>

            <Button>Test</Button>

            <p>test env : {config.URL}</p>

            <Stepper activeStep={activeStep} />

            <br />

            <OurValue />

            <CompletedProject />

            <Icon type={EResource.LOGO_148} />
        </div>
    );
};

export default Home;
