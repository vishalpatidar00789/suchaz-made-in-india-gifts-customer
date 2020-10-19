import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CheckoutFormOrder = styled.div`
    h3 {
        font-size: 24px;
        position: relative;
        color: #000;
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 700;
    }
    figure {
        margin-bottom: 25px;
        padding-bottom: 25px;
        border-bottom: 1px solid #eaeaea;

        figcaption {
            display: flex;
            justify-content: space-between;
            font-weight: 400;

            strong {
                font-size: 14px;
                color: ${themeGet('colors.headingsColor', '#0D1136')};
                font-weight: 600;
                text-transform: uppercase;
            }

            small {
                font-size: 16px;
            }
        }
    }

    .ps-block__items {
        a {
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            width: 100%;

            strong {
                font-weight: 600;

                span {
                    color: ${themeGet('colors.textColor', '#c3404e')};
                    margin-left: 10px;
                }
            }

            small {
                font-size: 14px;
                color: ${themeGet('colors.headingsColor', '#0D1136')};
            }
        }
    }

    .ps-block__shipping {
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .ps-block__total {
        h3 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0;
            font-size: 16px;
            color: ${themeGet('colors.textColor', '#c3404e')};

            strong {
                color: ${themeGet('colors.headingsColor', '#0D1136')};
            }
        }
    }

    .ps-block__content {
        padding: 30px 20px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 2px solid #eaeaea;
    }

    .ps-block__payment-methods {
        .ps-radio {
            margin-bottom: 10px;

            > label {
                color: ${themeGet('colors.headingsColor', '#0D1136')};
            }
        }

        p {
            margin-top: 20px;
            font-size: 16px;

            a {
                color: ${themeGet('colors.headingsColor', '#0D1136')};

                &:hover {
                    color: ${themeGet('colors.majorColor', '#c3404e')};
                }
            }
        }
    }

    .ps-block__footer {
        button {
            height: 60px;
        }
    }

    .form-group {
        margin-bottom: 2.5rem;

        > label {
            margin-bottom: 1.5rem;
            font-weight: 400;
            color: ${themeGet('colors.white', '#fff')};
            line-height: 1em;
        }
    }

    .form-control {
        border-radius: 0;
        background-color: ${themeGet('colors.white', '#fff')};
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
`;
export const CheckoutFormContent = styled.div`
    h3 {
        font-size: 24px;
        position: relative;
        color: #000;
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 700;
    }

    .form-group {
        margin-bottom: 2.5rem;

        > label {
            margin-bottom: 1.5rem;
            font-weight: 400;
            color: ${themeGet('colors.white', '#fff')};
            line-height: 1em;
        }
    }

    .form-control {
        border-radius: 0;
        background-color: ${themeGet('colors.white', '#fff')};
    }

    .ps-btn {
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: ${themeGet('colors.black', '#000000')};
        border: none;
        font-weight: 600;
        border-radius: 4px;
        background-color: ${themeGet('colors.majorColor', '#c3404e')};
        transition: all 0.4s ease;
        cursor: pointer;
        :hover {
            background-color: ${themeGet('colors.black', '#000000')};
            color: ${themeGet('colors.white', '#fff')};
        }
        &--fullwidth {
            width: 100%;
            text-align: center;
        }

        &--sm {
            padding: 0.5rem 2rem;
            font-size: 1.2rem;
        }
    }

    .ps-form__submit {
        @media (min-width: 768px) {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }
    }
    label {
        @media (max-width: 991px) {
            display: none;
        }
    }

    .ps-block__footer {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .submit {
        text-align: center;

        button {
            height: 50px;
            padding: 0 30px;
        }
    }

    @media (max-width: 991px) {
        h3 {
            font-size: 24px;
        }
    }
    @media (max-width: 479px) {
        h3 {
            font-size: 20px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            min-width: 1230px;
        }
    }
`;
export const CheckoutFormWrapper = styled.div``;
const CheckoutWrapper = styled.div`
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

export default CheckoutWrapper;
