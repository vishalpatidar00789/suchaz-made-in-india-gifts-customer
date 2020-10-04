import styled from 'styled-components';
import { flexRowMixin } from 'assets/styles/mixins.style';
export const HomeBannerDiv = styled.div`
    position: relative;
`;

export const HomeBannerSectionLeft = styled.div`
    padding-right: 0px;
`;
export const HomeBannerContainer = styled.div`
    ${flexRowMixin};
    max-width: 1650px;
    margin: 0 auto;
    padding: 0 15px;
    @media (max-width: 1680px) {
        padding: 0 30px;
        max-width: 100%;
    }
    @media (max-width: 479px) {
        padding: 0 15px;
    }

    @media (max-width: 1199px) {
        display: block;
        ${HomeBannerSectionLeft} {
            max-width: 100%;
            margin-bottom: 10px;
            padding-right: 0;
        }
    }
`;
const HomeBannerWrapper = styled.div`
    padding-top: 30px;
    margin-bottom: 30px;
`;

export default HomeBannerWrapper;
