import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';
import Section from '../Section';

const Item = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: calc(100% / 3.5);

    & > img {
        border-radius: 50%;
        width: 230px;
        height: 230px;
    }

    & > p {
        text-align: center;
        font-size: 20px;
    }
`;

const OurValue: React.FC = () => {
    const values = [
        {
            imageSrc: EResource.LOGO_148,
            description:
                'loream ispus sdfjbsiu sduqsdqsdqs       qsdqs qsd qs dqs dqs dd q dqsd qsifh siulkfiuslhoamiljzdk',
        },
        {
            imageSrc: EResource.LOGO_148,
            description:
                'loream ispus sdfjbsiu sduifdqdqsds qsd qd qssdqs qsd qs dh siulkfiuslhoamiljzdk',
        },
        {
            imageSrc: EResource.LOGO_148,
            description:
                'loream ispus sdfjbsiu sduifqsd qd qsdqs qdqs dh siulkfiuslhoamiljzdk',
        },
    ];

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
                    {values.map(({ imageSrc, description }, idx) => (
                        <Item key={idx} item xs={12} md={3}>
                            <Icon type={imageSrc} />
                            <p>{description}</p>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default OurValue;
