import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { EResource } from '../../utils/resources';
import Icon from '../Icon';
import Section from '../Section';

const H = styled.h1`
    text-align: center;
`;

const Img = styled(Icon)``;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 240px;
    width: 350px;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
`;

const WrapperImage = styled.div`
    position: relative;

    &:hover .overlay {
        opacity: 0.8;
    }
`;

const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
`;

const ImageComponenent: React.FC<{ src: any }> = ({ src }) => {
    return (
        <WrapperImage>
            <Img w={350} h={240} type={src} />
            <Overlay className="overlay">
                <Content>
                    <p>
                        <span>Title :</span> Hello
                    </p>
                    <p>
                        <span>Title :</span> Hello
                    </p>
                    <p>
                        <span>Title :</span> Hello
                    </p>
                </Content>
            </Overlay>
        </WrapperImage>
    );
};

const CompletedProject = () => {
    const data = [
        {
            src: EResource.TestSvg,
        },
        {
            src: EResource.TestSvg,
        },
        {
            src: EResource.TestSvg,
        },
        {
            src: EResource.TestSvg,
        },
        {
            src: EResource.TestSvg,
        },
        {
            src: EResource.TestSvg,
        },
    ];
    return (
        <Section>
            <Container>
                <H>Les projets réaliés par les agents du web</H>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    {data.map(({ src }) => (
                        <Grid item xs>
                            <ImageComponenent src={src} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default CompletedProject;
