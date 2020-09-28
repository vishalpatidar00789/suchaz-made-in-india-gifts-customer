import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
    hiddenMixin,
    showMixin,
    verticalAlignMixin,
} from 'assets/styles/mixins.style';

const MenuDropdown = css`
    .menu--dropdown {
        background-color: #fff;
        border: 1px solid #d3d3d3;
        min-width: 260px;
        > li {
            padding: 0 20px;
            transition: all 0.4s ease;

            > a {
                display: block;
                padding: 10px 0;
                color: ${themeGet('colors.text.bold', '#000')};

                i {
                    margin-right: 10px;
                    font-size: 18px;
                }
            }

            &.has-mega-menu {
                .mega-menu {
                    position: absolute;
                    top: 0;
                    left: 100%;
                    width: auto;
                    min-width: 530px;
                    ${hiddenMixin};
                    border-left: none;
                }
            }

            &:hover {
                background-color: ${themeGet(
                    'colors.primary.regular',
                    '#009e7f'
                )};

                &.has-mega-menu {
                    .mega-menu {
                        ${showMixin};
                    }
                }
            }
        }
    }
`;

const MenuDefault = css`
    .menu {
        text-align: left;

        > li {
            display: inline-block;

            > a {
                display: inline-block;
                padding: 15px 25px;
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                color: ${themeGet('colors.white', '#fff')};

                &:hover {
                    color: ${themeGet('colors.text.bold', '#000')};
                }
            }

            &:first-child {
                padding-left: 0;

                > a {
                    padding-left: 0;
                }
            }

            &:last-child {
                margin-right: 0;
                padding-right: 0;
            }

            .sub-toggle {
                margin-left: 5px;
                display: none;
            }

            .sub-menu {
                ${hiddenMixin}
                transform: scale3d(1, 1, 0) translateY(10px);
            }

            .mega-menu {
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 1000;
                ${hiddenMixin}
            }

            &.menu-item-has-children {
                position: relative;

                > a {
                    &:after {
                        content: '\f078';
                        font: normal normal normal 12px/1 FontAwesome;
                        ${verticalAlignMixin()};
                        right: 0;
                    }

                    &:before {
                        content: '';
                        width: 13px;
                        height: 13px;
                        background-color: ${themeGet('colors.white', '#fff')};
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        z-index: 10000;
                        border-left: 1px solid #ccc;
                        border-top: 1px solid #ccc;
                        transform: rotate(45deg) translate(-50%, -50%);
                        transform-origin: 0 0;
                        ${hiddenMixin};
                    }
                }
                &:hover {
                    > .sub-menu {
                        transform: scale3d(1, 1, 1) translateY(0);
                    }
                }
            }

            &.has-mega-menu {
                position: relative;

                .mega-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                }

                &:hover {
                    .mega-menu {
                        ${showMixin};
                        transform: translateY(0);
                    }
                }
            }

            &:hover {
                .sub-toggle {
                    color: ${themeGet('colors.white', '#fff')};
                }

                > .sub-menu {
                    ${showMixin};
                }

                &.menu-item-has-children {
                    > a {
                        &:before {
                            ${showMixin};
                        }
                    }
                }
            }
        }
    }
`;

const MegaMenu = css`
    .mega-menu {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 10px 10px 10px;
        background-color: ${themeGet('colors.white', '#fff')};
        transition: all 0.4s ease;
        border: 1px solid #ccc;

        > * {
            width: 100%;
            padding: 10px 15px;
        }

        h4 {
            margin: 0;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 600;
            color: ${themeGet('colors.text.bold', '#000')};
        }

        .mega-menu__column {
            min-width: 180px;
        }

        .mega-menu__list {
            background-color: transparent;

            li {
                a {
                    display: block;
                    color: ${themeGet('colors.text.bold', '#000')};
                    line-height: 20px;
                    padding: 5px 0;
                    font-size: 14px;
                    background-color: transparent;

                    &.has-badge {
                        padding-right: 20px;

                        &:after {
                            content: 'New';
                            display: inline-block;
                            position: absolute;
                            top: 5px;
                            right: 0;
                            font-size: 9px;
                            color: ${themeGet('colors.white', '#fff')};
                            padding: 0px 8px;
                            line-height: 2em;
                            border-radius: 10px;
                            background-color: ${themeGet(
                                'colors.primary.regular',
                                '#009e7f'
                            )};
                        }

                        &.sale {
                            color: ${themeGet('colors.red', 'red')};

                            &:after {
                                content: 'Sale';
                                background-color: #ffa800;
                            }
                        }
                    }

                    &:hover {
                        color: ${themeGet('colors.primary.regular', '#009e7f')};
                    }
                }
            }
        }
    }
`;

const MenuContentWrapper = styled.div`
    ${MenuDropdown};

    ${MenuDefault};

    ${MenuDefault};

    ${MegaMenu};
`;

export default MenuContentWrapper;
