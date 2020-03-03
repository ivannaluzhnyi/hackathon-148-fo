import React from 'react';
import { OurValue, CompletedProject, MainAddProfile } from '../components';

const Home = () => {
    return (
        <div>
            <MainAddProfile />
            <OurValue />
            <CompletedProject />
        </div>
    );
};

export default Home;
