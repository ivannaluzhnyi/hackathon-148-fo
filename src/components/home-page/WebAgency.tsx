import React from 'react';
import { Grid, Container } from '@material-ui/core';
import styled from 'styled-components';
import Section from '../Section';
import Icon from '../Icon';
import { EResource } from '../../utils/resources';

const Wrapper = styled(Grid)``;

const Circle: React.FC<any> = ({ children, size, left, color, top, right }) => {
    const StyledC: any = styled.div`
        border-radius: 50%;
        height: ${(props: any) => `${props.size}px`};
        width: ${(props: any) => `${props.size}px`};
        background-color: ${(props: any) => props.color};

        position: absolute;
        top: ${(props: any) => props.top};
        right: ${(props: any) => props.right};
        left: ${(props: any) => props.left};

        & > div {
            /* text-align: center; */
            /* margin: auto; */
            padding-top: ${(props: any) => `${props.size / 9}px`};
            text-align: center;

            & > p {
                color: white;

                &:nth-child(1) {
                    font-weight: 800;
                    font-size: 45px;
                    margin-bottom: 10px;
                }

                &:nth-child(2) {
                    font-size: 30px;
                    margin-top: 0;
                }
            }
        }
    `;

    return (
        <StyledC size={size} left={left} color={color} top={top} right={right}>
            {children}
        </StyledC>
    );
};

const CircleWrapper = styled.div`
    position: relative;
    height: 500px;
`;

const Description = styled.p`
    width: 410px;
`;

const Title = styled.h1`
    font-size: 29px;
`;

const WebAgency = () => {
    const prepare = [
        {
            label: 'Agents',
            val: '1449',
            color: '#56AA59',
            size: '219',
            top: '',
            right: '10px',
            left: '5px',
        },
        {
            label: 'projets réalisés',
            val: '928',
            color: '#EF819B',
            size: '317',
            top: '45px',
            right: '10px',
            left: '',
        },
        {
            label: 'projets en cours',
            val: '139',
            color: '#FDC543',
            size: '270',
            top: '270px',
            right: '',
            left: '5px',
        },
    ];

    const renderCircles = () => (
        <CircleWrapper>
            {prepare.map(elm => (
                <Circle {...elm}>
                    <div>
                        <p>{elm.val}</p>
                        <p> {elm.label} </p>
                    </div>
                </Circle>
            ))}
        </CircleWrapper>
    );

    return (
        <Section>
            <Container>
                <Wrapper container>
                    <Grid md xs item>
                        <Title>Qui sont les agents du web ?</Title>

                        <Icon type={EResource.Quote} />

                        <Description>
                            Les agents du web allie conseil stratégique créatif
                            et solutions techniques innovantes : Conseil et mise
                            en œuvre.
                        </Description>
                    </Grid>

                    <Grid md xs item>
                        {renderCircles()}
                    </Grid>
                </Wrapper>
            </Container>
        </Section>
    );
};

export default WebAgency;
