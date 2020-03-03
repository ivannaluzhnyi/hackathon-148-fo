import React from 'react';
import styled from 'styled-components';

interface SectionProps {
    isGrey?: boolean;
}
const Section: React.FC<SectionProps> = ({ children, isGrey }) => {
    const Styled = styled.section`
        margin: 30px 0;
        padding: 60px 0;
        background: ${(props: SectionProps) =>
            props.isGrey ? '#E8E8E8' : 'white'};
    `;
    return <Styled isGrey={isGrey}>{children}</Styled>;
};

export default Section;
