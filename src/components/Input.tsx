import React from 'react';

import styled from 'styled-components';
import UiInput from '@material-ui/core/Input';
import { FormControl, InputLabel } from '@material-ui/core';

const StyledFormControl = styled(FormControl)`
    &:hover {
    }
`;

export interface InputProps {
    ref?: any;
    handleChange?: any;
    name?: any;
    label?: string;
    type?: string;
    value?: any;
}
const Input: React.FC<InputProps> = ({
    ref,
    name,
    handleChange,
    label,
    type,
    value,
}) => {
    console.log('ref => ', ref);
    console.log('name => ', name);
    return (
        <StyledFormControl>
            <InputLabel htmlFor="component-simple"> {label}</InputLabel>
            <UiInput
                id="component-simple"
                name={name}
                onChange={handleChange}
                type={type}
                value={value}
                inputRef={ref}
            />
        </StyledFormControl>
    );
};

export default Input;
