import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { hiddenMixin, showMixin } from 'assets/styles/mixins.style';

export const MenuToggle = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;

    i {
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
    }

    span {
        font-size: 20px;
        color: ${themeGet('colors.white', '#fff')};
        font-size: 16px;
        font-weight: 600;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${themeGet('colors.text.bold', '#000')};
        transition: transform 0.75s cubic-bezier(0.7, 0, 0.3, 1);
        transform: scale3d(0, 1, 1);
        transform-origin: 100% 50%;
    }

    &:hover,
    &.active {
        &:before {
            transform-origin: 0 50%;
            transform: scale3d(1, 1, 1);
        }
    }
`;

export const MenuContentWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 100%;
    padding-top: 2px;
    ${hiddenMixin};
    transition: all 0.3s ease;
    transform: scale3d(1, 1, 0) translateY(30px);
`;

export const MenuWrapper = styled.div`
    position: relative;
    height: 100%;
    display: block;
    &:hover {
        ${MenuContentWrapper} {
            ${showMixin};
            transform: scale3d(1, 1, 1) translateY(0);
        }
    }
`;

export const MenuWrapperSticky = styled(MenuWrapper)`
    display: none;
`;
