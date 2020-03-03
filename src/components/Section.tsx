import React from 'react';
import styled from 'styled-components';

interface SectionProps {}
const Section: React.FC<SectionProps> = ({ children }) => {
    const Styled = styled.section`
        margin: 30px 0;
        padding: 60px 0;
    `;
    return <Styled>{children}</Styled>;
};

export default Section;
