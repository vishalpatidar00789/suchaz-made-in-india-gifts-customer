import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const SinglePageWrapper = styled.div``;
export const SinglePageSection = styled.div`
    padding: 30px 0;
    .ps-section__header {
        margin-bottom: 30px;
    }

    @media screen and (min-width: 992px) {
        padding: 60px 0;
    }

    @media (min-width: 1200px) {
        min-width: 1230px;
    }
`;

export const SinglePageSectionContent = styled.div`
    a {
        color: #1890ff;
    }
    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 18px;
    }

    h1,
    h2,
    h3,
    h4 {
        position: relative;
        color: #000;
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 700;
    }

    p {
        font-size: 1.4rem;
        line-height: 1.6em;
        color: #666;
        margin-top: 0;
        margin-bottom: 1em;
    }
`;

export const PrivacyPolicyPageSection = styled(SinglePageSection)``;
export const PrivacyPolicySectionContent = styled(SinglePageSectionContent)``;
export const TACPageSection = styled(SinglePageSection)``;
export const TACSectionContent = styled(SinglePageSectionContent)``;
export const DisclaimerPageSection = styled(SinglePageSection)``;
export const DisclaimerPageContent = styled(SinglePageSectionContent)``;
export const PALPageSection = styled(SinglePageSection)``;
export const PALPageContent = styled(SinglePageSectionContent)``;
export const ReturnsPolicyPageSection = styled(SinglePageSection)``;
export const ReturnsPolicyPageContent = styled(SinglePageSectionContent)``;
export const AboutUsPageSection = styled(SinglePageSection)``;
export const AboutUsPageContent = styled(SinglePageSectionContent)``;
