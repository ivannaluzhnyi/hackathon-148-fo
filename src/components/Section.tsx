import React from 'react';
import styled from 'styled-components';

interface SectionProps {
    isGrey?: boolean;
    backGroundImage?: any;
    margin?: any;
}
const Section: React.FC<SectionProps> = ({
    children,
    isGrey,
    backGroundImage,
    margin,
}) => {
    const Styled = styled.section`
        margin: ${(props: SectionProps) =>
            props.margin ? props.margin : '30px 0'};
        padding: 60px 0;
        height: 100%;
        background: ${(props: SectionProps) =>
            props.isGrey ? '#E8E8E8' : 'white'};

        background-image: ${(props: SectionProps) =>
            props.backGroundImage ? ` url(${props.backGroundImage})` : ''};

        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    `;
    return (
        <Styled
            margin={margin}
            backGroundImage={backGroundImage}
            isGrey={isGrey}
        >
            {children}
        </Styled>
    );
};

export default Section;
