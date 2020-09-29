import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { clearfixMixin, listResetMixin } from 'assets/styles/mixins.style';

export const HeaderMobileTop = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: none;
    @media (max-width: 479px) {
        padding: 10px 20px;
    }
`;

export const HeaderMobileTopLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderMobileTopRight = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderMobileContainer = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 9999;
    text-align: center;
    color: ${themeGet('colors.white', '#fff')};
    border-bottom: 0 none;
    background-color: ${themeGet('colors.majorColor', '#c3404e')};
    transition: all 0.4s $ease-in-out-quad;
    ${clearfixMixin};
`;

const HeaderMobileWrapper = styled.header`
    ${listResetMixin}
    display: none;
    @media (max-width: 1199px) {
        display: block;
    }
`;

export default HeaderMobileWrapper;
