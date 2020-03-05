import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Button from './Button';
import { IconButton, Container } from '@material-ui/core';
import { routes } from '../router/routes';
import Icon from './Icon';
import { EResource } from '../utils/resources';

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
        &:nth-child(3) {
            margin-right: 10px;
        }
    }
`;

const MainBtn = styled(Button)`
    width: 180px;
    padding: 12px;
    color: white;
`;

const StyledAppBar = styled(AppBar)`
    box-shadow: none;
    border: none;
    background-color: transparent;
    /* background: linear-gradient(35deg, #427bfc 0%, #6e9bfd 100%) 0% 0% no-repeat
        padding-box; */

    opacity: 1;
`;

const StyledToolbar = styled(Toolbar)`
    padding: 0;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 20px;
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
                <StyledAppBar>
                    <Container>
                        <StyledToolbar>
                            {!isMatched ? (
                                <Typography
                                    variant="h6"
                                    onClick={() => handleRedirect('')}
                                >
                                    <Icon
                                        h={100}
                                        w={130}
                                        type={EResource.ADW_LOGO_WHITE}
                                    />
                                </Typography>
                            ) : (
                                <IconButton onClick={() => handleRedirect('')}>
                                    <ArrowBackIosIcon />
                                </IconButton>
                            )}

                            {!isMatched && (
                                <StyledSection>
                                    <StyledLink to={'/'}>
                                        Qui sommes-nous
                                    </StyledLink>
                                    <StyledLink to={'/'}>
                                        Comment ça marche
                                    </StyledLink>

                                    <MainBtn
                                        variant="contained"
                                        color="primary"
                                        onClick={() =>
                                            handleRedirect('inscription')
                                        }
                                    >
                                        S'incrire
                                    </MainBtn>

                                    <MainBtn
                                        variant="outlined"
                                        id="outlined-header"
                                        onClick={() => handleRedirect('login')}
                                    >
                                        Se connecter
                                    </MainBtn>
                                </StyledSection>
                            )}

                            <div></div>
                        </StyledToolbar>
                    </Container>
                </StyledAppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
};

export default Header;
