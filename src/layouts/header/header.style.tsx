import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { listResetMixin } from 'assets/styles/mixins.style';
import { MenuToggle, MenuWrapper, MenuWrapperSticky } from './menu/menu.style';

export const HeaderTop = styled.div`
    padding: 5px 0;
    background-color: ${themeGet('colors.primary.regular', '#009e7f')};
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }

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
`;

export const HeaderLeft = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    ${MenuWrapper} {
        display: none;
    }
`;

export const HeaderCenter = styled.div``;

export const HeaderRight = styled.div`
    max-width: 370px;
`;

const HeaderWrapper = styled.header`
    ${listResetMixin}
    &.header--sticky {
        ${HeaderTop} {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: none;
            padding: 10px 0;
        }

        ${HeaderLeft} {
            .ps-logo {
                display: none;
            }

            ${MenuWrapper} {
                display: block;
                background-color: transparent;
                ${MenuToggle} {
                    i {
                        font-size: 30px;
                    }

                    span {
                        font-size: 16px;
                    }
                }
            }

            ${MenuWrapperSticky} {
            }
        }
    }

    @media (max-width: 1199px) {
        display: none;
    }
`;

export default HeaderWrapper;
