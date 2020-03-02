// import React from 'react';
import styled from 'styled-components';
import UiButton from '@material-ui/core/Button';

const Button = styled(UiButton)`
    background-color: red;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;

    &:hover {
        background-color: #5469d4;
    }
    & .label {
        color: #fff;
    }
`;

export default Button;
