import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { verticalAlignMixin } from 'assets/styles/mixins.style';

interface ItemProps {
    isDisabled?: boolean;
    isActive?: boolean;
}
export const NavigationMobileContainerItem = styled.a.attrs((props: ItemProps) => ({
    disabled: props.isDisabled ? props.isDisabled : false,
}))<ItemProps>`
    text-align: center;
    i {
        font-size: 24px;
    }

    span {
        display: block;
    }
    ${({ isActive }) =>
        isActive &&
        css`
            i {
                color: ${themeGet('colors.primary.regular', '#009e7f')};
            }

            span {
                color: ${themeGet('colors.primary.regular', '#009e7f')};
            }
        `}
`;

export const NavigationMobileDrawerWrapper = styled.div`
    height: 100vh;
`;

export const NavigationMobileDrawerClose = styled.span`
    ${verticalAlignMixin()};
    right: 20px;
    font-size: 18px;
    &:before,
    &:after {
        background-color: ${themeGet('colors.white', '#fff')};
        height: 60%;
    }
`;

export const NavigationMobileDrawerHeader = styled.div`
    position: relative;
    text-align: center;
    padding: 15px 20px;
    background-color: ${themeGet('colors.primary.regular', '#009e7f')};
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

export const NavigationMobileDrawerContent = styled.div`
    height: calc(100vh - 50px);
`;

export const NavigationMobileContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationMobileCartCount = styled.span`
    background-color: ${themeGet('colors.text.bold', '#000')};
    position: absolute;
    bottom: 36px;
    right: -6px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    .num {
        font-size: 12px;
        font-style: normal;
        line-height: 1em;
        color: ${themeGet('colors.white', '#fff')};
        font-weight: 600;
    }
`;

const NavigationMobileWrapper = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 10px 30px;
    border-top: 1px solid #ccc;
    background-color: ${themeGet('colors.white', '#fff')};
`;

export default NavigationMobileWrapper;
