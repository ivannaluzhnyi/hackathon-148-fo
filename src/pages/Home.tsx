import React from 'react';
import {
    Icon,
    OurValue,
    CompletedProject,
    MainAddProfile,
} from '../components';
import { EResource } from '../utils/resources';

const Home = () => {
    return (
        <div>
            <MainAddProfile />

            <OurValue />

            <CompletedProject />

            <Icon type={EResource.LOGO_148} />
        </div>
    );
};

export default Home;
