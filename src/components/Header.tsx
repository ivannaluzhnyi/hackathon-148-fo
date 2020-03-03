import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from './Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

    const handleRedirect = (page: string) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...(props as any)}>
                <AppBar color="transparent">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            onClick={() => handleRedirect('login')}
                        >
                            Scroll to Hide App Bar
                        </Typography>

                        <StyledSection>
                            <Button onClick={() => handleRedirect('login')}>
                                Se connecter
                            </Button>
                            <Button onClick={() => handleRedirect('register')}>
                                S'incrire
                            </Button>
                        </StyledSection>

                        <div></div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
};

export default Header;
