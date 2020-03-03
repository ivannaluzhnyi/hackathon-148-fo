import React from 'react';
import Button from '../components/Button';
import config from '../utils/config';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Button>Test</Button>

            <p>test env : {config.URL}</p>
        </div>
    );
};

export default Home;
