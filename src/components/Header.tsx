import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Button from './Button';
import { IconButton } from '@material-ui/core';
import { routes } from '../router/routes';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const StyledSection = styled.section`
    margin-left: auto;

    & > button {
        &:nth-child(1) {
            margin-right: 10px;
        }
    }
`;

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
    const history = useHistory();
    const { location } = history;

    const isMatched = routes.find(
        r => r.withoutHeade && r.path === location.pathname,
    )
        ? true
        : false;

    const handleRedirect = (page: string) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...(props as any)}>
                <AppBar color="transparent">
                    <Toolbar>
                        {!isMatched ? (
                            <Typography
                                variant="h6"
                                onClick={() => handleRedirect('')}
                            >
                                ADW - 148
                            </Typography>
                        ) : (
                            <IconButton onClick={() => handleRedirect('')}>
                                <ArrowBackIosIcon />
                            </IconButton>
                        )}

                        {!isMatched && (
                            <StyledSection>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleRedirect('login')}
                                >
                                    Se connecter
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleRedirect('register')}
                                >
                                    S'incrire
                                </Button>
                            </StyledSection>
                        )}

                        <div></div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
};

export default Header;
