import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';
import Section from '../Section';

// const Item = styled(Grid)`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     width: calc(100% / 3.5);

//     & > img {
//         border-radius: 50%;
//         width: 230px;
//         height: 230px;
//     }

//     & > p {
//         text-align: center;
//         font-size: 20px;
//     }
// `;

const StyledTitle = styled(Grid)`
    text-align: center;

    & > h1 {
    }
`;

const OurValue: React.FC = () => {
    // const values = [
    //     {
    //         imageSrc: EResource.LOGO_148,
    //         title: 'Innover',
    //         description:
    //             '148 allie Conseil stratégique créatif et Solutions techniques innovantes',
    //     },
    //     {
    //         imageSrc: EResource.LOGO_148,
    //         title: 'Transmettre',
    //         description: '148 est labélisée B Corp',
    //     },
    //     {
    //         imageSrc: EResource.LOGO_148,
    //         title: 'Connecter',
    //         description: '50% créativité sauvage 50% technique féroce',
    //     },
    // ];

    return (
        <Section>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    <StyledTitle item xs>
                        <h1>Nos valeur</h1>
                    </StyledTitle>
                    {/* {values.map(({ imageSrc, description, title }, idx) => (
                        <Item key={idx} item xs={12} md={3}>
                            <Icon type={imageSrc} />
                            <p>
                                <b>{title}</b>
                            </p>
                            <p>{description}</p>
                        </Item>
                    ))} */}

                    <Icon type={EResource.OurValue} />
                </Grid>
            </Container>
        </Section>
    );
};

export default OurValue;
