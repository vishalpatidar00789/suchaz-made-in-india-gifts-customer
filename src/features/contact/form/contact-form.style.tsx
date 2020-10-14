import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const ContactFormWrapper = styled.div`
    padding: 100px 0;
    background-color: #f6f6f6;

    h3 {
        margin-bottom: 90px;
        text-align: center;
        font-size: 36px;
        font-weight: 600;
        color: ${themeGet('colors.headingsColor', '#0D1136')};
        line-height: 1em;
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
`;

export default ContactFormWrapper;
