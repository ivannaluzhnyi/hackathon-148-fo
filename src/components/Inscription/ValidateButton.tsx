import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../Button';

const SendButton = styled(Button)``;

const ValidateButton: React.FC<{
    onClick?: any;
    text: string;
    className?: any;
}> = ({ onClick, text, className }) => {
    return (
        <Grid container direction="row" alignItems="center" justify="center">
            <SendButton
                onClick={onClick}
                type="submit"
                variant="contained"
                color="primary"
                className={className}
            >
                {text}
            </SendButton>
        </Grid>
    );
};

export default ValidateButton;
