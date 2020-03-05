import React from 'react';
import { OurValue, CompletedProject, MainAddProfile } from '../components';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Toolbar } from '@material-ui/core';
import WebAgency from '../components/home-page/WebAgency';
import Clients from '../components/home-page/Clients';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);

function ScrollTop(props: Props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.root}
            >
                {children}
            </div>
        </Zoom>
    );
}

const Home = () => {
    return (
        <div>
            <Toolbar
                style={{
                    background: 'transparent',
                    minHeight: '0px',
                    margin: '0.001px',
                    padding: '0',
                }}
                id="back-to-top-anchor"
            />
            <MainAddProfile />

            <OurValue />

            <WebAgency />

            <CompletedProject />

            <Clients />

            <ScrollTop>
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    );
};

export default Home;
