import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const BreadCrumbList = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
    background-color: transparent;

    li {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        color: ${themeGet('colors.headingsColor', '#0D1136')};

        &:before {
            content: '/';
            margin: 0 5px;
        }

        &:first-child {
            padding-left: 0;

            &:before {
                display: none;
            }
        }
    }

    a {
        line-height: 20px;
        color: #09c;

        &:hover {
            color: ${themeGet('colors.majorColor', '#c3404e')};
        }

        i {
            margin-right: 5px;
        }
    }
`;

export const BreadCrumbContainer = styled.div`
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
const BreadCrumbWrapper = styled.div`
    padding: 20px 0;
    background-color: #f1f1f1;
    @media (max-width: 991px) {
        position: relative;
        padding: 10px 0;
        ${BreadCrumbList} {
            li {
                font-size: 12px;
            }

            a {
                font-size: 12px;
            }
        }
    }
`;

export default BreadCrumbWrapper;
