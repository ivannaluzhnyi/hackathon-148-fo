import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { EResource, EResourceCompletedProject } from '../../utils/resources';
import Icon from '../Icon';
import Section from '../Section';

interface PropsImg {
    src: EResourceCompletedProject;
    title: string;
    description: string;
}

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
    background-color: #030f4b;
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

const ImageComponenent: React.FC<PropsImg> = ({ src, title, description }) => {
    return (
        <WrapperImage>
            <Img w={350} h={240} type={src} />
            <Overlay className="overlay">
                <Content>
                    <p>
                        <b>{title}</b>
                    </p>
                    <p>{description}</p>
                </Content>
            </Overlay>
        </WrapperImage>
    );
};

const CompletedProject = () => {
    const data = [
        {
            src: EResourceCompletedProject.Metro,
            title: 'Site web',
            description:
                "Design d'un outil de recrutement Taleo d'Oracle et campagne photographique",
        },

        {
            src: EResourceCompletedProject.Courseur,
            title: 'Application mobile',
            description: 'Une nouvelle façon de faire ses courses',
        },

        {
            src: EResourceCompletedProject.Respire,
            title: 'Application',
            description:
                'Conception d’une application mobile pour Respire, l’Association Nationale pour la Préservation et l’Amélioration de la Qualité de l’Air.',
        },

        {
            src: EResourceCompletedProject.Alimetier,
            title: 'Site web, communication et stands',
            description:
                'Alimétiers est un programme de longue date, piloté par Opcalim afin de valoriser les métiers ainsi que les formations du secteur de l’alimentaire.',
        },

        {
            src: EResourceCompletedProject.FruitsDetendus,
            title: 'Site Web',
            description:
                'Les Fruits Détendus est une jeune marque d’en-cas bio, vegan, composés de fruits séchés construite autour de valeurs telle celle de bien se nourrir sans se prendre au sérieux.',
        },

        {
            src: EResourceCompletedProject.SosHomophobie,
            title: 'Site Web - Projet fictif',
            description: 'Refonte du site web SOS Homophobie.',
        },
    ];
    return (
        <Section>
            <Container>
                <H>Les projets réalisés par les Agents du Web</H>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    {data.map((prosp: PropsImg, idx) => (
                        <Grid key={idx} item xs>
                            <ImageComponenent {...prosp} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default CompletedProject;
