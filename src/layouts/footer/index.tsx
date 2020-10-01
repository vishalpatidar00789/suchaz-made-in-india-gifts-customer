import React, { FC } from 'react';
import FooterCopyright from './footer-copyright';
import FooterLinks from './footer-links';
import FooterWidgets from './footer-widgets';
import FooterWrapper, { FooterContainer } from './footer.style';
const Footer: FC = () => (
    <FooterWrapper>
        <FooterContainer>
            <FooterWidgets />
            <FooterLinks />
            <FooterCopyright />
        </FooterContainer>
    </FooterWrapper>
);
export default Footer;
