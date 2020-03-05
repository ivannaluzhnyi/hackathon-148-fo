import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { EResource } from '../utils/resources';
import { Container } from '@material-ui/core';

const StyledFooter = styled.footer`
    background: #030f4b 0% 0% no-repeat padding-box;
    border-radius: 0px 200px 0px 0px;
    padding: 10px 0;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Reseau = styled.div`
    & > img {
        margin: 0 10px;
    }
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;

    & > img {
        width: 181px;
        height: 61px;
        margin: 20px auto;
    }

    & > span {
        color: white;
        font-size: 12px;
    }
`;

const Info = styled.div`
    & > p {
        color: white;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <Reseau>
                    <Icon type={EResource.Facebook} />
                    <Icon type={EResource.Twitter} />
                    <Icon type={EResource.Instagram} />
                </Reseau>
                <Center>
                    <Icon type={EResource.ADW_LOGO_WHITE} />

                    <span>
                        © Copyrights 2020 Les Agents du Web - Tous droits
                        réservés Agence 148
                    </span>
                </Center>
                <Info>
                    <p> contact@adw.fr </p>
                    <p> +33(1) 42 72 92 37 </p>
                </Info>
            </StyledContainer>
        </StyledFooter>
    );
};

export default Footer;
