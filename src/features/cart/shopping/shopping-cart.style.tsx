import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { verticalAlignMixin } from 'assets/styles/mixins.style';

export const ShoppingCartSectionFooter = styled.div`
    .ps-block--shopping-total {
        margin-bottom: 30px;
        padding: 30px 35px;
        background-color: #f1f1f1;
        border: 1px solid #bfbfbf;

        .ps-block__product {
            li {
                margin-bottom: 10px;
                border-bottom: 1px solid #d6d6d6;
                padding-bottom: 20px;
                margin-bottom: 20px;
            }

            span {
                display: block;
                font-size: 16px;
                line-height: 24px;
            }

            .ps-block__shop {
                color: ${themeGet('colors.headingsColor', '#0D1136')};
            }

            .ps-block__shipping {
                color: ${themeGet('colors.textColor', '#c3404e')};
            }

            .ps-block__estimate {
                strong {
                    font-weight: 600;
                }

                a {
                    display: block;
                    font-size: 14px;
                }
            }
        }

        h3 {
            margin-bottom: 0;
            font-size: 24px;
            font-weight: 600;

            span {
                color: #ff3300;
                font-weight: 600;
                float: right;
            }
        }

        .ps-block__header {
            display: block;
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;

            p {
                font-size: 16px;

                span {
                    float: right;
                }
            }
        }
    }

    .ps-btn {
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: #000;
        border: none;
        font-weight: 600;
        border-radius: 4px;
        background-color: #c3404e;
        transition: all 0.4s ease;
        cursor: pointer;
        :hover {
            background-color: #222;
            color: #fff;
        }
    }

    .ps-btn--fullwidth {
        width: 100%;
        text-align: center;
    }
`;
export const ShoppingCartSection = styled.div`
    .ps-product--cart {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        > * {
            width: 100%;
        }

        .ps-product__thumbnail {
            max-width: 100px;
        }

        .ps-product__content {
            padding-left: 30px;

            a {
                font-size: 16px;
                color: #0066cc;

                &:hover {
                    color: ${themeGet('colors.majorColor', '#c3404e')};
                }
            }

            p {
                strong {
                    font-weight: 500;
                }
            }
        }
    }

    .form-group {
        margin-bottom: 2.5rem;

        > label {
            margin-bottom: 1.5rem;
            font-weight: 400;
            color: #000000;
            line-height: 1em;
        }
    }

    .form-control {
        outline: none;
        height: 50px;
        font-size: 14px;
        padding: 0 20px;
        border: none;
        height: 50px;
        background-color: transparent;
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

        &.ant-input {
            height: 50px;
            border-radius: 0;
            border: 1px solid #dddddd;
            &:focus {
                border-color: ${themeGet('colors.majorColor', '#c3404e')};
                outline: none;
                box-shadow: 0 0 0 transparent;
            }
        }
    }

    .ps-checkbox {
        position: relative;
        display: block;
        > input {
            position: absolute;
            visibility: hidden;
            box-sizing: border-box;
        }

        label {
            margin-bottom: 0;
            position: relative;
            padding-left: 30px;
            color: rgba(0, 0, 0, 0.5);
            font-weight: 400;
            cursor: pointer;
            &:before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0px;
                height: 20px;
                width: 20px;
                z-index: 10;
                border: 1px solid ${themeGet('colors.headingsColor', '#0D1136')};
                transition: all 0.4s ease;
            }

            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 4px;
                left: 7px;
                width: 6px;
                height: 10px;
                border: 2px solid #fff;
                border-top: none;
                border-left: none;
                z-index: 10;
                opacity: 0;
                transform: rotate(0deg);
                transition: all 0.4s ease;
            }
        }

        input[type='checkbox']:checked ~ label {
            &:before {
                background-color: ${themeGet('colors.majorColor', '#c3404e')};
                border-color: ${themeGet('colors.majorColor', '#c3404e')};
            }

            &:after {
                transform: rotate(45deg);
                opacity: 1;
            }
        }
    }

    .form-group--number {
        display: inline-block;
        position: relative;

        button {
            background: none;
            border: none;
            background-color: transparent;
            ${verticalAlignMixin()};
            width: 20px;
            height: 20px;
            max-width: 20px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            color: ${themeGet('colors.headingsColor', '#0D1136')};
            font-size: 20px;
            line-height: 1em;

            &.up {
                right: 10px;
            }

            &.down {
                left: 10px;
            }
        }

        .form-control {
            border: 1px solid #ccc;
            height: 40px;
            padding: 0 25px;
            text-align: center;
            font-size: 14px;
            color: ${themeGet('colors.headingsColor', '#0D1136')};
            border-radius: 50px;
            background-color: transparent;
        }
    }

    .ps-table--shopping-cart {
        thead {
            tr {
                th {
                    padding: 10px;
                    text-transform: uppercase;
                    color: ${themeGet('colors.headingsColor', '#0D1136')};
                    text-align: left;
                    font-weight: 600;
                    background-color: #f2f2f2;
                    border: none;

                    &:first-child {
                        text-align: left;
                    }
                }
            }
        }

        tbody {
            tr {
                td {
                    padding: 20px 10px;
                    vertical-align: middle;
                    font-size: 16px;

                    .form-group--number {
                        max-width: 100px;
                        display: inline-block;

                        input {
                            border-radius: 0;
                        }
                    }

                    .ps-product--cart {
                        max-width: 500px;
                    }

                    &:last-child {
                        text-align: right;

                        a {
                            font-size: 20px;
                        }
                    }
                }
            }
        }

        @media (max-width: 991px) {
            display: none !important;
        }
    }

    .ps-cart--mobile {
        position: relative;
        padding-bottom: 120px;
        height: calc(100% - 50px);
        background-color: #fff;
        .ps-product--cart-mobile {
            display: -moz-box;
            display: flex;
            -moz-box-orient: horizontal;
            -moz-box-direction: normal;
            flex-flow: row nowrap;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eaeaea;
            &:last-child {
                border-bottom: none;
            }
        }

        .ps-product--cart-mobile > * {
            width: 100%;
        }

        .ps-product__thumbnail {
            max-width: 56px;
        }

        .ps-product__content {
            position: relative;
            padding-right: 30px;
            padding-left: 20px;
            .ps-product__remove {
                position: absolute;
                top: 0;
                right: 0;
                font-size: 18px;
                color: #666;
            }
            a {
                color: #06c;
            }
            p {
                font-size: 1.4rem;
                line-height: 1.6em;
                color: #666;
            }
            small {
                font-size: 14px;
                color: #000;
                strong {
                    color: #000;
                    font-weight: 500;
                }
            }
        }

        .ps-cart__content {
            padding: 20px 0 0;
            margin-bottom: 10px;
            min-height: 300px;
            overflow: auto;
            max-height: 100%;
        }

        .ps-cart__footer {
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
                    color: red;
                }
            }

            figure {
                margin-bottom: 0;
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
    }

    .ps-section__cart-actions {
        padding-top: 30px;
        padding-bottom: 30px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    @media (max-width: 479px) {
        .ps-section__cart-actions {
            flex-flow: row wrap;
        }
    }

    .shopping-cart-mobile {
        display: none;

        @media (max-width: 991px) {
            display: block !important;
        }
    }
`;
const ShoppingCartWrapper = styled.div`
    padding: 20px 0;
    .ps-section__header {
        text-align: center;
        padding-bottom: 10px;
        h1 {
            font-size: 48px;
            font-weight: 600;
        }
    }

    @media (max-width: 991px) {
        padding: 75px 0;
        .ps-section__header {
            h1 {
                font-size: 36px;
            }
        }
    }
    @media (max-width: 767px) {
        padding: 60px 0;
        .ps-section__header {
            padding-bottom: 40px;

            h1 {
                font-size: 30px;
            }
        }
    }
    @media (max-width: 479px) {
        padding: 20px 0;
    }

    @media (min-width: 1200px) {
        .container {
            min-width: 1230px;
        }
    }
`;

export default ShoppingCartWrapper;
