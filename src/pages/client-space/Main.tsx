import React from 'react';
import Mainlayout from '../../components/layouts/Main';
import { Grid } from '@material-ui/core';
import Account from '../../components/account';
const Main = () => {
    return (
        <Mainlayout>
            <Grid container>
                <Grid item>
                    <Account />
                </Grid>
            </Grid>
        </Mainlayout>
    );
};

export default Main;
