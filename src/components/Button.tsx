// import React from 'react';
import styled from 'styled-components';
import UiButton from '@material-ui/core/Button';

const Button = styled(UiButton)`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;

    &:hover {
        background-color: #5469d4;
    }
`;

export default Button;

// "name": "Start on Heroku: Node.js",
// "description": "A barebones Node.js app using Express 4",
// "repository": "https://gitlab.com/ivan.nlzh/hackathon-148-fo",
// "logo": "https://cdn.rawgit.com/heroku/node-js-getting-started/master/public/node.svg",
// "keywords": ["node", "express", "heroku"],
// "image": "heroku/nodejs",
