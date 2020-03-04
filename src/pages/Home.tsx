import React from 'react';
import { OurValue, CompletedProject, MainAddProfile } from '../components';

const Home = () => {
    return (
        <div>
            <MainAddProfile />

            <p style={{ color: '#427BFC' }}> #427BFC</p>
            <p style={{ color: '#6E9BFD' }}>#6E9BFD</p>
            <p style={{ color: '#427BFC)' }}>#427BFC</p>

            <OurValue />
            <CompletedProject />
        </div>
    );
};

export default Home;
