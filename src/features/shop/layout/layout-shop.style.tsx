import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { listResetMixin } from 'assets/styles/mixins.style';
export const LayoutShopPaginationWrapper = styled.div`
    padding-top: 40px;
    text-align: center !important;
`;
export const LayoutShopProductWrapper = styled.div`
    @media (max-width: 1199px) {
        margin-bottom: 30px;
    }
    @media (max-width: 767px) {
        .row {
            margin: 0 -2px;

            > * {
                padding: 0 2px;
            }
        }
    }
`;
export const LayoutShopContent = styled.div``;
export const LayoutShopHeaderView = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 40px;

    p {
        margin-bottom: 0;
        margin-right: 20px;
        color: ${themeGet('colors.headingsColor', '#0D1136')};
    }

    ul {
        li {
            display: inline-block;
            vertical-align: top;
            margin-right: 10px;

            a {
                font-size: 24px;
                color: #999999;
            }

            &:last-child {
                margin-right: 0;
            }

            &.active {
                a {
                    color: ${themeGet('colors.headingsColor', '#0D1136')};
                }
            }
        }
    }
`;
export const LayoutShopHeaderAction = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .form-control {
        height: 40px;
        background-color: #fff;
        outline: none;
        font-size: 14px;
        padding: 0 20px;
        border: none;
        border: 1px solid #dddddd;
        border-radius: 0;
        box-shadow: 0 0 rgba(#000, 0);
        transition: all 0.4s ease;
        box-shadow: 0 0 0 #000;

        &:focus {
            outline: none;
            box-shadow: 0 0 0 #000;
            border-color: ${themeGet('colors.majorColor', '#c3404e')};
        }
    }

    .ps-tab-list {
        display: flex;
        flex-flow: row nowrap;
    }
`;
export const LayoutShopHeader = styled.div`
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f5f5f5;
    align-items: center;
    ${listResetMixin};
    padding: 8px 15px;

    p {
        margin-bottom: 0;
        display: inline-block;
        font-size: 1.4rem;
        line-height: 1.6em;
        color: #666;

        strong {
            color: ${themeGet('colors.headingsColor', '#0D1136')};
        }
    }
`;
const LayoutShopWrapper = styled.div`
    .select2 {
        display: inline-block;

        .select2-selection__rendered {
            padding: 6px 20px;
        }
    }
    @media (max-width: 1680px) and (min-width: 1440px) {
        .row {
            .col-xl-2 {
                max-width: 20%;
                flex-basis: 20%;
            }
        }
    }

    @media (max-width: 1440px) and (min-width: 1200px) {
        .row {
            .col-xl-2 {
                max-width: 25%;
                flex-basis: 25%;
            }
        }
    }

    @media (max-width: 1199px) {
        margin-top: 40px;
    }

    @media (max-width: 767px) {
        ${LayoutShopHeader} {
            flex-flow: row nowrap;
            justify-content: space-between;

            > * {
                flex-basis: 100%;
                max-width: 50%;
            }

            ${LayoutShopHeaderView} {
                padding-left: 10px;
            }
        }

        ${LayoutShopHeaderAction} {
            width: 100%;
            justify-content: flex-end;

            .select2 {
                display: none;
            }
        }
    }

    @media (max-width: 479px) {
        ${LayoutShopHeader} {
            flex-flow: row wrap;
            p {
                display: block;
                max-width: 100%;
                flex-basis: 100%;
                margin-bottom: 10px;
            }
            ${LayoutShopHeaderAction} {
                max-width: 100%;
            }
        }
    }
`;

export default LayoutShopWrapper;
