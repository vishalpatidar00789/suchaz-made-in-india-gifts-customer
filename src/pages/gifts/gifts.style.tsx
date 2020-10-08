import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { verticalAlignMixin } from 'assets/styles/mixins.style';
export const GiftsPageMobileDrawerWrapper = styled.div`
    height: 100vh;
`;

export const GiftsPageMobileDrawerClose = styled.span`
    ${verticalAlignMixin()};
    right: 20px;
    font-size: 18px;
    &:before,
    &:after {
        background-color: ${themeGet('colors.white', '#fff')};
        height: 60%;
    }
`;

export const GiftsPageMobileDrawerHeader = styled.div`
    position: relative;
    text-align: center;
    padding: 15px 20px;
    background-color: ${themeGet('colors.majorColor', '#c3404e')};
    h3 {
        margin-bottom: 0;
        font-weight: 600;
        color: ${themeGet('colors.white', '#fff')};
        font-size: 1.6rem;
        line-height: 20px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
`;

export const GiftsPageMobileDrawerContent = styled.div`
    height: calc(100vh - 50px);
    padding: 0 20px;
`;

export const GiftsPageMobileFilterContainer = styled.div`
    display: none;

    .ps-btn,
    button.ps-btn {
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        line-height: 20px;
        color: #000;
        border: none;
        font-weight: 600;
        border-radius: 4px;
        background-color: #c3404e;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
        cursor: pointer;
    }

    @media (max-width: 991px) {
        display: block;
    }
`;
export const GiftsPageFilterContainer = styled.div`
    display: block;
    @media (max-width: 991px) {
        display: none;
    }
`;

export const GiftsPageFilterWrapper = styled.div`
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
`;

const GiftsPageWrapper = styled.div``;

export default GiftsPageWrapper;
