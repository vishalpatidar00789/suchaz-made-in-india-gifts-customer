import { listResetMixin } from 'assets/styles/mixins.style';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const HomeProductsSectionLinks = styled.ul`
    display: inline-block;

    li {
        display: inline-block;
        vertical-align: top;
        margin-right: 30px;

        a {
            color: ${themeGet('colors.textColor', '#c3404e')};

            &:hover {
                color: ${themeGet('colors.majorColor', '#c3404e')}
            }
        }

        &:last-child {
            margin-right: 0;
        }

        &.active {
            a {
                color: ${themeGet('colors.majorColor', '#c3404e')}
            }
        }
    }
`;
export const HomeProductsSectionContent = styled.div`
    padding: 30px 20px;
    .slick-slide {
        padding-bottom: 2px;
    }
`;
export const HomeProductsSectionHeaderBlockRight = styled.div`
    figure {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        padding: 7px 20px;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        border-radius: 3px;
        line-height: 1;
        background-color: #f14705;

        figcaption {
            color: #ffffff;
            font-weight: 600;
            margin-right: 20px;
        }
    }
    .ps-countdown {
        li {
            display: inline-block;

            span {
                font-weight: 600;
            }

            &:after {
                content: ':';
            }

            &:last-child {
                &:after {
                    display: none;
                }
            }
        }
    }
`;

export const HomeProductsSectionHeaderBlockLeft = styled.div`
    h3 {
        margin-bottom: 0;
        font-size: 24px;
        font-weight: 400;
        margin-right: 70px;
    }
`;

export const HomeProductsSectionHeaderBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: 479px) {
        flex-flow: row wrap;
        ${HomeProductsSectionHeaderBlockLeft} {
            margin-bottom: 10px;

            h3 {
                margin-right: 0;
            }
        }
    }
`;
export const HomeProductsSectionHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3;

    h3 {
        margin-bottom: 0;
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        line-height: 1;
    }
`;
export const HomeProductsSectionWrapper = styled.div`
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
export const HomeProductsContainer = styled.div`
    ${listResetMixin};
    padding-bottom: 80px;
    @media (max-width: 1199px) {
        ${HomeProductsSectionHeader} {
            flex-flow: row wrap;
        }
    }
    @media (max-width: 991px) {
        padding-bottom: 50px;
        ${HomeProductsSectionHeader} {
            h3 {
                padding-bottom: 10px;
            }
        }
    }
    @media (max-width: 767px) {
        padding-bottom: 40px;
    }
    @media (max-width: 479px) {
        padding-bottom: 0px;
    }
`;

const HomeProductsWrapper = styled.div<{ displayProducts: boolean }>`
    display: ${({ displayProducts }) => (displayProducts ? 'block' : 'none')};
`;

export default HomeProductsWrapper;
