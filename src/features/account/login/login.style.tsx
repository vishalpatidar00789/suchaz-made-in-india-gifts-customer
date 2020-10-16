import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { listResetMixin } from 'assets/styles/mixins.style';

const LoginWrapper = styled.div`
    min-height: 100vh;
    background-color: #f1f1f1;

    .ps-form--account {
        max-width: 430px;
        margin: 0 auto !important;
        padding-top: 10px;
        ${listResetMixin};
        padding-bottom: 20px;
    }

    .ps-tab-list {
        text-align: center;
        margin-bottom: 30px !important;

        li {
            display: inline-block;
            padding: 0 15px;

            a {
                font-size: 30px;
                color: ${themeGet('colors.textColor', '#c3404e')};
                font-weight: 600;
            }

            &.active {
                a {
                    color: ${themeGet('colors.headingsColor', '#0D1136')};
                }
            }
        }
    }

    .ps-tab {
        background-color: ${themeGet('colors.white', '#fff')};
    }

    p {
        margin-bottom: 50px;

        a {
            color: #06c;
        }
    }

    .ps-form__content {
        padding: 30px 30px 0;

        h5 {
            margin: 0 0 25px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
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

    .submit {
        text-align: center;
        padding-bottom: 20px;

        button {
            height: 50px;
            padding: 0 30px;
        }
    }

    .text-right {
        padding-bottom: 20px;
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

export default LoginWrapper;
