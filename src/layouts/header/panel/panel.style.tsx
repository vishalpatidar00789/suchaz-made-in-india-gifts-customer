import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const PanelCategoriesWrapper = styled.div`
    .ant-menu-inline {
        border-right: none !important;

        .ant-menu-submenu-title {
            padding: 0 !important;
        }
    }
    .ant-menu {
        .ant-menu-item {
            &.ant-menu-item-selected {
                background-color: ${themeGet('colors.majorColor', '#c3404e')};
                &:after {
                    display: none;
                }
                a {
                    padding: 0 10px;
                    color: ${themeGet('colors.white', '#fff')};
                    transition: all 0.25s ease;
                }
            }
        }
    }
`;

export const PanelCartWrapper = styled.div`
    position: relative;
    padding-bottom: 120px;
    height: calc(100% - 50px);
    background-color: ${themeGet('colors.white', '#fff')};
`;

export const PanelCartContent = styled.div`
    padding: 20px 0 0;
    margin-bottom: 10px;
    min-height: 300px;
    overflow: auto;
    max-height: 100%;
`;

export const PanelCartProduct = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }

    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    &:last-child {
        border-bottom: none;
    }
`;

export const PanelCartProductThumbnail = styled.div`
    max-width: 56px;
`;

export const PanelCartProductContent = styled.div`
    position: relative;
    padding-right: 30px;
    padding-left: 20px;

    a {
        color: #06c;

        &:hover {
            color: ${themeGet('colors.majorColor', '#c3404e')};
        }
    }

    p {
        strong {
            color: ${themeGet('colors.headingsColor', '#000')};
            font-weight: 500;
        }
    }

    small {
        font-size: 14px;
        color: ${themeGet('colors.headingsColor', '#000')};
    }
`;
export const PanelCartProductRemove = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    color: ${themeGet('colors.textColor', '#c3404e')};
`;

export const PanelCartProductItems = styled.div``;

export const PanelCartProductFooter = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 100%;
    padding-top: 10px;
    transform: translateX(-50%);
    border-top: 1px solid #e1e1e1;
    h3 {
        display: block;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 600;

        strong {
            float: right;
            color: ${themeGet('colors.red', '#c3404e')};
        }
    }

    figure {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        .ps-btn {
            padding: 12px 25px;
        }
    }

    .ps-btn,
    button.ps-btn {
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: ${themeGet('colors.headingsColor', '#000')};
        border: none;
        font-weight: 600;
        border-radius: 4px;
        background-color: ${themeGet('colors.majorColor', '#c3404e')};
        transition: all 0.4s ease;
        cursor: pointer;

        &--fullwidth {
            width: 100%;
            text-align: center;
        }
    }
`;
