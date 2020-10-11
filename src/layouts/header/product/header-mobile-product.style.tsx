import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { clearfixMixin, listResetMixin } from 'assets/styles/mixins.style';

export const HeaderMobileProductTop = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: none;
    @media (max-width: 479px) {
        padding: 10px 20px;
    }
`;

export const HeaderMobileProductTopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .header__back {
        vertical-align: middle;
        text-align: left;

        strong {
            font-size: 18px;
            vertical-align: middle;
        }

        i {
            vertical-align: middle;
            margin-right: 0.5em;
            font-size: 24px;
            color: ${themeGet('colors.headingsColor', '#0D1136')};
        }
    }
`;

export const HeaderMobileProductTopRight = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderMobileProductContainer = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 9999;
    text-align: center;
    color: ${themeGet('colors.white', '#fff')};
    border-bottom: 0 none;
    background-color: ${themeGet('colors.majorColor', '#c3404e')};
    transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    ${clearfixMixin};
`;

const HeaderMobileProductWrapper = styled.header`
    ${listResetMixin}
    display: none;
    @media (max-width: 1199px) {
        display: block;
    }
`;

export default HeaderMobileProductWrapper;
