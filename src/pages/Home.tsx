import React, { useState } from 'react';
import Button from '../components/Button';
import config from '../utils/config';
import Stepper from '../components/Stepper';

const Home = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div>
            <h1>Home</h1>

            <Button>Test</Button>

            <p>test env : {config.URL}</p>

            <Stepper activeStep={activeStep} />
        </div>
    );
};

export default Home;
