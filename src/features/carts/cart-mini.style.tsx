import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { hiddenMixin, showMixin } from 'assets/styles/mixins.style';

export const CartMiniIcon = styled.a`
    display: inline-block;
    position: relative;
    width: 30px;
    height: 42px;
    transition: all 0.4s ease;
    color: ${themeGet('colors.white', '#fff')};
    > i {
        font-size: 30px;
        line-height: 42px;
    }

    span {
        position: absolute;
        bottom: 0;
        right: -6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${themeGet('colors.white', '#fff')};
        vertical-align: top;
        width: 20px;
        height: 20px;
        color: #000;
        background-color: ${themeGet('colors.white', '#fff')};
        border-radius: 50%;

        i {
            font-size: 12px;
            font-style: normal;
            line-height: 1em;
            font-weight: 500;
        }
    }

    &:hover {
        i {
            color: #000;
        }
    }
`;

export const CartMiniContainer = styled.div`
    position: absolute;
    min-width: 370px;
    right: -30px;
    z-index: 30;
    padding-top: 10px;
    transform: translate(0, 20px);
    transition: all 0.4s ease;
    ${hiddenMixin};
`;

export const CartMiniItems = styled.div`
    position: relative;
    padding: 20px;
    max-height: 300px;
    overflow: auto;
    background-color: ${themeGet('colors.white', '#fff')};
    border: 1px solid #e1e1e1;
    border-bottom: none;

    &:before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -8px;
        right: 30px;
        width: 16px;
        height: 16px;
        border-left: 1px solid #e1e1e1;
        border-top: 1px solid #e1e1e1;
        background-color: ${themeGet('colors.white', '#fff')};
        transform: rotate(45deg);
        transform-origin: 50% 50%;
    }
`;

export const CartMiniProduct = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }
    margin-bottom: 30px;
`;

export const CartMiniProductThumbnail = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }
    margin-bottom: 30px;
    max-width: 56px;
`;

export const CartMiniProductContent = styled.div`
    position: relative;
    padding-right: 30px;
    padding-left: 20px;

    a {
        color: #06c;

        &:hover {
            color: ${themeGet('colors.primary.regular', '#c3404e')};
        }
    }

    p {
        strong {
            color: ${themeGet('colors.text.bold', '#0D1136')};
            font-weight: 500;
        }
    }

    small {
        font-size: 14px;
        color: ${themeGet('colors.text.bold', '#0D1136')};
    }
`;

export const CartMiniRemove = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    color: ${themeGet('colors.text.regular', '#c3404e')};
`;
export const CartMiniFooter = styled.div`
    padding: 10px 20px 20px;
    background-color: ${themeGet('colors.white', '#fff')};
    border: 1px solid #e1e1e1;
    border-top: 0;

    h3 {
        display: block;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 600;

        strong {
            float: right;
            color: red;
        }
    }
    figure {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        .ps-btn {
            padding: 12px 25px;
        }
    }
`;

const CartMiniWrapper = styled.div`
    position: relative;
    &:hover {
        ${CartMiniContainer} {
            transform: translate(0, 0px);
            ${showMixin};
        }
    }
`;

export default CartMiniWrapper;
