import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { listResetMixin } from 'assets/styles/mixins.style';
export const FooterWidgetsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 35px;
`;
export const FooterWidgetsContainer = styled.aside`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    ${listResetMixin}
    .widget-title {
        font-size: 16px;
        margin-bottom: 30px;
        color: ${themeGet('colors.headingsColor', '#0D1136')};
        font-weight: 600;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const FooterWidgetsContactContainer = styled(FooterWidgetsContainer)``;

export const FooterWidgetsContent = styled.div`
    p {
        font-size: 1.4rem;
        line-height: 1.6em;
        color: ${themeGet('colors.textColor', '#c3404e')};
        a {
            color: inherit;
            &:hover {
                text-decoration: none;
            }
        }
    }
`;

export const FooterWidgetsLink = styled.ul`
    li {
        display: block;
        padding: 4px 0;

        a {
            display: inline-block;
            color: ${themeGet('colors.textColor', '#c3404e')};
            line-height: 20px;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: ${themeGet('colors.headingsColor', '#0D1136')};
                transform: scale3d(0, 1, 1);
                transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
                transform-origin: 100% 50%;
            }

            &:hover {
                &:before {
                    transform: scale3d(1, 1, 1);
                    transform-origin: 0 50%;
                }
            }
        }
    }
`;

export const FooterLinksWrapper = styled.div`
    padding: 60px 0;
    border-top: 1px solid #e1e1e1;

    p {
        strong {
            color: ${themeGet('colors.headingsColor', '#0D1136')};
            margin-right: 20px;
            font-weight: 600;
        }

        a {
            display: inline-block;
            color: ${themeGet('colors.textColor', '#c3404e')};
            line-height: 20px;
            margin-right: 10px;
            position: relative;

            &:after {
                content: '|';
                margin-left: 5px;
            }

            &:before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: ${themeGet('colors.textColor', '#c3404e')};
                transform: scale3d(0, 1, 1);
                transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
                transform-origin: 100% 50%;
            }

            &:hover {
                &:before {
                    transform: scale3d(1, 1, 1);
                    transform-origin: 0 50%;
                }
            }

            &:last-child {
                &:after {
                    display: none;
                }
            }
        }
    }
`;

export const FooterCopyrightWrapper = styled.div`
    padding: 35px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-top: 1px solid #e1e1e1;

    p {
        margin-bottom: 0;
        line-height: 30px;
        color: ${themeGet('colors.headingsColor', '#0D1136')};

        &:last-child {
            span {
                display: inline-block;
                line-height: inherit;
                vertical-align: middle;
            }

            a {
                display: inline-block;
                margin-left: 20px;
                vertical-align: middle;
            }
        }
    }
`;
export const FooterContainer = styled.div`
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
const FooterWrapper = styled.footer`
    padding-top: 40px;

    @media (max-width: 767px) {
        ${FooterWidgetsWrapper} {
            flex-flow: row wrap;

            > * {
                width: 100%;
                max-width: 25%;
            }

            ${FooterWidgetsContactContainer} {
                max-width: 100%;
                width: 100%;
            }
        }
    }

    @media (max-width: 479px) {
        ${FooterWidgetsWrapper} {
            > * {
                max-width: 50%;
                flex-basis: 50%;
            }
        }
        ${FooterCopyrightWrapper} {
            flex-flow: row wrap;
            text-align: center;

            p {
                display: block;
                width: 100%;

                span {
                    display: block;
                    padding-bottom: 10px;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding-bottom: 50px;
    }
`;

export default FooterWrapper;
