import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../Button';

const SendButton = styled(Button)``;

const ValidateButton: React.FC<{
    onClick?: any;
    text: string;
    className?: any;
    disabled?: boolean;
}> = ({ onClick, text, className, disabled }) => {
    return (
        <Grid container direction="row" alignItems="center" justify="center">
            <SendButton
                onClick={onClick}
                type="submit"
                variant="contained"
                color="primary"
                className={className}
                disabled={disabled}
            >
                {text}
            </SendButton>
        </Grid>
    );
};

export default ValidateButton;
