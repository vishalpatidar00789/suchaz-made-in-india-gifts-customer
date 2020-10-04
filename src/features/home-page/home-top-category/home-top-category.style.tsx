import { listResetMixin, maxAreaMixin } from 'assets/styles/mixins.style';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const HomeTopCategorySectionBlock = styled.div`
    margin-bottom: 30px;
    padding: 20px 10px;
    text-align: center;
    transition: all 0.4s ease;
    box-shadow: 0 0 4px #aaa;
    a {
        ${maxAreaMixin()};
    }

    p {
        font-size: 16px;
        margin-bottom: 0;
        font-weight: 500;
        color: ${themeGet('colors.majorColor', '#c3404e')};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* after 3 line show ... */
        -webkit-box-orient: vertical;
        line-height: 1.6em;
    }

    &:hover {
        border-color: ${themeGet('colors.majorColor', '#c3404e')};
        p {
            color: #09c;
        }
    }

    @media (max-width: 479px) {
        padding: 0px 10px;
    }
`;
export const HomeTopCategorySectionContent = styled.div`
    padding-top: 55px;

    @media (min-width: 1680px) {
        .row {
            .col-xl-2 {
                max-width: calc(100% / 8);
            }
        }
    }

    @media (min-width: 1440px) {
        .row {
            .col-xl-2 {
                max-width: calc(100% / 8);
            }
        }
    }
`;
export const HomeTopCategorySectionHeaderBlockLeft = styled.div`
    h3 {
        margin-bottom: 0;
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        line-height: 1;
        text-transform: capitalize;
        margin-right: 70px;
    }
`;

export const HomeTopCategorySectionHeaderBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: 479px) {
        flex-flow: row wrap;
        ${HomeTopCategorySectionHeaderBlockLeft} {
            margin-bottom: 10px;

            h3 {
                margin-right: 0;
            }
        }
    }
`;

export const HomeTopCategorySectionHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3;
`;
export const HomeTopCategorySectionWrapper = styled.div`
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
const HomeTopCategoryWrapper = styled.div`
    ${listResetMixin};
    padding-bottom: 80px;
    @media (max-width: 1199px) {
        padding: 60px 0;
    }
    @media (max-width: 991px) {
        padding-bottom: 50px;
        padding: 50px 0;
    }
    @media (max-width: 767px) {
        padding-bottom: 40px;
        padding: 40px 0;
    }
    @media (max-width: 479px) {
        padding-bottom: 0px;
        padding: 35px 0;
    }
`;

export default HomeTopCategoryWrapper;
