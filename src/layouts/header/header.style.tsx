import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ContainerMixin, listResetMixin } from 'assets/styles/mixins.style';
import { MenuToggle, MenuWrapper, MenuWrapperSticky } from './menu/menu.style';

export const HeaderDefaultTop = styled.div`
    padding: 25px 0;
    background-color: ${themeGet('colors.primary.regular', '#009e7f')};
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const HeaderDefaultContainer = styled.div`
    ${ContainerMixin};
`;

export const HeaderDefaultLeft = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    ${MenuWrapper} {
        display: none;
    }
`;

export const HeaderDefaultCenter = styled.div``;

export const HeaderDefaultRight = styled.div`
    max-width: 370px;
`;

const HeaderDefaultWrapper = styled.header`
    ${listResetMixin}
    &.header--sticky {
        ${HeaderDefaultTop} {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: none;
            padding: 10px 0;
        }

        ${HeaderDefaultLeft} {
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
        &.header--mobile {
            display: block;
        }
    }
`;

export default HeaderDefaultWrapper;
